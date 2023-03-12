import React,{useState} from "react";

// here also we will pass initial value as an empty Array,
// useState will not merge it automatically and hence we need to use spread operator

function Hookcounter4(){

    const [items,setItems]=useState([])

    const addItem=()=>{
        setItems([...items,{  //...items will make a copy of items  
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
        
    }
    return(
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item=>(<li key={item.id}>{item.value}</li>))}
            </ul>
        </div>
    )

}

export default Hookcounter4

// UseState summary ***************************************  
// - the usestate hook lets you add state to fucntional components 
// - In Classes , the state is always and object 
// - With the usestate hook, the state dosen't have to be object
// - the usestate hook return an array with 2 ElementInternals,
// - first element is the current vslue of the state, and second is state setter fucntional
// - wheh dealing with objects and array, always make sure to spread the variable and the call setter fucntional