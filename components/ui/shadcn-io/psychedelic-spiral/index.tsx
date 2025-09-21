"use client";

import React, { useRef, useMemo, forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { cn } from "@/lib/utils";
import * as THREE from "three";

// Extend JSX namespace for React Three Fiber
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      planeGeometry: any;
      shaderMaterial: any;
    }
  }
}

export interface PsychedelicSpiralProps
  extends React.HTMLAttributes<HTMLDivElement> {
  spinRotation?: number;
  spinSpeed?: number;
  offset?: [number, number];
  color1?: string;
  color2?: string;
  color3?: string;
  contrast?: number;
  lighting?: number;
  spinAmount?: number;
  pixelFilter?: number;
  spinEase?: number;
  isRotate?: boolean;
  mouseInteraction?: boolean;
}

// Convert hex to vec4
function hexToVec4(hex: string): [number, number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [0, 0, 0, 1];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
    1.0,
  ];
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    gl_Position = projectionPosition;
    vUv = uv;
  }
`;

const fragmentShader = `
  precision mediump float;

  #define PI 3.14159265359

  uniform float iTime;
  uniform vec2 iResolution;
  uniform float u_spinRotation;
  uniform float u_spinSpeed;
  uniform vec2 u_offset;
  uniform vec4 u_color1;
  uniform vec4 u_color2;
  uniform vec4 u_color3;
  uniform float u_contrast;
  uniform float u_lighting;
  uniform float u_spinAmount;
  uniform float u_pixelFilter;
  uniform float u_spinEase;
  uniform float u_isRotate;

  varying vec2 vUv;

  vec4 effect(vec2 screenSize, vec2 screen_coords) {
    float pixel_size = length(screenSize.xy) / u_pixelFilter;
    vec2 uv = (floor(screen_coords.xy*(1.0/pixel_size))*pixel_size - 0.5*screenSize.xy)/length(screenSize.xy) - u_offset;
    float uv_len = length(uv);

    float speed = (u_spinRotation*u_spinEase*0.2);
    if(u_isRotate > 0.5){
       speed = iTime * speed;
    }
    speed += 302.2;

    float new_pixel_angle = atan(uv.y, uv.x) + speed - u_spinEase*20.0*(1.0*u_spinAmount*uv_len + (1.0 - 1.0*u_spinAmount));
    vec2 mid = (screenSize.xy/length(screenSize.xy))/2.0;
    uv = (vec2((uv_len * cos(new_pixel_angle) + mid.x), (uv_len * sin(new_pixel_angle) + mid.y)) - mid);

    uv *= 30.0;
    speed = iTime*(u_spinSpeed);
    vec2 uv2 = vec2(uv.x+uv.y);

    for(int i=0; i < 5; i++) {
        uv2 += sin(max(uv.x, uv.y)) + uv;
        uv  += 0.5*vec2(cos(5.1123314 + 0.353*uv2.y + speed*0.131121),sin(uv2.x - 0.113*speed));
        uv  -= 1.0*cos(uv.x + uv.y) - 1.0*sin(uv.x*0.711 - uv.y);
    }

    float contrast_mod = (0.25*u_contrast + 0.5*u_spinAmount + 1.2);
    float paint_res = min(2.0, max(0.0,length(uv)*(0.035)*contrast_mod));
    float c1p = max(0.0,1.0 - contrast_mod*abs(1.0-paint_res));
    float c2p = max(0.0,1.0 - contrast_mod*abs(paint_res));
    float c3p = 1.0 - min(1.0, c1p + c2p);
    float light = (u_lighting - 0.2)*max(c1p*5.0 - 4.0, 0.0) + u_lighting*max(c2p*5.0 - 4.0, 0.0);

    return (0.3/u_contrast)*u_color1 + (1.0 - 0.3/u_contrast)*(u_color1*c1p + u_color2*c2p + vec4(c3p*u_color3.rgb, c3p*u_color1.a)) + vec4(light,light,light,0.0);
  }

  void main() {
    vec2 uv = vUv * iResolution.xy;
    gl_FragColor = effect(iResolution.xy, uv);
  }
