import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { useSelector } from "react-redux"
import { Navigate } from "@tanstack/react-router"

const AuthPage = () => {

  const [isLogin, setIsLogin] = useState(true)

  const { isAuthenticated } = useSelector((state) => state.auth)

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {isLogin ? (
        <LoginForm setIsLogin={setIsLogin} />
      ) : (
        <RegisterForm setIsLogin={setIsLogin} />
      )}

    </div>
  )
}

export default AuthPage