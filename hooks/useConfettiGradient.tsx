import { useEffect } from "react";

const DEFAULT_SPEED = 3;
let R = (x: number, y: number, t: number) => {
  return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
};

let G = (x: number, y: number, t: number) => {
  return Math.floor(
    192 +
      64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
  );
};

let B = (x: number, y: number, t: number) => {
  return Math.floor(
    192 +
      64 *
        Math.sin(
          5 * Math.sin(t / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
  );
};

let t = 0;
export const canvasID: string = "canv";

const drawConfettiGradient = (canvasID: string, speed: number) => {
  useEffect(() => {
    let c = document?.getElementById(canvasID) as HTMLCanvasElement | null;
    let $ = c?.getContext("2d");

    let col = (x: number, y: number, r: number, g: number, b: number) => {
      if ($ != undefined || $ != null) {
        $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        $.fillRect(x, y, 1, 1);
      }
    };
    const run = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + speed / 100;
      window.requestAnimationFrame(run);
    };

    run();
  }, []);
};

export const ConfettiGradient = () => {
  return (
    <canvas
      id={canvasID}
      width={32}
      height={32}
      className={`w-full h-full absolute -z-10`}
    />
  );
};

/**
 * @param {number} speed           Speed of the gradient animation.
 * @returns ConfettiGradient
 */

const useConfettiGradient = (speed: number = DEFAULT_SPEED) => {
  drawConfettiGradient(canvasID, speed);
  return { ConfettiGradient };
};

export default useConfettiGradient;
