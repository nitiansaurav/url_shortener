import React from "react"
import { Link } from "@tanstack/react-router"

const HomePage = () => {

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-28 text-center">

        {/* EDIT TITLE */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
          Shorten Your Links <br />
          <span className="text-blue-600">Instantly</span>
        </h1>

        {/* EDIT DESCRIPTION */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Convert long messy URLs into clean short links.  
          Track clicks, share smarter, and manage everything easily.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4">

          {/* EDIT BUTTON LINK */}
          <Link
            to="/auth"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition"
          >
            Get Started
          </Link>

          <Link
            to="/auth"
            className="border border-gray-300 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Login
          </Link>

        </div>

      </div>


      {/* FEATURES SECTION */}
      <div className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-14">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* FEATURE 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Lightning Fast
            </h3>
            <p className="text-gray-600">
              Generate short URLs instantly with high performance.
            </p>
          </div>

          {/* FEATURE 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Track Clicks
            </h3>
            <p className="text-gray-600">
              Monitor how many users click your shortened links.
            </p>
          </div>

          {/* FEATURE 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Custom Slugs
            </h3>
            <p className="text-gray-600">
              Create personalized short links for branding.
            </p>
          </div>

        </div>

      </div>


      {/* FOOTER */}
      <div className="text-center pb-10 text-gray-500 text-sm">
        {/* EDIT FOOTER */}
        Built with ❤️ using React & Node.js
      </div>

    </div>

  )
}

export default HomePage