import React from "react";
import "./Step.css";

function Step(props) {
  return (
    <div className="step">
      <label htmlFor="quantity"> Step: </label>

      <input
        onChange={
          (e) => props.onInputChange(e.target.value)
        }
        type="number"
        id="quantity"
        name="quantity"
      />
    </div>
  );
}

export default Step;

// Wersja działająca

// import React from "react";
// import './Step.css'

// function Step(props) {

// 	return(

//   <div className= "step">
// 			<label htmlFor="quantity">Step:</label>

// 			<input
// 				onChange = {e =>console.log(e.target.value)}
// 				type ="number"
// 				id="quantity"
// 				name="quantity"
// 			/>

// 			 <input onClick={() => {
// 				props.onSave()}}
// 				type="submit"
// 				value="add Step"/>

// 		</div>

// 	);

// }

// export default Step;
