import axiosInstance from "@/config/axiosConfig";

export const getAllVideos = async () => {
  try {
    const response = await axiosInstance.get("/videos");
    console.log("response",response);
    return response?.data;  // Ensure it always returns something
  } catch (error) {
    console.error("Error while fetching all videos:", error);
      // Return an empty array on error
  }
};
