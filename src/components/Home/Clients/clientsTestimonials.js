import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Testimonial({ logoSrc, sentence, title }) {
  return (
    <article className="flex flex-col justify-center pb-4 w-full bg-white rounded-xl shadow-xl max-md:mt-8">
      <div className="flex justify-center items-center px-16 py-3.5 card-header rounded-xl shadow-sm max-md:px-5">
        <img
          alt="Client Logo"
          src={logoSrc}
          className="max-w-full aspect-[7.14] w-[152px]"
        />
      </div>
      <div>
        <p className="pt-2 px-4 text-lg light-testimonial-text">{title}</p>
      </div>
      <blockquote className="mx-4 mt-2 text-lg leading-5 text-indigo-500 uppercase max-md:mx-2.5">
        <p className="dark-testimonial-text">
          <span className="text-5xl lowercase">“</span>
          {sentence}
        </p>
      </blockquote>
    </article>
  );
}

const testimonials = [
  {
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d0f3d28d63b0ed377625cba0fa9c6adc22cb0bedce7b3936e65aa2e9fc585e1?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Global Strategy Consultancy Partner",
    sentence:
      "Expertefy has been a game-changer for our firm. Their swift access to industry expertise has saved us time and resources, allowing us to serve our clients more effectively.",
  },
  {
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/59c8aaffcf471959a123ebf4b4a59039cf8814d579112e5c72677ebbe0ca1c40?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "US Life Science Consultancy Principal",
    sentence:
      "We've been impressed with Expertefy's affordability and reliability. Their experts are available around the clock, ensuring we get the insights we need when we need them. Expertefy has become an integral part of our process. Their commitment to confidentiality gives us peace of mind when dealing with sensitive projects.",
  },
  {
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f88115be6c6c5e6a9c98cdaa1f28b6e5e71fab787c494fbc0dcced07a53295ba?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "UK Strategy Consultancy Managing Director",
    sentence:
      "Their flexibility and responsiveness have allowed us to adapt to our clients' evolving needs quickly. Working with them has been a seamless experience.",
  },
];

const ClientsTestimonials = () => {
  return (
    <section className="flex flex-col items-center px-5 mt-15 w-full max-md:mt-10 max-md:max-w-full">
      <div className="text-base leading-4 text-center text-indigo-500">
        <span className="text-lg text-indigo-900">TESTIMONIALS</span>
        <br />
        <span className="text-5xl font-medium text-indigo-500">
          What Our Clients Say
        </span>
        <br />
      </div>
      <Swiper
        spaceBetween={30} // Add space between slides
        slidesPerView={1} // Number of slides visible at once
        navigation
        pagination={{ clickable: true }}
        className="mt-6 w-full max-w-[1120px] max-md:max-w-full"
        breakpoints={{
          // when window width is <= 768px (tablet)
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is <= 1024px (desktop)
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Testimonial {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientsTestimonials;
