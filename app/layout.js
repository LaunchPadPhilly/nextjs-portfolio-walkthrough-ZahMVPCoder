import './globals.css'

export const metadata = {
  title: 'Welcome to my Portfolio',
  description: 'This website showcases all my projects, links, skills, and everything about me!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* TODO: Import and add your Navbar component here */}
        
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}