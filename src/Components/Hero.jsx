export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#030712] text-white overflow-hidden flex items-center">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px] -top-32 -left-20"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[120px] bottom-0 right-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}

        <div>

          <span className="text-cyan-400 uppercase tracking-[4px]">
            Instrumentation & Control Engineer
          </span>

          <h1 className="text-6xl lg:text-7xl font-bold mt-6 leading-tight">
            John
            <br />
            Smith
          </h1>

          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">

            Senior Instrumentation & Control Engineer with
            18+ years of experience in Oil, Gas and
            Petrochemical industries.

          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-cyan-500 hover:bg-cyan-400 duration-300 px-8 py-4 rounded-xl font-semibold text-black">
              Download CV
            </button>

            <button className="border border-slate-700 hover:border-cyan-400 duration-300 px-8 py-4 rounded-xl">
              Contact
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-6">

          <Stat number="18+" text="Years Experience" />
          <Stat number="100+" text="Projects" />
          <Stat number="PLC" text="Automation" />
          <Stat number="24/7" text="Industrial Support" />

        </div>

      </div>

    </section>
  );
}

function Stat({ number, text }) {
  return (
    <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-8 backdrop-blur-md hover:border-cyan-400 transition duration-300">

      <h2 className="text-4xl font-bold text-cyan-400">
        {number}
      </h2>

      <p className="mt-4 text-slate-400">
        {text}
      </p>

    </div>
  );
}