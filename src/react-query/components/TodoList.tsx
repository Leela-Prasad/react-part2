import useTodos from "../hooks/useTodos";

function TodoList() {
  const { data: todos, error, isLoading } = useTodos();

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
