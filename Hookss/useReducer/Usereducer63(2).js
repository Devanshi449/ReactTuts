import React, { useReducer } from "react";
//here we will use state object and action object
const initialState = {
    firstCounter:0
}

//state as an object is really helpful as now we can create more state variables very easily



const reducer = (state, action) => {
  // return newState
  switch (action.type) {
    case "increment":
      return {firstCounter : state.firstCounter+1};
    case "decrement":
      return {firstCounter : state.firstCounter-1};
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Countertwo() {
  // useReducer also returns a pair of values which we can get hold of using array destructuring syntax
  const [count, dispatch] = useReducer(reducer, initialState);
  //dispatch method allows us to execute the code corresponsing to a particular action

  return (
    <div>
      <div>Count-{count.firstCounter}</div>
      <button onClick={() => dispatch({type:"increment"})}>Increment</button>
      <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
      <button onClick={() => dispatch({type:"reset"})}>Reset</button>
    </div>
  );
}

export default Countertwo;
