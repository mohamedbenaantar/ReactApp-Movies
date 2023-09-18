import React from 'react'
import { Link } from "react-router-dom"
export const Footer = () => {
  return (

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">MoviesMate</a>. All Rights Reserved.</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Twitter</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Github</a>
                </li>
            </ul>
        </div>
        
    </div>
</footer>


  )
}
