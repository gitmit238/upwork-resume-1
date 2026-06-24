export default function Projects() {
  const projects = [
    { title: "Portfolio", desc: "Personal website" },
    { title: "E-commerce UI", desc: "Shop UI design" },
    { title: "Dashboard", desc: "Admin panel" },
  ]

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}