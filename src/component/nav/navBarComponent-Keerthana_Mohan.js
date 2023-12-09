import axios from "axios";
import { Component } from "react";
import Image from "../profile/imageComponent";
import CardComponent from "../cards/cardComponent-Keerthana_Mohan";



class NavBarComponents extends Component{
  state={
    product:[]
  }
  handleClicked=()=>{
    axios.get("https://fakestoreapi.com/products").then(response=>{
      if(response.status==200){

          this.setState(
              {
                  product:response.data
              }
                          
          )
          
      }else{
          alert("Unsuccessful")
      }
  })
      

  }
  handleDelete = (id) => {
    // console.log(id);
  const updatedProduct = this.state.product.filter((ele) => ele.id !== id); 
  this.setState({
      product: updatedProduct,
    });
  };


  render(){
    return(
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">API</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button onClick={this.handleClicked} >Home</button>
            

          </div>
        </div>
      </div>
    </nav>
    {
            this.state.product.map((ele)=>{
                return(
                    <div key={ele.id}>
                       {/* <h2> {ele.category}</h2>
                       <Image imageUrl={ele.image}/> */}
                       <CardComponent  handleDelete={this.handleDelete} id={ele.id} imageUrl={ele.image} category cat={ele.category}/>
                       {/* <button onClick={this.handleDelete}>remove</button> */}
                        </div>
                                           
                )
            })
        }

      </>
    )
  }
}
export default NavBarComponents