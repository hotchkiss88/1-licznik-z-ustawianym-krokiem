import React, { Component } from "react";
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Step from "./Step";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      stepValue: 5,
    };

    //bind() for ES5 method
    // this.changeValue=this.changeValue.bind(this);
  }

  //ES5
  // changeValue() {
  // 	this.setState((prevState) =>{
  // 		return ({
  // 			counterValue: prevState.counterValue +1
  // 		})
  // 	});
  // }

  //ES6
  changeValue = (action) => {
    this.setState((prevState, prevProps) => {
      let currentCounterValue = this.state.counterValue;
      if (action === "add") {
        currentCounterValue += this.state.stepValue;
      } else if (action === "reinit") {
        currentCounterValue = prevProps.initValue;
      } else if (action === "reset") {
        currentCounterValue = 0;
      }

      return {
        counterValue: currentCounterValue,
      };
    });
  };

  //zajmij się edycją zdarzenia
  handleStepEvent = (val) => {
    this.setState({ stepValue: Number(val) });
  };

  render() {
    return (
      <div className="counter">
        Counter:
        <Display displayValue={this.state.counterValue} />
        <ButtonsPanel buttonMethod={this.changeValue} />
        <Step
          onInputChange={this.handleStepEvent} //Cokolwiek bedzie wysłane przyjmij to jako agrument handleStepEvent
        />
      </div>
    );
  }
}

export default Counter;
