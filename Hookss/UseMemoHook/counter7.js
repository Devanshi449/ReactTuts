import React,{useState,useMemo} from "react";

function Counter(){
    const [counterOne,setCounterOne]=useState(0)
    const [counterTwo,setCounterTwo]=useState(0)

    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }

    const incrementTwo=()=>{
        setCounterTwo(counterTwo+2)
    }
    
    const isEven=useMemo(()=>{
        let i=0
        while(i<200000000)
        {
            i++
        }
        return counterOne%2===0
    },[counterOne])

    //here the rate is slowed down as we have added this while loop and ui is slowed down
    //but in counter2 we are not checking even or odd still it's speed is decreased
    //countertwo is slow as well beacuse eevrytime the state updates the component re-renders and when component re-redners then eevn function is called again
    //now we need to tell react not to recalculate certain values when unnecessary especialy which takes a long time to compute
    /* USEMEMO IS A HOOK THAT WILL ONLY RECOMPUTE THE CATCHED VALUE WHEN ONE 
    -IMPORT USEMEMO
    -IN USEMEMO , AS FIRST ARGUMENT WE PASS IN THE FUNCTION WHOSE WRITTEN VALUE NEEDS TO BE CASHED ,
    AS THE 2ND PARAMETER WE NEED TO SPECIFY THE DEPENDENCIES, HERE IT DEPENDS ON COUNTERONE
    after using useMemo update is really fast as using the catched value of is even function 
    IF YOU NEED TO CACHE A FUNCTION USE CALLBACK
    IF YOU NEED TO CACHE THE RESULT OF AN INVOKED FUNCTION USE MEMO 
    */
    return(
        <div>
            <div>
                <button onClick={incrementOne}>Count one-{counterOne}</button>
                <span>{isEven() ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two-{counterTwo}</button>
            </div>
        </div>
    )
}
export default Counter