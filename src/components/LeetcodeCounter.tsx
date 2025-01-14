import LottieAnimation from "./LottieAnimation";

export default async function LeetcodeCounter({ counter }: any) {
  /*
  const data = await fetch(
    "https://leetcode-api-faisalshohag.vercel.app/valafso"
  );
  if (!data) return;
  const leetcode = await data.json();
  if (!leetcode) return;
  {leetcode.totalSolved}
  */
  return (
    <div className="absolute top-0 left-0 w-full h-full blurry_link flex justify-center items-center px-4 gap-2 opacity-0 rounded-xl pointer-events-none group-hover/herolink:opacity-100 transition-all">
      <div className="flex flex-col gap-1 mt-[-16px]">
        <div className="flex items-center justify-center ml-[-6px]">
          <LottieAnimation animationPath="/lottie/fire-animation.json" />
          <span className="text-lg font-bold mb-[-16px]">+{counter}</span>
        </div>
        <span className="text-xs text-black/60 dark:text-white/60">
          problems solved
        </span>
      </div>
    </div>
  );
}
