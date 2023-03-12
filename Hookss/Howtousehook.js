import React from "react";
import { useState } from "react";

function Hoveredcounter1(){

    const [count,setCount]=useState(0)

    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count {count} </button>
        </div>
    )
}

export default Hoveredcounter1

/*
1) Create a fucntional component
2) we need a state property initialized to 0
3) we need a method capable of setting that state property value
HOOK IS JUST A SPECIAL FUCNTION THAT LETS YOU TO HOOK INTO A REACT FEATURE 
SO USESTATE IS A HOOK THAT LETS YOU ADD REACT STATE TO FUCNTIONAL COMPONENTS

STATE HOOK ACCEPTS ARGUMENT WHICH IS THE INITIAL VALUE OF STATE PROPERTY AND RETURNS 
THE CURRENT VALUEOF THE STATE PROPERTY AND A METHOD THAT IS CAPABLE OF UPDATING THAT STATE PROPERTY

2 important rules for hooks**************
-->Only call hooks at the top level
Don't call hooks inside loops,condition or nested function

-->only call hooks from react fucntions
call them from within react fucntions and not just any regular javacsript fucntion


*/

