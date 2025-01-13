type LinesType = {
  position?: string;
};

export default function LinesPlus({ position }: LinesType) {
  return (
    <>
      <div
        className={`absolute ${position === "top" ? "top-[-20px] " : "bottom-[-20px]"} w-4/12 h-[1px] bg_h_line centered_line z-[-1]`}
      ></div>
      <div
        className={`absolute ${position === "top" ? "top-[-80px] " : "bottom-[-80px]"} h-[10rem] w-[1px] bg_v_line centered_line z-[-1]`}
      ></div>
    </>
  );
}
