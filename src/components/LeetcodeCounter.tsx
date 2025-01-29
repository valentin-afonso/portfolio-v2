"use client";
import LottieAnimation from "./LottieAnimation";
import { useState } from "react";
import CountUp from "react-countup";

export default function LeetcodeCounter({ counter }: any) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute top-0 left-0 w-full h-full blurry_link flex justify-center items-center px-4 gap-2 opacity-0 rounded-xl group-hover/herolink:opacity-100 transition-all"
    >
      <div className="flex flex-col gap-1 mt-[-16px]">
        <div className="flex items-center justify-center ml-[-6px]">
          <LottieAnimation animationPath="/lottie/fire-animation.json" />
          <div className="text-lg font-bold mb-[-16px]">
            +
            {isHovered ? (
              <CountUp
                start={0}
                end={counter}
                duration={2}
                key={isHovered.toString()}
                className="text-lg font-bold mb-[-16px]"
              />
            ) : (
              <>0</>
            )}
          </div>
        </div>
        <span className="text-xs text-black/60 dark:text-white/60 text-center">
          problems solved
        </span>
      </div>
    </div>
  );
}
