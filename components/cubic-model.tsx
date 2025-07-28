"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

type Props = {};

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-sm text-muted-foreground">Loading 3D Model...</p>
      </div>
    </div>
  ),
});

const CubicModel = (props: Props) => {
  return (
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
