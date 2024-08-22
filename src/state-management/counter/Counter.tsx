import useCounterStore from "./store";

function Counter() {

  const {counter, increment, reset} = useCounterStore();
  return (
    <div>
      Counter {counter}
      <button
        onClick={() => increment()}
        className="btn btn-primary mx-2"
      >
        Increment
      </button>
      <button
        onClick={() => reset()}
        className="btn btn-primary"
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
