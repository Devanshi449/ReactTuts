import React, { Component } from "react";
import UpdatedComponent from "./Higherorder";

class Hovercounter extends Component {
  
  render() {
    // const {count}=this.state
    const {count,incrementCount}=this.props
    return (
      <h2 onMouseOver={incrementCount}>
        {this.props.name} hovered{count} times
      </h2>
    );
  }
}

export default UpdatedComponent(Hovercounter)

//here we can see that these functions are completely same so we should use resable compenents without writing code again and again
