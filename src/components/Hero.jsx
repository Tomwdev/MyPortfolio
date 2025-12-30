import Link from "next/link";

export default function Hero() {
  return (
    <section className=" min-h-screen flex flex-col justify-center items-center pt-20 px-4">
      <div className=" max-w-4xl text-center px-6 ">
        <h1 className=" text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 ">
          Building digital experiences with <br />
          <span className="...">code and creativity.</span>
        </h1>
        <p className=" text-slate-400 text-lg mb-8 max-w-2xl mx-auto ">
          I am a passionate developer focused on building scalable web applications. 
          I love clean code, open source, and solving complex problems.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="#projects" className="bg-white text-black rounded-md px-6 py-3 font-semibold hover:scale-105 transition-transform">
            View Work
          </Link>
          <Link href="#contact" className="border border-white text-white rounded-md px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
            Contact Me
          </Link>
        </div>

      </div>
    </section>
  );
}