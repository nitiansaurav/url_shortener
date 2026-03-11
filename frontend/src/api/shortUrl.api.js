import axiosInstance from "../utils/axiosInstance"

export const createShortUrl = async ({ url, slug }) => {

    try {

        const { data } = await axiosInstance.post("/api/create", {
            url,
            slug
        })

        return data

    } catch (error) {

        console.error("Create short URL failed:", error.message)

        throw error

    }

}