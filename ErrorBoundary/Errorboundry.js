import React,{Component} from 'react'

class Errorboundary extends Component{

    constructor(props){
        super(props)

        this.state={
            hasError: false
        }
    }

    static getDerivedStateFromError(error)
    {
        return{
            hasError:true
        }
    }

    componentDidCatch(info,error)
    {
        console.log(info);
        console.log(error);     {/* Now if we go in the console we will see the info about the error also the error*/}
    }

    render(){
        if(this.state.hasError){
            return <h1>something went wrong</h1>
        }
        return this.props.children
    }
}

export default Errorboundary

//we use mainly 2 fucntions for error boundary (or error handling phase methods)
// static getDeprivedStateFromerror(error)
//componentDidCatch

//runtime errors during rendering can crash the application
//it will be great if we can catch the error and display a fallback UI and here error boundary take a spot light

//a class component that implements either one or both of the lifecycle methods getDerivedstatefromerror and componentDidCatch becmomes an error boundary
/*the static method getDerviedStateFromError method is used to render a fallbackUI after an error is thrown and 
componentDidCatch method is used to log the error */

 
