import Image from "next/image";
import SvgWave from "@/components/svg/SvgWave";

export default function Avatar({ img }: any) {
  return (
    <div className="relative">
      <div className="absolute top-[-11px] left-[-11px] w-[50px] h-[50px] overflow-hidden rounded-[8px] border border-border">
        <SvgWave additional_class="absolute top-[-7rem] left-[-5rem] w-[345px] h-auto" />
      </div>
      <div className="relative w-[50px] h-[50px] overflow-hidden rounded-[8px]">
        <Image
          src={`${img.url}`}
          width={75}
          height={112}
          alt={`${img.alt}`}
          className="absolute max-w-none left-[-12px] top-[-3px]"
        />
      </div>
    </div>
  );
}
