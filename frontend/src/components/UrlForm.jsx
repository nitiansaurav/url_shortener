import React, { useState } from "react"
import { createShortUrl } from "../api/shortUrl.api"
import { useSelector } from "react-redux"
import { queryClient } from "../main"

const UrlForm = () => {

  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [customSlug, setCustomSlug] = useState("")
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(null)
  const [loading,setLoading] = useState(false)

  const {isAuthenticated} = useSelector((state) => state.auth)

  const handleSubmit = async (e) => {

    e.preventDefault()

    try{

      setLoading(true)

      const data = await createShortUrl({
        url,
        slug: customSlug
      })

      setShortUrl(data.shortUrl)

      queryClient.invalidateQueries({
        queryKey:['userUrls']
      })

      setError(null)

    }catch(err){

      setError(err.message)

    }finally{
      setLoading(false)
    }
  }

  const handleCopy = () => {

    navigator.clipboard.writeText(shortUrl)

    setCopied(true)

    setTimeout(()=>{
      setCopied(false)
    },2000)

  }

  return (

    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Enter your URL
        </label>

        <input
          type="url"
          value={url}
          onChange={(e)=>setUrl(e.target.value)}
          placeholder="https://example.com"
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      {isAuthenticated && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Custom Slug (optional)
          </label>

          <input
            type="text"
            value={customSlug}
            onChange={(e)=>setCustomSlug(e.target.value)}
            placeholder="my-custom-link"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded-md"
      >
        {loading ? "Creating..." : "Shorten URL"}
      </button>

      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {shortUrl && (
        <div className="mt-4">

          <p className="font-semibold mb-2">
            Short URL
          </p>

          <div className="flex">

            <input
              readOnly
              value={shortUrl}
              className="flex-1 border p-2 rounded-l-md"
            />

            <button
              type="button"
              onClick={handleCopy}
              className="px-4 bg-gray-200 rounded-r-md"
            >
              {copied ? "Copied!" : "Copy"}
            </button>

          </div>

        </div>
      )}

    </form>
  )
}

export default UrlForm