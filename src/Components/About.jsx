export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#030712] text-white">

      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <p className="text-cyan-400 uppercase tracking-[4px] mb-3">
              About
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              Senior Instrumentation
              <br />
              & Control Engineer
            </h2>

            <p className="text-slate-400 leading-8 text-lg">
              Senior Instrumentation and Control Engineer with over
              <span className="text-white font-semibold"> 18 years </span>
              of experience in Oil, Gas and Petrochemical industries.

              Specialized in industrial automation, PLC programming,
              process control systems, commissioning, maintenance and
              troubleshooting of critical industrial facilities.
            </p>

            <p className="text-slate-400 leading-8 text-lg mt-6">
              Experienced in delivering reliable engineering solutions,
              improving operational efficiency and ensuring safe,
              continuous production through advanced instrumentation
              and automation technologies.
            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-5">

            <Card title="18+" subtitle="Years Experience" />

            <Card title="PLC" subtitle="Automation" />

            <Card title="100+" subtitle="Projects" />

            <Card title="Oil & Gas" subtitle="Industry" />

          </div>

        </div>

      </div>

    </section>
  )
}

function Card({ title, subtitle }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-8 hover:border-cyan-400 duration-300">

      <h3 className="text-4xl font-bold text-cyan-400">
        {title}
      </h3>

      <p className="text-slate-400 mt-3">
        {subtitle}
      </p>

    </div>
  )
}