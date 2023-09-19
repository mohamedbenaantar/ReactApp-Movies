import React from 'react'
import PageNotFoundImage from "./../assets/images/pageNotFound.jpeg"
import { Link } from "react-router-dom"
export const PageNotfound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
            <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
            <div>
            <img className="rounded" src={PageNotFoundImage} alt="404 Page Not Found h-auto max-w-full"/>
            </div>
        </div>

        <div className="flex justify-center my-4">
          <Link to="/">
          <button className="w-64 text-xl bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg px-5 py-2.5 mb-2 font-medium">Back to MoviesMate</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
