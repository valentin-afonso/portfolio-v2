"use client";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

interface LottieComponentProps {
  animationPath: string;
  height?: number;
  width?: number;
}

const LottieComponent: React.FC<LottieComponentProps> = ({
  animationPath,
  height = 400,
  width = 40,
}) => {
  return <Player autoplay loop src={animationPath} className="w-10 h-10" />;
};

export default LottieComponent;
