import React, { useReducer } from "react";

// first import useReducer hook
// step2-then in the component write useReducer(reducer,initialState); and then initilize reducer fucntion and initialState
//step3--we need to get hold of a value to display in JSX and we also a way to call reducer fucntion with the appropriate action


const initialState=0;

//reducer fucntion returns one value which is the new state 
// it acceps the current state and returns the new state
//Action is basically the instructon for the reducer function----
// based on what action specifies the reducer fucntion performs the necessary state transition

const reducer=(state,action)=>{
    // return newState
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function Counterone(){

    // useReducer also returns a pair of values which we can get hold of using array destructuring syntax 
    const [count,dispatch]=useReducer(reducer,initialState)
    //dispatch method allows us to execute the code corresponsing to a particular action

    return (
      <div>
        <div>Count-{count}</div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
      </div>
    )
}

export default Counterone;