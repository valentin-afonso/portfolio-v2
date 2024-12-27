type GridLayoutType = {
  children: React.ReactNode;
  size?: string;
  additional_class?: string;
};

export default function GridLayout({
  children,
  size,
  additional_class,
}: GridLayoutType) {
  return (
    <div
      className={`w-[1128px] max-w-full m-auto px-5 md:px-12 xl:px-0 ${additional_class}`}
    >
      {children}
    </div>
  );
}
