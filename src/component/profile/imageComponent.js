import { Component } from "react";






class Image extends Component{
    render(){
        return(
            <div>
            <img  src={this.props.imageUrl} alt="Api_Image" width={200} height={200}/>
            </div>
        )
    }
}
export default Image