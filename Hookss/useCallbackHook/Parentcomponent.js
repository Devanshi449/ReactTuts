import React,{useState,useCallback} from "react"
import Count from "./Count"
import Title from "./title"
import Button from "./Button"

function ParentComponent(){
    const [age,setAge]=useState(20)
    const [salary,setSalary]=useState(80000)

    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])

    const incrementSalary=useCallback(()=>{
        setSalary(salary+5000)
    },[salary])

    return (
      <div>
        <Title />
        <Count text="Age" count={age} />
        <Button handleClick={incrementAge}>Increment AGE</Button>
        <Count text="Salary" count={salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>
      </div>
    )
}

export default React.memo(ParentComponent)