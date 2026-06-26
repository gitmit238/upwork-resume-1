const experiences = [
  {
    year: "2007",
    title: "Instrumentation Engineer",
    company: "Oil & Gas Industry",
    description:
      "Started career in industrial instrumentation, installation, calibration, maintenance and troubleshooting of field instruments."
  },
  {
    year: "2012",
    title: "PLC & Automation Engineer",
    company: "Petrochemical Plant",
    description:
      "Worked on PLC programming, industrial automation systems, HMI and SCADA integration, commissioning and loop checking."
  },
  {
    year: "2018",
    title: "Senior Instrumentation Engineer",
    company: "Oil & Gas Projects",
    description:
      "Led instrumentation teams, supervised maintenance activities, shutdown operations and process optimization."
  },
  {
    year: "2024",
    title: "Lead Instrument & Control Engineer",
    company: "Industrial Projects",
    description:
      "Responsible for instrumentation engineering, project coordination, technical documentation and automation system reliability."
  }
];

export default function Experience() {
  return (
    <section className="bg-[#030712] py-24 px-6">

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