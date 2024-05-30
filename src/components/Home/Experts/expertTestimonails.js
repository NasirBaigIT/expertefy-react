import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Testimonial({ logoSrc, sentence, name, location, title }) {
  return (
    <article className="flex flex-col justify-center pb-4 w-full bg-white rounded-xl shadow-xl max-md:mt-8">
      <div className="flex justify-center items-center px-16 py-3.5 card-header rounded-xl shadow-sm max-md:px-5">
        <img
          alt="Client Logo"
          src={logoSrc}
          className="max-w-full aspect-[7.14] w-[152px]"
        />
      </div>
      <blockquote className="mx-4 mt-2 text-lg leading-5 text-indigo-500 uppercase max-md:mx-2.5">
        <h2 className="">{title}</h2>
        <p className="dark-testimonial-text">
          <span className="text-5xl lowercase">“</span>
          {sentence}
        </p>
        <footer className="mt-3 float-right">
          <strong className="text-xl font-medium text-indigo-500">
            {name}
          </strong>
          <span className="block font-medium text-indigo-500">{location}</span>
        </footer>
      </blockquote>
    </article>
  );
}

const testimonials = [
  {
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d0f3d28d63b0ed377625cba0fa9c6adc22cb0bedce7b3936e65aa2e9fc585e1?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Expertefy are the True Professionals and Experts!",
    sentence:
      "Solid communication and went to bat for competitive pricing. Sid, the account manager, even stayed on the line to ensure there was a connected bridge between expertise, professionalism & rapport. Out of the 4 different firms I've worked with Expertefy stepped into my #1 position!",
    name: "Bradley",
    location: "United States",
  },
  {
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/59c8aaffcf471959a123ebf4b4a59039cf8814d579112e5c72677ebbe0ca1c40?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Expertefy - Highly Recommended",
    sentence:
      "I was contacted by Expertefy as an industry subject matter expert to provide advice to an industry company within my field. I was very impressed by the positive level of contact prior to and following the arrangement. This resulted in their client having the latest information and industry trends explained within a comfortable environment for all concerned. I look forward to supporting Expertefy again.",
    name: "Paul",
    location: "United Kingdom",
  },
  {
    logoSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f88115be6c6c5e6a9c98cdaa1f28b6e5e71fab787c494fbc0dcced07a53295ba?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Simple and transparent process",
    sentence:
      "I was contacted … to help in the form of a phone consultation. The consulting initiation and selection process was simple and transparent. I was properly guided throughout the process. The payment was transferred with in the agreed time period.",
    name: "Mohammed",
    location: "United Arab Emirates",
  },
];

const ClientsTestimonials = () => {
  return (
    <section className="flex flex-col items-center px-5 mt-24 w-full max-md:mt-10 max-md:max-w-full">
      <div className="text-base leading-4 text-center text-indigo-500">
        <span className="text-lg text-indigo-900">TESTIMONIALS</span>
        <br />
        <span className="text-5xl font-medium text-indigo-500">
          What Our Experts Say
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
