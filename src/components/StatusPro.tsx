export default function StatusPro({ status }: any) {
  return (
    <div className="status_pro flex items center gap-2">
      <svg height="24px" width="24px" className="overflow-visible">
        <circle
          cx="50%"
          cy="50%"
          r="4px"
          className="stroke-green-400 fill-green-400"
        ></circle>
        <circle
          className="animate-pulse stroke-green-400 fill-white"
          cx="50%"
          cy="50%"
          r="6px"
        ></circle>
      </svg>
      <p className="font-bold">{status}</p>
    </div>
  );
}
