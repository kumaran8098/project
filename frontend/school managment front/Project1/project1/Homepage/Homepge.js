// Homepge.js

import Carousel from 'react-bootstrap/Carousel';
import himage from "../university-of-alabama-1611886_1280.jpg";
import himage1 from "../pexels-agung-pandit-wiguna-3401403.jpg";
import himage2 from "../teacher-4784916_1280.jpg";
import "./Homepge1.css" 


function Homepageslide() {
  const imageStyle = {
    width: '100%',
    height: '550px',
    objectFit: 'cover',
  };

  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={himage} alt="First Slide" style={imageStyle} />
        <Carousel.Caption>
          <h3 className='com01'>WELCOME TO INTERNATIONAL GRAMMAR SCHOOL</h3>
          <p>All time grammer school Student first mark in internaional level best coching in best teachers.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={himage1} alt="Second Slide" style={imageStyle} />
        <Carousel.Caption>
          <h3 className='com01'>WELCOME TO INTERNATIONAL GRAMMAR SCHOOL</h3>
          <p>All time grammer school Student first mark in internaional level best coching in best teachers.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={himage2} alt="Third Slide" style={imageStyle} />
        <Carousel.Caption>
          <h3 className='com01'>WELCOME TO INTERNATIONAL GRAMMAR SCHOOL</h3>
          <p>All time grammer school Student first mark in internaional level best coching in best teachers.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Homepageslide;
