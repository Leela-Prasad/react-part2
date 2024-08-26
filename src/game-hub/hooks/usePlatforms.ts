import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.fetchAll(),
    staleTime: ms("24h"),
    initialData: { count: platforms.length, next: "", results: platforms },
  });

export default usePlatforms;
