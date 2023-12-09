import { Component } from "react";



class YouTubeButton extends Component{

    state={
        isSubscriber:false,
        text1:"Please Subscribe..!",
        text2:"Thanks for Subscribing"
    }
    handClick = ()=>{

        this.setState({
            isSubscriber:!this.state.isSubscriber
        },()=>{
            console.log(this.state.isSubscriber,"inside of");
          //  alert(this.state.isSubscriber?"Thanks for subscribing":"Please Subscribe")
        })
        console.log(this.state.isSubscriber,"Outside");
    }
      render(){
        return(
            <>
            <button onClick={this.handClick} style={{backgroundColor:this.state.isSubscriber?"skyblue":"darkcyan"}} >{this.state.isSubscriber?this.state.text2:this.state.text1}</button>
            {
                this.state.isSubscriber?
                <h1>Hello Welcome...!</h1>:
                <h1>Please Subscribe</h1>
            }
            </>
        )
      }
}
export default YouTubeButton