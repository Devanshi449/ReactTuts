import React,{useEffect,useState} from "react";

// useeffect after every render might create a performance problem

function Hookcounter51(){
    const [count,setCount]=useState(0);
    const [name,setName]=useState('')

    useEffect(()=>{
        console.log('useEffect-updating document title')
        document.title=`you clicked ${count} times`   
    },[count])

    // in order to conditionally run an effect specify the second parameter to use effect 
    // -----> the second parameter is the array of values that the effect depends on , if the value don't change btw the renders the value simply dosen't run 
    
    return(
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    )

}

export default Hookcounter51