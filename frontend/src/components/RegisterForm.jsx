import React, { useState } from 'react'
import { registerUser } from '../api/user.api'
import { useDispatch } from 'react-redux'
import { login } from '../store/slices/authSlice'
import { useNavigate } from '@tanstack/react-router'

const RegisterForm = ({ setIsLogin }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    setLoading(true)
    setError('')

    try {

      const data = await registerUser({
        name,
        email,
        password
      })

      dispatch(login(data.user))

      navigate({ to: "/dashboard" })

    } catch (err) {

      setError(err.message || 'Registration failed')

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md"
      >

        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        <div className="space-y-4">

          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <span
              onClick={() => setIsLogin(true)}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Sign In
            </span>
          </p>

        </div>

      </form>

    </div>
  )
}

export default RegisterForm