import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from "./angular.jpg";
import Image2 from "./React.jpeg";
import Image3 from './css.jpeg';
import Image4 from './html.jpeg';

class CarouselComponent extends Component {
  constructor() {
    super();

    this.state = {
      images: [
        { src: Image1, legend: 'Legend 1' },
        { src: Image2, legend: 'Legend 2' },
        { src: Image3, legend: 'Legend 3' },
      ],
    };
  }

  
  addImage = () => {
    const newImage = {
      src: Image4, 
      legend: `Legend ${this.state.images.length + 1}`,
    };
    this.setState(prevState => ({
      images: [...prevState.images, newImage],
    }));
  };

  render() {
    return (
      <>
        <Carousel width={"50%"}>
          {this.state.images.map((image, index) => (
            <div key={index}>
              <img src={image.src} width={200} />
              <p className="legend">{image.legend}</p>
            </div>
          ))}
        </Carousel>

        <button onClick={this.addImage}>Add a Image</button>
      </>
    );
  }
}

export default CarouselComponent;
