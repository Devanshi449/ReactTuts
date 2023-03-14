import React,{useEffect,useState} from "react";

function HookMouse(){
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMousePosition=e=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(()=>{          //the effect called after every render unless you specify the dependency array
        /*but we don't want effect to depend on anything, we want it to be called once on initial render only &&
        we can achieve that by simply specifying an empty array as the use effect*/
        console.log("useeffect called")
        window.addEventListener('mousemove',logMousePosition)

        return()=>{
            console.log("Component unmouting code");
            window.removeEventListener("mousemove", logMousePosition);
            // this is the cleanup fucntion
        }
            
    },[])  /* here I have passed this empty array */

    return(
        <div>
            Hook X -{x} Y -{y}
        </div>
    )
}

export default HookMouse

// so we can mimic the component did mount with use effect hook by simply passing in empty array in useeffect