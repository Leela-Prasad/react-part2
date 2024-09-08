import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import Game from "../entities/Game";
import APIClient, { FetchResponse } from "../services/api-client";
import { useTypedSelector } from "./reducer";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {

  const gameQuery = useTypedSelector(s => s.gameQuery)

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.fetchAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("24h"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
