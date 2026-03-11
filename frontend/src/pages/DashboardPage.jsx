import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from '@tanstack/react-router'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'
import Navbar from '../components/NavBar'

const DashboardPage = () => {

  const { isAuthenticated } = useSelector((state) => state.auth)

  if(!isAuthenticated){
    return <Navigate to="/auth" />
  }

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="flex justify-center p-4">

        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">

          <h1 className="text-2xl font-bold text-center mb-6">
            URL Shortener
          </h1>

          <UrlForm/>

          <UserUrl/>

        </div>

      </div>

    </div>

  )
}

export default DashboardPage
