import React, { Component } from "react";
import axios from "axios";
import "./table.css";

class Tables extends Component {
  constructor() {
    super();
    this.state = {
      originalProduct: [],
      product: [],
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      if (response.status === 200) {
        this.setState({
          originalProduct: response.data,
          product: response.data,
        });
      } else {
        alert("Unsuccessful");
      }
    });
  }

  filterProducts = (category) => {
    const updatedProduct = this.state.originalProduct.filter(
      (ele) => ele.category === category
    );
    this.setState({
      product: updatedProduct,
    });
  };

  handleMens = () => {
    this.filterProducts("men's clothing");
  };

  handleWomens = () => {
    this.filterProducts("women's clothing");
  };

  handleElectronics = () => {
    this.filterProducts("electronics");
  };

  render() {
    const { product } = this.state;

    return (
      <>
        <div>
          <button onClick={this.handleMens}>Mens Clothing</button>
          <button onClick={this.handleWomens}>Womens Clothing</button>
          <button onClick={this.handleElectronics}>Electronics</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <img src={item.image} alt={item.title} width="200px" height="200px" />
                </td>
                <td>{item.category}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Tables;
