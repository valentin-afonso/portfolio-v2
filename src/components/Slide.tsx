type SlideType = {
  children: React.ReactNode;
};

export default function Slide({ children }: SlideType) {
  return (
    <div className="relative slide_gradient text-white/95 p-10 rounded-xl overflow-hidden">
      {children}
    </div>
  );
}
