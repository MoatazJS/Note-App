import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center text-center px-6">
      {/* Header */}
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 bg-clip-text text-transparent drop-shadow-lg">
        Your Notes, Simplified.
      </h1>

      {/* Subtext */}
      <p className="text-slate-300 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
        Keep your thoughts safe and accessible anywhere. <br />
        Fast. Minimal. Built for you ✨
      </p>

      {/* Buttons */}
      <div className="flex gap-6 mt-12">
        {/* Login Button (secondary) */}
        <Link href="/login">
          <button className="w-32 bg-slate-800 cursor-pointer text-white rounded-xl px-8 py-3 text-lg font-semibold shadow-md border border-slate-600 hover:bg-slate-700 hover:shadow-lg hover:shadow-purple-500/20 transition">
            Login
          </button>
        </Link>

        {/* Signup Button (primary CTA) */}
        <Link href="/signup">
          <button className="w-32 bg-slate-800 cursor-pointer text-white rounded-xl px-8 py-3 text-lg font-semibold shadow-md border border-slate-600 hover:bg-slate-700 hover:shadow-lg hover:shadow-purple-500/20 transition">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}
