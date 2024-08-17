import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import { CACHE_KEY_TODOS } from "./constants";
import todoService, { Todo } from "../services/todoService";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryclient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) => todoService.post(todo),

    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryclient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
      queryclient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryclient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo == newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      queryclient.setQueriesData<Todo[]>(
        CACHE_KEY_TODOS,
        context?.previousTodos
      );
    },
  });
};

export default useAddTodo;
