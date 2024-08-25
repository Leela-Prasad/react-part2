import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Game } from "../entities/Game";

const useGame = (slug: string) => {
  const apiClient = new APIClient<Game>("/games/" + slug);

  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.fetch(),
    staleTime: ms("24h"),
  });
};

export default useGame;
