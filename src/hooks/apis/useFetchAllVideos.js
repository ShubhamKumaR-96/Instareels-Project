import { getAllVideos } from "@/api/videos";
import { useQuery } from "@tanstack/react-query";

export default function useFetchAllvideos() {
  const {
    isFetching: isVideoFetching,
    isError: isVideoError,
    isFetched: isVideoFetched,
    data: videosData,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: getAllVideos,
    cacheTime: 0,
  });

  return {
    isVideoFetched,
    isVideoError,
    isVideoFetching,
    videosData,
  };
}
