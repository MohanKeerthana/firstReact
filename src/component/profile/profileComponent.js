import axios from "axios";
import { Component } from "react";

import Image from "./imageComponent";


class ProfileeComponent extends Component{
    state={
        product:[]
    }
    handClicked =()=>{
        // fetch("https://fakestoreapi.com/products")
        // .then(response=>response.json()).then(response=>console.log(response))
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
            
            <button onClick={this.handClicked}> ProfileDetails</button>


        {
            this.state.product.map((ele)=>{
                return(
                    <div key={ele.id}>
                       <h2> {ele.category}</h2>
                       <Image imageUrl={ele.image}/>
                    </div>
                )
            })
        }

            </>
        )
    }
}
export default ProfileeComponent