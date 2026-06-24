export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm a Frontend Developer 🚀
        </h1>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          I build modern, fast and responsive web applications using React and Tailwind CSS.
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition">
          View My Work
        </button>
      </div>
    </section>
  )
}