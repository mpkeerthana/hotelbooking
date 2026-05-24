export default function Loader() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 animate-spin"></div>
        <div className="absolute inset-1 bg-white rounded-full"></div>
      </div>
    </div>
  );
}
