import axiosInstance from "@/config/axiosConfig"

export const getAllVideos=async()=>{
    try {
        const response=await axiosInstance.get('/videos')
        return response?.data
    } catch (error) {
        console.log("Something went to wrong while fetching all videos",error)
    }
}