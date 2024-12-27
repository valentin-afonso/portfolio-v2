import Image from "next/image";

export default function Avatar({ img }: any) {
  return (
    <>
      <div className="relative w-[50px] h-[50px] overflow-hidden rounded-[8px]">
        <Image
          src={`${img.url}`}
          width={75}
          height={112}
          alt={`${img.alt}`}
          className="absolute max-w-none left-[-12px] top-[-3px]"
        />
      </div>
    </>
  );
}
