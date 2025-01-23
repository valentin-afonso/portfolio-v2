"use client";
import { useState } from "react";
import CountUp from "react-countup";

export default function GithubCounter({ counter }: any) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // 1 + 8 + 160 + 254 + 473 + 20 = 916
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute top-0 left-0 w-full h-full blurry_link flex justify-center items-center rounded-xl px-4 gap-2 opacity-0 group-hover/herolink:opacity-100 transition-all"
    >
      <div className="flex flex-col">
        <div className="text-lg font-bold">
          +
          {isHovered ? (
            <CountUp
              start={0}
              end={counter}
              duration={2}
              key={isHovered.toString()}
            />
          ) : (
            <>0</>
          )}
        </div>

        <span className="text-xs text-black/60 dark:text-white/60">
          contributions
        </span>
      </div>
    </div>
  );
}
