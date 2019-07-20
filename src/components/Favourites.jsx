import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import InfiniteCarousel from 'react-leaf-carousel';
import Card from './Card';
import Slider from "react-slick";

class Favourties extends React.Component {
    render() {
        let { recipes } = this.props;
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 2,
            swipeToSlide: true,
            afterChange: function(index) {
              console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
              );
            }
          };
        return (
            <Slider {...settings}>
                {recipes.map(function (item) {
                    return (<Card key={item.name}  {...item} />);
                })}
            </Slider>

        )
    }
}



export default Favourties;