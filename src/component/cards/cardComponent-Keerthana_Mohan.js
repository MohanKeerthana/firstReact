import React, { Component } from "react";


class CardComponent extends Component {





  render() {
    return (
      <div  className="card-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        <div className="card" style={{ width: "20%", marginBottom: "20px" }}>
          <div className="card-body">
            <h5 className="card-text">{this.props.cat}</h5>
            <img src={this.props.imageUrl} alt="Api_Image" width="150px" height="100px" />
            <button onClick={() =>{this.props.handleDelete(this.props.id)}}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CardComponent;