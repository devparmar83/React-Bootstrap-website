import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../index.css'; // Importing the CSS file for styling

const Carousels = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="carousel-image" src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW5pbWFsc3xlbnwwfDB8MHx8fDA%3D" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="carousel-image" src="https://media.istockphoto.com/id/1296527895/photo/various-dance-poses-of-an-indian-male-peacock.jpg?s=612x612&w=0&k=20&c=s9qioP87HZQ_V-QpnDpYUD4-acrY-SqGZfo-q0Xmgk0=" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="carousel-image" src="https://media.istockphoto.com/id/532181202/photo/mother-and-lion-cubs.jpg?s=612x612&w=0&k=20&c=uDt_ZAR3mfC_u_CQSe3X0vW5OWhW0ATN9uAqCgwquFo=" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carousels;
