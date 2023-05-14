import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  return (
    <Carousel className="custom-carousel">
      <div>
        <img
          className="d-block w-80"
          src="https://s6.imgcdn.dev/rHbWH.jpg"
          alt="First slide"
        />
      </div>
      <div>
        <img
          className="d-block w-80"
          src="https://s6.imgcdn.dev/rHmhS.png"
          alt="Second slide"
        />
      </div>
      <div>
        <img
          className="d-block w-80"
          src="https://s6.imgcdn.dev/rHqPC.png"
          alt="Third slide"
        />
      </div>
      <div>
        <img
          className="d-block w-80"
          src="https://s6.imgcdn.dev/rHFZe.png"
          alt="fourth slide"
        />
      </div>
      <div>
        <img
          className="d-block w-80"
          src="https://s6.imgcdn.dev/rHH80.png"
          alt="Third slide"
        />
      </div>
    </Carousel>
  );
};

export default Projects;





