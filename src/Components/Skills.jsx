export default function Skills() {
  const skills = ["React", "JavaScript", "Tailwind", "Git", "UI/UX"]

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-white text-black rounded-full hover:scale-105 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}