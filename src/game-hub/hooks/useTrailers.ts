import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: () => apiClient.fetchAll(),
    staleTime: ms("24h"),
  });
};

export default useTrailers;
