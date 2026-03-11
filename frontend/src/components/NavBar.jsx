import React from "react"
import { Link } from "@tanstack/react-router"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/slices/authSlice"
import { logoutUser } from "../api/user.api"

const Navbar = () => {

  const dispatch = useDispatch()

  const { isAuthenticated, user } = useSelector((state) => state.auth)

  const handleLogout = async () => {

    try {

      await logoutUser()

      dispatch(logout())

    } catch (err) {

      console.error("Logout failed")

    }

  }

  return (

    <nav className="bg-white border-b border-gray-200">

      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16">

          {/* Left side */}
          <div className="flex items-center">

            <Link
              to="/"
              className="text-xl font-bold text-gray-800"
            >
              URL Shortener
            </Link>

          </div>

          {/* Right side */}

          <div className="flex items-center space-x-4">

            {isAuthenticated ? (

              <>
                <span className="text-gray-700">
                  Welcome, {user?.name || "User"}
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
                >
                  Logout
                </button>
              </>

            ) : (

              <Link
                to="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
              >
                Login
              </Link>

            )}

          </div>

        </div>

      </div>

    </nav>

  )
}

export default Navbar