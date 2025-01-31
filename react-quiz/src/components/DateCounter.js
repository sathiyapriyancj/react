import { useReducer } from "react";

// Initial state object
const initialState = { count: 0, step: 1 };

// Reducer function to handle state updates based on action types
function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "dec":
      // Decrease count by the current step
      return { ...state, count: state.count - state.step };

    case "inc":
      // Increase count by the current step
      return { ...state, count: state.count + state.step };

    case "setCount":
      // Set count to a specific value
      return { ...state, count: action.payload };

    case "setStep":
      // Set step to a specific value
      return { ...state, step: action.payload };

    case "reset":
      // Reset state to the initial state
      return initialState;

    default:
      // Handle unknown action types
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function DateCounter() {
  // UseReducer hook to manage state with reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // Calculate the new date by adding `count` days to the current date
  const date = new Date();
  date.setDate(date.getDate() + count);

  // Event handlers for dispatching actions
  const dec = () => dispatch({ type: "dec" });
  const inc = () => dispatch({ type: "inc" });
  const defineCount = (e) =>
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  const defineStep = (e) =>
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div className="counter">
      {/* Step control */}
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      {/* Count control */}
      <div>
        <button onClick={dec}>-</button>
        <input type="number" value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      {/* Display updated date */}
      <p>{date.toDateString()}</p>

      {/* Reset button */}
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default DateCounter;
