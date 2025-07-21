import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, Users, Settings } from "lucide-react"

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-white to-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h2 className="text-xl font-semibold text-blue-800">CureCloud</h2>
          
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <HomeIcon size={18} />
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/patients" 
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Users size={18} />
                Patients
              </Link>
            </li>
            <li>
              <Link 
                to="/admin" 
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Settings size={18} />
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}