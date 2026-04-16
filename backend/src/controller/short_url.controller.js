import { getShortUrl } from "../dao/short_url.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/short_url.service.js"
import wrapAsync from "../utils/tryCatchWrapper.js"

export const createShortUrl = wrapAsync(async (req, res) => {
    const data = req.body
    let shortCode

    if (req.user) {
        shortCode = await createShortUrlWithUser(data.url, req.user._id, data.slug)
    } else {
        shortCode = await createShortUrlWithoutUser(data.url)
    }

    const baseUrl = `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}`

    res.status(200).json({
        shortUrl: `${baseUrl}/${shortCode}`
    })
})


export const redirectFromShortUrl = wrapAsync(async (req, res) => {
    const { id } = req.params

    const url = await getShortUrl(id)
    if (!url) throw new Error("Short URL not found")

    res.redirect(url.full_url)
})


export const createCustomShortUrl = wrapAsync(async (req, res) => {
    const { url, slug } = req.body

    const shortCode = await createShortUrlWithoutUser(url, slug)

    const baseUrl = `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}`

    res.status(200).json({
        shortUrl: `${baseUrl}/${shortCode}`
    })
})