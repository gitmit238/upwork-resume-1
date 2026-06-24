export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-white font-bold text-xl">
          My Portfolio
        </h1>

        <ul className="flex gap-6 text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Skills</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

      </div>
    </nav>
  )
}