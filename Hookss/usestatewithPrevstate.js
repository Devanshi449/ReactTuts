import React,{useState} from "react";

function HoverCounter2()
{
    const initialCount=0;
    const [count,setCount]=useState(initialCount);

    const incrementFive=()=>{
        // for(let i=0 ; i<5 ; i++)   here we can see that count is only incremented by one
        // {
        //     setCount(count+i);
        // }
        for(let i=0 ; i<5 ; i++)
        {
            setCount(prevCount=>prevCount+1);
        }
    }

    return (
      <div>
        count:{count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        {/* <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button> */}
        <button onClick={() => setCount(prevCount=>prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount=>prevCount-1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
      </div>
    );
}

export default HoverCounter2