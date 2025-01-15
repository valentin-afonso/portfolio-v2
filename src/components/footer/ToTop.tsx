"use client";

export default function ToTop() {
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button
      className="group absolute top-7 right-7"
      onClick={scrollToTop}
      aria-label="scroll to top"
    >
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black dark:stroke-white/90"
      >
        <g className="group-hover:translate-y-[-2px] transition-all">
          <path
            d="M34.125 25.3281L26 17.2638L17.875 25.3281"
            strokeWidth="1.91667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 18.3861L26 34.7314"
            strokeWidth="1.91667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <rect
          x="6.52158"
          y="45.4784"
          width="38.9568"
          height="38.9568"
          rx="5.1"
          transform="rotate(-90 6.52158 45.4784)"
          strokeWidth="1.8"
          className=""
        />
      </svg>
    </button>
  );
}
