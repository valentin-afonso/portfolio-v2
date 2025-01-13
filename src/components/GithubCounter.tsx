export default function GithubCounter() {
  // 1 + 8 + 160 + 254 + 473 + 18 = 914
  return (
    <div className="absolute top-0 left-0 w-full h-full blurry_link flex justify-center items-center rounded-xl px-4 gap-2 opacity-0 pointer-events-none group-hover/herolink:opacity-100 transition-all">
      <div className="flex flex-col">
        <span className="text-lg font-bold">+914</span>
        <span className="text-xs text-black/60 dark:text-white/60">
          contributions
        </span>
      </div>
    </div>
  );
}
