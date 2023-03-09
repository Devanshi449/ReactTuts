import React,{Component} from "react";
import UpdatedComponent from "./Higherorder";

class Clickcounter extends Component{
    
    render(){

        const { count, incrementCount } = this.props;
        return (
          <button onClick={incrementCount}>
            {this.props.name} {count} times
          </button>
        );
    }
}

export default UpdatedComponent(Clickcounter)