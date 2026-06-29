export default function Projects() {
  const projects = [
    { title: "Lavan Petrochemical Plant", desc: "Instrumentation, PLC Systems, Commissioning & Maintenance" },
    { title: "Shiraz Vegetable Oil Company", desc: "Electrical Maintenance, Instrumentation & Production Support" },
    { title: "Shiraz Petrochemical Company", desc: "Instrumentation Engineering, Process Control & Plant Maintenance" },
    { title: "BASF Germany", desc: "Electrical & Automation Engineering, Process Control Systems"},
    { title : "German Oil and Gas Projects", desc: "Industrial Automation, PLC Programming & Control Systems"}
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-cyan-400 uppercase tracking-[4px]  mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-500 p-6 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}