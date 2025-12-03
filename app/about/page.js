import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-gray-50 to-green-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-gray-900">About Me</h1>
        
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12 bg-white rounded-lg shadow-lg p-8">
          {/* Profile photo */}
          <div className="flex-shrink-0">
            <Image 
              src="https://ui-avatars.com/api/?name=Zahir&size=300&background=16a34a&color=fff&bold=true"
              alt="Zahir's profile photo"
              width={300}
              height={300}
              className="rounded-full shadow-xl"
            />
          </div>
          
          {/* Bio */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Hello! I'm Zahir</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I'm a passionate web designer that loves to create beautiful and functional websites. On my spare time i make funny Youtube videos about me playing horror games. i edit and make the design for the thumbnail myself.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">My Skills</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              HTML & CSS
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              JavaScript
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              React
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Next.js
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Tailwind CSS
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Git & GitHub
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Responsive Design
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Web Development
            </span>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">My Goals</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎯</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Master Modern Web Development</h3>
                <p className="text-gray-700">
                  Continue building expertise in React, Next.js, and modern web technologies to create 
                  fast, accessible, and user-friendly applications.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-3xl">💼</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Build Real-World Projects</h3>
                <p className="text-gray-700">
                  Work on meaningful projects that solve real problems and help me grow as a developer, 
                  while building a strong portfolio to showcase my skills.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-3xl">📸</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">YouTube Content Creation</h3>
                <p className="text-gray-700">
                  Continue creating engaging and entertaining content on my YouTube channel, focusing on 
                  gaming videos, especially horror games, to grow my audience and improve my video production skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
