const experiences = [
  {
    year: "2007",
    title: "Electrical & Instrumentation Engineer",
    company: "Shiraz Vegetable Oil Company",
    description:
      "Started professional career in electrical maintenance, industrial instrumentation, calibration, troubleshooting, and production support for manufacturing systems."
  },
  {
    year: "2010",
    title: "Instrumentation & Control Engineer",
    company: "Oil & Gas Industry",
    description:
      "Worked on instrumentation systems, field devices, installation, calibration, commissioning, preventive maintenance, and troubleshooting for industrial process plants."
  },
  {
    year: "2017",
    title: "PLC & Automation Engineer",
    company: "Germany & Middle East Projects",
    description:
      "Specialized in PLC programming, industrial automation, HMI/SCADA systems, control panels, commissioning, loop checking, and process optimization across international projects."
  },
  {
    year: "2024",
    title: "Senior Electrical & Automation Engineer",
    company: "Oil, Gas & Petrochemical Projects",
    description:
      "Leading instrumentation and automation engineering activities, supervising maintenance and shutdown operations, coordinating multidisciplinary teams, and delivering reliable control system solutions for large-scale industrial projects."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#030712] py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[4px] text-cyan-400">
          Career
        </p>

        <h2 className="text-5xl font-bold text-white mt-3 mb-20">
          Professional Experience
        </h2>

        <div className="relative border-l border-slate-700">

          {experiences.map((item, index) => (

            <div
              key={index}
              className="ml-10 mb-16 relative"
            >

              <div className="absolute -left-[47px] top-3 w-5 h-5 rounded-full bg-cyan-400 border-4 border-[#030712]" />

              <span className="text-cyan-400 font-semibold">
                {item.year}
              </span>

              <div className="mt-3 rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-cyan-400 transition duration-300">

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-cyan-400 mt-1">
                  {item.company}
                </p>

                <p className="text-slate-400 mt-5 leading-8">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}