import React,{useState} from "react";

// here defualt or initial value will be an object 

function Withobject()
{
    const [name,setName]=useState({firstname:'', lastname:''})
    // console.log(name)
    return (
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
        <h2>Your first name is - {name.firstname}</h2>
        <h2>Your last name is - {name.lastname}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    )
}

export default Withobject


  /* UseState does not automatically merge and update the object this is the key difference to setState which you 
        came accross in the class components, setState will merge the state whereas the useState hook set of the function will not merge 
        while setState will merge it automatically so we have to use spread operator  
        useState-dosen't merge it automitcally while 
        setstate - merge it automatically
        */

        // main highlight*************
        // the setter function provided by the usestate hook state does not automatically merge and update objects,
        // we have to pass value to the setter fucntion  