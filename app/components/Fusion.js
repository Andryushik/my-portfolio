export default function Fusion() {
  return (
    <div className="relative w-80 md:w-[500px] h-[400px] md:h-[600px] max-w-lg">
      <div className="absolute top-24 -left-8 w-64 h-64 md:w-96 md:h-96 rounded-full bg-purple-300 mix-blend-multiply animate-blob filter blur-3xl opacity-90" />
      <div className="absolute -right-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-yellow-300 mix-blend-multiply animate-blob filter blur-3xl opacity-90 animation-delay-4000" />
      <div className="absolute bottom-0 -right-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-pink-300 mix-blend-multiply animate-blob filter blur-3xl opacity-90 animation-delay-2000" />
    </div>
  );
}
