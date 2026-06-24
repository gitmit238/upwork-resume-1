export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Text */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I'm a <span className="text-gray-400">Frontend Developer</span> 🚀
          </h1>

          <p className="text-gray-400 mt-4">
            I build modern, fast and responsive web applications using React and Tailwind CSS.
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition">
            View Projects
          </button>
        </div>

        {/* Visual box */}
        <div className="flex-1">
          <div className="w-full h-80 bg-gray-900 rounded-2xl flex items-center justify-center text-gray-500">
            Your Image Here
          </div>
        </div>

      </div>
    </section>
  )
}