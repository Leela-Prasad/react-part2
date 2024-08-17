import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import { CACHE_KEY_TODOS } from "./constants";
import todoService, { Todo } from "../services/todoService";

const apiClient = new ApiClient<Todo>("/todos");

const useTodos = () => {
  return useQuery({
    queryKey: CACHE_KEY_TODOS,
    queryFn: () => todoService.getAll(),
    staleTime: 1 * 60 * 1000,
  });
};

export default useTodos;
