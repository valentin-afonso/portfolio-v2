import LottieAnimation from "./LottieAnimation";

export default async function LeetcodeCounter() {
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
    <div className="absolute top-0 left-0 w-full h-full blurry_link flex justify-center items-center px-4 gap-2 opacity-0 pointer-events-none group-hover/herolink:opacity-100 transition-all">
      <LottieAnimation animationPath="/lottie/fire-animation.json" />
      <div className="flex flex-col">
        <span className="text-lg font-bold">35</span>
        <span className="text-xs text-black/60">problems solved</span>
      </div>
    </div>
  );
}
