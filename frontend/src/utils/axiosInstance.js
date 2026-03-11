import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    timeout: 10000
})

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"] = "application/json"
        return config
    },
    (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response) {

            const { status, data } = error.response

            switch (status) {

                case 401:
                    console.error("Unauthorized:", data)
                    break

                case 403:
                    console.error("Forbidden:", data)
                    break

                case 404:
                    console.error("Not Found:", data)
                    break

                case 500:
                    console.error("Server Error:", data)
                    break

                default:
                    console.error(`Error (${status}):`, data)

            }

        } else if (error.request) {

            console.error("Network Error:", error.request)

        } else {

            console.error("Error:", error.message)

        }

        const customError = new Error(
            error.response?.data?.message || error.message
        )

        customError.status = error.response?.status
        customError.data = error.response?.data

        return Promise.reject(customError)
    }
)

export default axiosInstance