import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram, GitlabIcon as GitHub } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">middleXhq</h3>
            <p className="mt-2 text-gray-400">Empowering Digital Success</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <LinkedIn className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <GitHub className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} middleXhq. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

