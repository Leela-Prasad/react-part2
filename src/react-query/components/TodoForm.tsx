import { useRef } from "react";
import useAddTodo from "../hooks/useAddTodo";

function TodoForm() {
  const ref = useRef<HTMLInputElement>(null);
  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });

  return (
    <form
      className="row mb-3"
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current && ref.current.value) {
          const newTodo = {
            id: 0,
            userId: 1,
            title: ref.current?.value,
            completed: false,
          };
          addTodo.mutate(newTodo);
        }
      }}
    >
      {addTodo.error?.message && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
}

export default TodoForm;
