const experiences = [
  {
    title: "Frontend Developer",
    desc: "Worked on React projects",
  },
  {
    title: "Freelancer",
    desc: "Built websites for clients",
  },
  {
    title: "Intern",
    desc: "Learned web development basics",
  },
]

export default function ExperienceSlider() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>

      <div className="flex gap-6 overflow-x-auto">
        {experiences.map((item, i) => (
          <div
            key={i}
            className="min-w-[250px] bg-gray-900 p-6 rounded-xl"
          >
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}