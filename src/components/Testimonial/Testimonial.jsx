import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Natalia",
    text: "Polecam Klaudię z całego serduszka ! Ma profesjonalne podejście i zna się na swojej robocie",
    img: "",
  },
  {
    id: 2,
    name: "Anżela Patuska",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    img: "",
  },
  {
    id: 3,
    name: "Anżela Patuska",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    img: "",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 my-10">
      <div className="container">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Opinie</h1>
        </div>
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10  relative">
                    <div className="mb-4">
                        <img src={data.img} alt="" className="rounded-full w-20 h-20"/>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="space-y-3">
                            <p className="text-xs text-gray-500">{data.text}</p>
                            <p className="text-xl text-primary font-bold">{data.name}</p>
                        </div>
                    </div>
                    <p className="text-9xl text-primary/20 absolute top-0 right-0 font-serif">„</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
