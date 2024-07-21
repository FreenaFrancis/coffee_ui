import React from 'react';
import { IoInfinite } from 'react-icons/io5';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Freena",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus animi beatae mollitia iste ullam!",
    img: "https://tse2.mm.bing.net/th?id=OIP.CSThJ0qpV3XKsURD0iKZ0AHaEK&pid=Api&P=0&h=180"
  },
  {
    id: 2,
    name: "Anjali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus animi beatae mollitia iste ullam!",
    img: "https://tse3.mm.bing.net/th?id=OIP.jpLd-_FFm5nktmj6TtNtHAHaFj&pid=Api&P=0&h=180"
  },
  {
    id: 3,
    name: "Ziya",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus animi beatae mollitia iste ullam!",
    img: "https://tse1.mm.bing.net/th?id=OIP.RYDJeNBXkSnl4zsmaLSwTQHaEZ&pid=Api&P=0&h=180"
  },
  {
    id: 4,
    name: "Shilpa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus animi beatae mollitia iste ullam!",
    img: "https://tse3.mm.bing.net/th?id=OIP.SsVkfFpYfo2UMJ7_RwY6nAHaJQ&pid=Api&P=0&h=180"
  }
];

function Testimonial() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 2000,      // Set autoplay speed (in milliseconds)
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
  };

  return (
    <div className='py-14 mb-10'>
      <div className="container">
        {/* header section */}
        <div 
        data-aos="fade-up" className="text-center mb-10">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonial
          </h1>
        </div>

        {/* cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className='my-6' key={data.id}>
                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                  {/* img */}
                  <div className='mb-4'>
                    <img src={data.img} alt={data.name}
                      className='rounded-full w-20 h-20' />
                  </div>

                  {/* content */}
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                      <p className='text-xs text-gray-500'>{data.text}</p>
                      <h1 className='text-xl font-bold text-black/70 font-cursive'>{data.name}</h1>
                    </div>
                  </div>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
