
//we need to update the document title 

import React,{useState, useEffect} from "react";

function Hookcounter1(){
     
    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`You clicked ${count} times`   
        /* when we specify use-effect we are basicallu requesting react to execute the fucntion which is passed as an argument everytime the component renders
        -->so useEffect runs after every render 
        -->useEffect is places inside the component by doind this we can easily access state and props of the component
        1) so import useEffect from react
        2) call it within the component and pass in a fucntion which has to be executed after every render of that component
        */ 
    })

    return(
        <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    )
}

export default Hookcounter1