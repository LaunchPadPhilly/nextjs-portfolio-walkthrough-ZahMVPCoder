'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-amber-50 via-green-50 to-emerald-100 relative overflow-hidden">
      {/* Animated stars */}
      {[...Array(30)].map((_, i) => {
        const offsetX = (mousePosition.x / window.innerWidth) * 20 - 10
        const offsetY = (mousePosition.y / window.innerHeight) * 20 - 10
        return (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-300 opacity-70 animate-pulse"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              transform: `translate(${offsetX * (i % 3 + 1)}px, ${offsetY * (i % 3 + 1)}px)`,
              transition: 'transform 0.3s ease-out',
              boxShadow: '0 0 10px rgba(253, 224, 71, 0.8)',
            }}
          />
        )
      })}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 drop-shadow-lg">
            My Projects
          </h1>
          <p className="text-xl text-gray-700 mb-4 font-medium">
            Check out some of the projects I've built to solve real-world problems and enhance user experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Project 1: Little Buddies */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-100">
            <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <p className="text-white font-bold text-2xl z-10 drop-shadow-lg">Little Buddies</p>
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                View Project 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Project 2: Movie Finder App */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-100">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <p className="text-white font-bold text-2xl z-10 drop-shadow-lg">Movie Finder</p>
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                View Project 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Project 3: Task Management App */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-purple-100">
            <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <p className="text-white font-bold text-2xl z-10 drop-shadow-lg">Task Manager</p>
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                View Project 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-2xl p-8 text-center shadow-lg backdrop-blur-sm">
          <h3 className="font-bold text-green-900 mb-3 text-2xl">🚀 More Projects Coming Soon!</h3>
          <p className="text-green-800 text-lg">
            I'm constantly learning and building. Check back later for more exciting projects!
          </p>
        </div>
      </div>
    </div>
  )
}
