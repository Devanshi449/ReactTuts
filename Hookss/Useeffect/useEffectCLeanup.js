import React,{useState} from "react";
import HookMouse from "./runEffectonlyONCE52";

function Mousecontainer(){
    const [display,setDisplay]=useState(true)
    return(
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse/>}

             {/* here we can see that even after dsiplay if false our mouse event are increasing 
             even thourgh the component has been removed the event listener belonging to the component is still listening and executing 
             so there is a memory leak 
             Hence we need to do cleanup after our component
             we can do this by----
             the fucntion which is passed to use effect can return a fucntion which will be executed when component will unmount
             so whateevr we return in useEffect is basically our clean up fucntion
             THIS CLEANUP FUCNTION IS ADDED IN HOOKMOUSE COMPONENT
             */}
        </div>
    )
}

export default Mousecontainer