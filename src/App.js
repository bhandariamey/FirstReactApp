
import React from "react"
export default class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    increaseCount = ()=>{
        // setState -> its a callback.
        this.setState((state,props)=>{
            return {count: state.count + props.diff }
        })
    }

    decreaseCount = ()=>{
        this.setState((state,props)=>{
            return {count: state.count - props.diff }
        })
    }

    render(){
        console.log(this.props)
        return (
        <div>
            <h1 className="counter-display">{this.state.count}</h1>
            <button onClick = {this.increaseCount}>+{this.props.diff}</button>
            <button onClick={this.decreaseCount}>-{this.props.diff}</button>
        </div> 
        )
        
    }
}