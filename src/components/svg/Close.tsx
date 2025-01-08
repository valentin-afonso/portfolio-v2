export default function Close() {
  return (
    <div>
      <svg
        width="20"
        height="20"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke-width="1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black dark:stroke-white w-9 h-auto opacity-70 hover:opacity-100 transition-all"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <path d="m9 9 6 6"></path>
        <path d="m15 9-6 6"></path>
      </svg>
    </div>
  );
}
