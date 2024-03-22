"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
type Props = {};

const CubicModel = (props: Props) => {
  return (
    // <Spline scene="https://prod.spline.design/KI05q4KAUl9zZeuL/scene.splinecode" />
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 8 }}
      className="h-full w-full"
    >
      <Spline scene="https://prod.spline.design/sR6LhnbBfBdiewiT/scene.splinecode" />
    </motion.div>
  );
};

export default CubicModel;
