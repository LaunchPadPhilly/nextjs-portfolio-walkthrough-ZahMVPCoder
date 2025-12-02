import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <Image 
            src="https://ui-avatars.com/api/?name=Zahir&size=300&background=16a34a&color=fff&bold=true"
            alt="Zahir's profile photo"
            width={200}
            height={200}
            className="rounded-full shadow-xl"
          />
        </div>
        
        <h1 className="text-6xl font-bold mb-6 text-gray-900">
          Hi, I'm Zahir!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          I'm a passionate youtuber that loves to make people laugh and web designer. I Code using Next.js and React. 
          I love creating unique websites and making funny youtube videos in my spare time! I'm excited to share my journey and projects with you. 
          Welcome to my portfolio!
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <Link href="/about" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
            About Me
          </Link>
          <Link href="/projects" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
            My Projects
          </Link>
          <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
            Contact
          </Link>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-left">
          <h2 className="text-2xl font-bold mb-4 text-green-900">
            📝 TODO: Customize Your Homepage
          </h2>
          <ul className="space-y-2 text-green-800">
            <li>✏️ Change the heading to include your name</li>
            <li>✏️ Write a brief introduction about yourself</li>
            <li>✏️ Add navigation links to your other pages</li>
            <li>✏️ Choose your own color scheme</li>
            <li>✏️ Make it responsive for mobile devices</li>
          </ul>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
          <p className="text-yellow-900 font-semibold">
            💡 Tip: Check the README.md for detailed instructions and examples!
          </p>
        </div>
      </div>
    </div>
  )
}