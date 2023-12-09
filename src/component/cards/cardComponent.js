import React, { Component } from "react";
import axios from "axios";
import Audio from "react-spinners/ClipLoader";


class CardsComponent extends Component {
  constructor() {
    super()
    this.state = {
      product: [],
      totalPrice: 0,
    }
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      if (response.status === 200) {
        const products = response.data;

        
        const totalPrice = products.reduce((acc, ele) => acc + ele.price, 0);

        this.setState({
          product: products,
          totalPrice: totalPrice.toFixed(2), 
        });
      } else {
        alert("Unsuccessful");
      }
    });
  }
    
  handleDelete = (id) => {
    const updatedProduct = this.state.product.filter((ele) => ele.id !== id);
    this.setState({
      product: updatedProduct,
    });
  };

  handleDeleteAll = () => {
    this.setState({
      product: [],
    });
  };



  render() {
    return (
      <>
              <h1>Total Price: ${this.state.totalPrice}</h1>

      <br></br>
       <button type="button" class="btn btn-dark" onClick={this.handleDeleteAll}>Delete All Cards</button>
 <br></br>
        {

          this.state.product.length > 0
            ?
            this.state.product.map((ele) => {
              return (
                <React.Fragment key={ele.id}>
                <div className="card-columns"  style={{display:"flex",
             flexWrap:"no-wrap",
             justifyContent: "space-between"}}>
                  <div className="card bg-primary" style={{
                  width: "300px",
                  height:"300px"
                }}>
                    <div className="card-body text-center">
                      <p className="card-text">{ele.title} </p>
                      <img src={ele.image} width="200px" height="200px"></img>
                      <button onClick={() => this.handleDelete(ele.id)}>Delete</button>
                      
                    </div>
                  
                  </div>
                </div>
                 </React.Fragment>
              )
            })
            :
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
        }
      </>
    )
  }
}

export default CardsComponent
