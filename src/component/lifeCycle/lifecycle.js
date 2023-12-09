import React, { Component } from "react";
import axios from "axios";
import Audio from "react-spinners/ClipLoader";

class LifeCycleComponent extends Component{
   constructor(){
    
    super()
    this.state={
        count:0,
        product:[]
    }
   }
   componentDidMount(){
    axios.get("https://fakestoreapi.com/products").then(response=>{
        if(response.status==200){

            this.setState(
                {
                    product:response.data
                }
                            
            )
            alert("Fetch Success")
        }else{
            alert("Unsuccessful")
        }
    })

   }
render(){
        
        return(
            <>
           
            {

                this.state.product.length>0 
                ?
                this.state.product.map((ele)=>{
                    return(
                        <React.Fragment key={ele.id}>
                        <h2>{ele.title}</h2>
                        </React.Fragment>
                    )
                })
                :
                <Audio height="80" width="80"  radius="9"  color="green"  ariaLabel="loading" wrapperStyle wrapperClass/>
            }
            </>
        )
    }
}
export default LifeCycleComponent

class Child extends Component{
    constructor(){
        super()

        this.setState={
            color:"green"
        }
    }

static getDerivedStateFromProps(props,state){
    return{color:props.color};
}



    render(){
        return(
            <>
            <h2 style={{color:this.state.color}}>Child</h2>
            </>
        )
    }
}