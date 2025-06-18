import { useReducer } from "react";
import { useState } from "react";

export const Counter = () => {
  // const [count, setCount] = useState(0)  //basic hook to manage state when the application is small and basic, when we don't have to manage multiple and complex states which depends on the sub states value.

  const reducer = (state, action) => {
    // reducer function needs to be defined and it takes two params, state and an action.
    console.log(state, action);
    if (action.type === "Increament") {
      return state + 1;
    }
    if (action.type === "Decreament") {
      //state = state - 1;
      return state - 1;
      //                 In a reducer function, you must always return the new state
      // Mutating the state variable without returning it won't update React's state
      // The function implicitly returns undefined when no return statement is reached
    }
    if (action.type === "Reset") {
      return 0;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0); //advanced form of useState hook which is used to manage states when the application is large and complex, where the states are dependent on multiple sub-states values, and are difficult to manage.

  // useReducer works similarly like the useState hook. In this we get a state and a dispatch function from the hook.

    // 1) State is the same as in teh useState hook.
    // 2) dispatch is used to send an action to the the reducer function that updates the state based on the action.

  // We also has to provide two thing to the useReducer hook
     // 1) Reducer function is a function that takes the action from the dispatch function and updates the state based on the action.
    // 2) We have to ender the initial value of the state, just as same as the useState hook.

  return (
    <>
      <h1>count is : {count}</h1>
      <button onClick={() => dispatch({ type: "Increament" })}>
        Increament
      </button>{" "}
      {/* In onClick function of the button, we are using the dispatch function to send an action which has an object with the key "type". This object can be accessed by the reducer function as an action value.*/}
      <button onClick={() => dispatch({ type: "Decreament" })}>
        Decreament
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>
        Reset
      </button>
    </>
  );
};
