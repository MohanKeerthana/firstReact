import { Component } from "react";





class TimerComponent extends Component{
   constructor(){
    super()
    this.state={
        seconds: 0,
        isRunning: false,
    }
   }

    render(){
        return(
            <>
            <h1>Timer: {seconds} seconds</h1>
        <button onClick={this.startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={this.stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={this.resetTimer}>Reset</button>
            </>
        )
    }
}