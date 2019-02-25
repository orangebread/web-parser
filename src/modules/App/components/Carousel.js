import React  from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = props => {
	return (
	 <div className="carousel-container">
		 <div className="carousel">
			 <Carousel>
				 {
				 	props.images.map((image) => {
					 return  <Carousel.Item><img alt="img" className="d-block w-100" src={image} /></Carousel.Item>
				  })
				 }
			 </Carousel>
		 </div>
	 </div>
	);
}

export default CarouselComponent;