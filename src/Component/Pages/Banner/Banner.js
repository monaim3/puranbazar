import React from 'react';
import './Banner.css'
import banner1 from '../../assest/dell-SGY0LIfTKZ4-unsplash.jpg'
import banner2 from '../../assest/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpg'
import banner3 from '../../assest/sincerely-media-ylveRpZ8L1s-unsplash.jpg'
const Banner = () => {
    return (
        <>
          <div
  id="carouselDarkVariant"
  className="carousel slide carousel-fade carousel-dark relative"
  data-bs-ride="carousel"
>
 
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>


  <div className="carousel-inner relative w-full overflow-hidden bg-blend-darken">

    <div className="bg-gradient-to-r from-gray-500 via-purple-500 to-black carousel-item active relative float-left w-full ">
      <img
        src={banner1}
        className="block w-full  mix-blend-overlay"
        alt="Laptop"
      />
      <div className="carousel-caption text-white hidden md:block absolute text-center" data-aos="fade-right"   data-aos-easing="linear"
        data-aos-duration="1000">
        <h5 className="text-3xl font-bold ">Don't Play With Fire, Play With Ecommerce.</h5>
        <h5 className="text-2xl font-bold mt-2 ">Best quality output for world market</h5>
        <p className='text-base font-semibold mt-4 '>Some representative placeholder content for the first slide.</p>
      </div>
    </div>

    <div className="bg-gradient-to-r from-gray-500 via-purple-500 to-black carousel-item relative float-left w-full ">
      <img
        src={banner3}
        className="block w-full banneritem mix-blend-overlay "
        alt="Mountaintop"
      />
      <div className="carousel-caption text-white hidden md:block absolute text-center " data-aos="fade-right"   data-aos-easing="linear"
        data-aos-duration="1000">
      <h5 className="text-3xl font-bold 	">Life is all about E-commerce around you</h5>
        <h5 className="text-2xl font-bold mt-2 	">Best quality output for world market</h5>
        <p className='text-base font-semibold mt-4 	'>Some representative placeholder content for the first slide.</p>
      </div>
    </div>

   
  </div>
  
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>  
        </>
    );
};

export default Banner;