import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-gray-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">My Projects</h1>
        <p className="text-xl text-gray-600 mb-12">
          Check out some of the projects I've built to solve real-world problems and enhance user experiences.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Project 1: Little Buddies */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <p className="text-white font-bold text-xl z-10">Little Buddies</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Little Buddies</h3>
              <p className="text-gray-600 mb-4 line-clamp-4">
                An interactive web app that helps people who spend most of their day sitting stay active. 
                Features a personal AI buddy that acts as your health and fitness trainer, giving advice 
                and reminding you to get moving.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">AI</span>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Next.js</span>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">React</span>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Health</span>
              </div>
              <Link 
                href="https://little-buddies.vercel.app/" 
                target="_blank"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
              >
                View Project →
              </Link>
            </div>
          </div>

          {/* Project 2: Movie Finder App */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <p className="text-white font-bold text-xl z-10">Movie Finder</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Movie Finder App</h3>
              <p className="text-gray-600 mb-4 line-clamp-4">
                Your smart movie companion! Using AI, it quickly finds movies — whether classics or latest 
                releases. Save your favorite movies for later, creating a personalized watchlist to never 
                forget what to watch next.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">AI</span>
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">API</span>
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">React</span>
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">Database</span>
              </div>
              <Link 
                href="https://moviedata-two.vercel.app/" 
                target="_blank"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
              >
                View Project →
              </Link>
            </div>
          </div>

          {/* Project 3: Task Management App */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <p className="text-white font-bold text-xl z-10">Task Manager</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Task Management App</h3>
              <p className="text-gray-600 mb-4 line-clamp-4">
                Collaborative task management application with real-time updates. Organize your work, 
                collaborate with team members, and track progress efficiently with an intuitive interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">Real-time</span>
                <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">React</span>
                <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">Prisma</span>
                <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">PostgreSQL</span>
              </div>
              <Link 
                href="https://github.com/yourusername/task-manager" 
                target="_blank"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
              >
                View Project →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
          <h3 className="font-bold text-green-900 mb-2 text-xl">🚀 More Projects Coming Soon!</h3>
          <p className="text-green-800">
            I'm constantly learning and building. Check back later for more exciting projects!
          </p>
        </div>
      </div>
    </div>
  )
}
