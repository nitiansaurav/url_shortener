import React, { useEffect } from "react"
import { Outlet } from "@tanstack/react-router"
import { useDispatch } from "react-redux"

import Navbar from "./components/NavBar"
import { setUser } from "./store/slices/authSlice"
import { getCurrentUser } from "./api/user.api"

const RootLayout = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    const checkAuth = async () => {

      try {

        const data = await getCurrentUser()

        dispatch(setUser(data.user))

      } catch (err) {

        // user not logged in
      }

    }

    checkAuth()

  }, [])

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default RootLayout