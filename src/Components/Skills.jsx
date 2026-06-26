const skills = [

  "PLC Programming",
  "SCADA",
  "HMI",

  "Process Control",

  "Instrumentation",

  "Calibration",

  "Commissioning",

  "Industrial Automation",

  "Control Valves",

  "Field Instruments",

  "Troubleshooting",

  "Maintenance",

  "DCS",

  "Industrial Networks",

  "Loop Checking"

]

export default function Skills() {

  return (

    <section   id="skills" className="bg-[#030712] py-24">

      <div className="max-w-6xl mx-auto px-6">

        <p className="text-cyan-400 uppercase tracking-[4px]">
          Skills
        </p>

        <h2 className="text-5xl text-white font-bold mt-3 mb-12">
          Technical Expertise
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map(skill => (

            <div

              key={skill}

              className="px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-400 hover:text-white duration-300"

            >

              {skill}

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}