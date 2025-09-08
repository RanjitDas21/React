import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo.jsx'

function Footer() {
  return (
    <div class="bg-gray-900 text-gray-300 py-6">
            <div class="flex justify-around">
      
    
                <div>
                    <h2 class="text-2xl font-bold text-white">MyLogo</h2>
                    <p class="mt-4 text-sm leading-6">Building modern web solutions with clean UI and seamless experiences.</p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-white mb-4">Services</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-indigo-400 transition">Web Development</a></li>
                        <li><a href="#" class="hover:text-indigo-400 transition">UI/UX Design</a></li>
                    </ul>
                </div>
      
    
                <div>
                    <h3 class="text-lg font-semibold text-white mb-4">Contact</h3>
                    <ul class="space-y-2 text-sm">
                        <li>Email: support@mylogo.com</li>
                        <li>Phone: +123 456 7890</li>
                    </ul>
                </div>
            </div>   
    
    <div class="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">© 2025 MyLogo. All rights reserved.</div>
        
    </div>
)
}

export default Footer