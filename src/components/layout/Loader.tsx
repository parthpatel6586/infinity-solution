export function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-brand-emerald/20 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 border-4 border-t-brand-cyan rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-xs">IDE</span>
        </div>
      </div>
    </div>
  );
}
