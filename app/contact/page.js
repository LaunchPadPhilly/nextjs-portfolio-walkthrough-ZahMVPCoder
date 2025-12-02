import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-gray-50 to-green-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Get In Touch</h1>
        <p className="text-xl text-gray-600 mb-12">
          I'd love to hear from you! Feel free to reach out through any of these channels.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-4xl">📧</span>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-xl mb-2">Email</p>
                <a 
                  href="mailto:zahtoobusiness@example.com" 
                  className="text-green-600 hover:text-green-700 text-lg hover:underline"
                >
                  zahtoobusiness@example.com
                </a>
                <p className="text-gray-600 mt-2">
                  Best for business inquiries and project collaborations
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-4xl">🔗</span>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-xl mb-2">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/zahir-alston-84690031b/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 text-lg hover:underline"
                >
                  linkedin.com/in/zahir-alston-84690031b
                </a>
                <p className="text-gray-600 mt-2">
                  Connect with me professionally and see my work experience
                </p>
              </div>
            </div>

            {/* YouTube */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-4xl">🎥</span>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-xl mb-2">YouTube</p>
                <a 
                  href="https://www.youtube.com/@ZahTooFunny/featured" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 text-lg hover:underline"
                >
                  youtube.com/@ZahTooFunny
                </a>
                <p className="text-gray-600 mt-2">
                  Check out my content and creative projects
                </p>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-4xl">💻</span>
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-xl mb-2">GitHub</p>
                <a 
                  href="https://github.com/ZahMVPCoder" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 text-lg hover:underline"
                >
                  github.com/ZahMVPCoder
                </a>
                <p className="text-gray-600 mt-2">
                  Explore my code and open-source contributions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
          <h3 className="font-bold text-green-900 mb-3 text-2xl">💬 Let's Build Something Amazing!</h3>
          <p className="text-green-800 text-lg mb-4">
            Whether you have a project idea, want to collaborate, or just want to say hi, 
            I'm always open to new opportunities and connections.
          </p>
          <p className="text-green-700 font-semibold">
            I typically respond within 24-48 hours
          </p>
        </div>
      </div>
    </div>
  )
}
