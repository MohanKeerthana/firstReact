
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
  import { Carousel } from 'react-responsive-carousel';
  import Image1 from "./angular.jpg"
  class CarouselComponent extends Component {
      render() {
          return (
              <Carousel width={"50%"}>
                  <div>
                      <img src={Image1}  width={200} />
                      <p className="legend" >Legend 1</p>
                  </div>
                  <div>
                      <img src={Image1}  width={200} />
                      <p className="legend">Legend 2</p>
                  </div>
                  <div>
                      <img src={Image1}  width={200}/>
                      <p className="legend">Legend 3</p>
                  </div>
              </Carousel>
          );
      }
  };
export default CarouselComponent