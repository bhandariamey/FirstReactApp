import './index.css';
import React from "react" // Component is derived from here
import ReactDOM from "react-dom" // rendering is done using this.
import Counter from "./App.js"


// // const h1 = React.createElement("h1", null, "Hello World")
// // console.log(h1)

// // const element = React.createElement(<type-of-element>, <props>, <value>)
// //const counterDisplayElement = React.createElement("h1",{className:"counter-display"},0);


// // const incrementButtonElement = React.createElement("button",null,"+");
// // const decrementButtonElement = React.createElement("button",null,"-");
// // const containerDivElement = React.createElement("div",null,[counterDisplayElementJSX,incrementButtonElement,decrementButtonElement]);


// const containerDivElementJSX = (
//     <div>
//       <h1 className="counter-display">0</h1>
//       <button>+</button>
//       <button>-</button>
//     </div>
//   )

// ReactDOM.render(containerDivElementJSX, document.getElementById("root"))


class App extends React.Component{
    render(){
        return (
            <>
            <Counter diff={1}/>
            <Counter diff={10}/>
            </>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>,rootElement)