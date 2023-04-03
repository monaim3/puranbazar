import React from 'react';
import './Brand.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import brand1 from '../../assest/brand-7.jpg'
import brand2 from '../../assest/brand-8.jpg'
import brand3 from '../../assest/brand-9.jpg'
import brand4 from '../../assest/brand-11.jpg'
import brand5 from '../../assest/brand-12.jpg'
import brand6 from '../../assest/brand-13.jpg'
import brand7 from '../../assest/brand-10.jpg'
const Brand = ({ deviceType }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return (
        <>
          <div className='p-12 '>
          <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all 1s ease"
  transitionDuration={1500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-20-px"
  className='border '
>
  <div><img src={brand1} alt="brand"  draggable={false} style={{ width: "100%", height: "100%" }}/></div>
  <div><img src={brand2} alt="brand"  draggable={false} style={{ width: "100%", height: "100%" }}/></div>
  <div><img src={brand3} alt="brand"  draggable={false} style={{ width: "100%", height: "100%" }}/></div>
  <div><img src={brand4} alt="brand"  draggable={false} style={{ width: "100%", height: "100%" }}/></div>
  <div><img src={brand5} alt="brand"  draggable={false} style={{ width: "100%", height: "100%" }}/></div>
  <div><img src={brand6} alt="brand"  draggable={false} style={{ width: "100%", height: "100%" }}/></div>
  <div><img src={brand7} alt="brand"  draggable={false} style={{ width: "100%", height: "100%" }}/></div>
</Carousel>
          </div>
        </>
    );
};

export default Brand;