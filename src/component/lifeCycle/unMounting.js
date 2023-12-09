import { Component } from "react";




class UnMounting extends Component{
constructor (){
    super()
    this.state={
        isVisible:true
    }
}
handleClick = ()=>{
    this.setState({
        isVisible:!this.state.isVisible
    })
}

    render(){
        return(
            <>
            <h1>Unmounting</h1>
            {
                this.state.isVisible ? <Child/> : null
            }

            <button onClick={this.handleClick}>Click the Child</button>
            </>
        )
    }
}

export default UnMounting

class Child extends Component{

    componentWillUnmount(){
        alert("Child is removed")
    }
    render(){
        return(
            <>
            <h1>child</h1>
            </>
        )
    }
}

