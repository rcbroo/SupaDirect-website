export default function Loading() {
  return (
    <div className="min-h-screen bg-[#faf8f6] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-brand-teal border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    </div>
  );
}