`;

interface SpiralMeshProps {
  spinRotation: number;
  spinSpeed: number;
  offset: [number, number];
  color1: string;
  color2: string;
  color3: string;
  contrast: number;
  lighting: number;
  spinAmount: number;
  pixelFilter: number;
  spinEase: number;
  isRotate: boolean;
}

function SpiralMesh({
  spinRotation,
  spinSpeed,
  offset,
  color1,
  color2,
  color3,
  contrast,
  lighting,
  spinAmount,
  pixelFilter,
  spinEase,
  isRotate,
}: SpiralMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current?.material) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.iTime.value = state.clock.getElapsedTime();
      // Update resolution to match canvas size
      material.uniforms.iResolution.value.set(
        state.size.width,
        state.size.height
      );

      // Scale mesh to fill viewport based on camera and aspect ratio
      const aspect = state.size.width / state.size.height;
      const camera = state.camera as THREE.PerspectiveCamera;
      const distance = camera.position.z;
      const fov = (camera.fov * Math.PI) / 180;
      const height = 2 * Math.tan(fov / 2) * distance;
      const width = height * aspect;

      meshRef.current.scale.set(width / 2, height / 2, 1);
    }
  });

  const uniforms = useMemo(
    () => ({
      iTime: { value: 0.0 },
      iResolution: { value: new THREE.Vector2(1920, 1080) },
      u_spinRotation: { value: spinRotation },
      u_spinSpeed: { value: spinSpeed },
      u_offset: { value: new THREE.Vector2(offset[0], offset[1]) },
      u_color1: { value: new THREE.Vector4(...hexToVec4(color1)) },
      u_color2: { value: new THREE.Vector4(...hexToVec4(color2)) },
      u_color3: { value: new THREE.Vector4(...hexToVec4(color3)) },
      u_contrast: { value: contrast },
      u_lighting: { value: lighting },
      u_spinAmount: { value: spinAmount },
      u_pixelFilter: { value: pixelFilter },
      u_spinEase: { value: spinEase },
      u_isRotate: { value: isRotate ? 1.0 : 0.0 },
    }),
    [
      spinRotation,
      spinSpeed,
      offset,
      color1,
      color2,
      color3,
      contrast,
      lighting,
      spinAmount,
      pixelFilter,
      spinEase,
      isRotate,
    ]
  );

  return (
    <mesh ref={meshRef} scale={[1, 1, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export const PsychedelicSpiral = forwardRef<
  HTMLDivElement,
  PsychedelicSpiralProps
>(
  (
    {
      className,
      spinRotation = -2.0,
      spinSpeed = 7.0,
      offset = [0.0, 0.0],
      color1 = "#DE443B", // Original Balatro red (0.871, 0.267, 0.231)
      color2 = "#006BB4", // Original Balatro blue (0.0, 0.42, 0.706)
      color3 = "#162325", // Original Balatro dark (0.086, 0.137, 0.145)
      contrast = 3.5,
      lighting = 0.4,
      spinAmount = 0.25,
      pixelFilter = 745.0,
      spinEase = 1.0,
      isRotate = false,
      mouseInteraction = true,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("w-full h-full", className)} {...props}>
        <Canvas
          camera={{ position: [0, 0, 1], fov: 90, near: 0.1, far: 1000 }}
          style={{ width: "100%", height: "100%", display: "block" }}
          resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
          orthographic={false}
        >
          <SpiralMesh
            spinRotation={spinRotation}
            spinSpeed={spinSpeed}
            offset={offset}
            color1={color1}
            color2={color2}
            color3={color3}
            contrast={contrast}
            lighting={lighting}
            spinAmount={spinAmount}
            pixelFilter={pixelFilter}
            spinEase={spinEase}
            isRotate={isRotate}
          />
        </Canvas>
      </div>
    );
  }
);

PsychedelicSpiral.displayName = "PsychedelicSpiral";

export default PsychedelicSpiral;
