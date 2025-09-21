"use client";
import React from "react";
import { motion } from 'motion/react';
type Props = {};

const CubicModel = (props: Props) => {
  return (
    // <Spline scene="https://prod.spline.design/KI05q4KAUl9zZeuL/scene.splinecode" />
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 8 }}
      className="h-full w-full flex items-center justify-center"
    >
      {/* Temporarily disabled - @splinetool/react-spline is not compatible with React 19 yet */}
      {/* <Spline scene="https://prod.spline.design/sR6LhnbBfBdiewiT/scene.splinecode" /> */}
      <div className="text-muted-foreground">3D Model Loading...</div>
    </motion.div>
  );
};

export default CubicModel;
