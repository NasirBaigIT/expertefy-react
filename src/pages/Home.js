import * as React from "react";
import '../index.css';


// function Header() {
//   return (
//     <header className="flex gap-5 justify-between self-center w-full max-w-[1120px] max-md:flex-wrap max-md:max-w-full">
//       <div className="flex gap-2 px-5 text-xl font-semibold text-indigo-500 whitespace-nowrap">
//         <img
//           alt="Expertefy Logo"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/7be36607d5c66be3bfb7649f4b238274d4d8c5f2273844d07bd86d5bbdf2a4f3?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
//           className="shrink-0 aspect-[1.04] w-[57px]"
//         />
//         <span className="flex-auto my-auto">EXPERTEFY</span>
//       </div>
//       <nav className="flex gap-5 items-center px-5 my-auto text-lg text-indigo-900 max-md:flex-wrap">
//         <a href="#services" className="grow self-stretch my-auto">
//           Services
//         </a>
//         <a href="#clients" className="self-stretch my-auto">
//           Clients
//         </a>
//         <a href="#experts" className="self-stretch my-auto">
//           Experts
//         </a>
//         <a href="#success" className="flex-auto self-stretch my-auto">
//           Success Stories
//         </a>
//         <a href="#about" className="self-stretch my-auto">
//           About Us
//         </a>
//         <a href="#contact" className="self-stretch my-auto">
//           Contact Us
//         </a>
//         <img
//           alt="Menu Icon"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/210be32a2c0f8d8011df312d01652e6db5e2b5404c7b11f4a1be06802cc962d3?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
//           className="shrink-0 self-stretch w-6 aspect-square"
//         />
//       </nav>
//     </header>
//   );
// }

function ServiceCard({ imgSrc, title }) {
  return (
    <article className="flex flex-col text-lg font-medium text-center text-indigo-900 capitalize max-md:mt-10">
      <img
        alt={title}
        src={imgSrc}
        className="self-center rounded-xl shadow-xl aspect-square w-[136px]"
      />
      <h2 className="mt-5">{title}</h2>
    </article>
  );
}

function Testimonial({ logoSrc, sentence, name, location }) {
  return (
    <article className="flex flex-col justify-center pb-4 w-full bg-white rounded-xl shadow-xl max-md:mt-8">
      <div className="flex justify-center items-center px-16 py-3.5 bg-indigo-500 rounded-xl shadow-sm max-md:px-5">
        <img
          alt="Client Logo"
          src={logoSrc}
          className="max-w-full aspect-[7.14] w-[152px]"
        />
      </div>
      <blockquote className="mx-4 mt-2 text-lg leading-5 text-indigo-500 uppercase max-md:mx-2.5">
        <p>
          <span className="text-5xl text-indigo-900 lowercase">“</span>
          {sentence}
        </p>
        <footer className="mt-2">
          <strong className="text-xl font-medium text-indigo-500">{name}</strong>
          <span className="block font-medium text-indigo-500">{location}</span>
        </footer>
      </blockquote>
    </article>
  );
}

function Form() {
  return (
    <form className="flex z-10 flex-col self-end pb-8 mt-20 mr-40 max-w-full bg-white rounded-xl shadow-xl w-[448px] max-md:mt-10 max-md:mr-2.5">
      <div className="flex gap-2.5 px-4 py-2 text-xl font-semibold text-white whitespace-nowrap bg-indigo-500 rounded-xl shadow-sm max-md:flex-wrap">
        <img
          alt="Expertefy Logo"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a25724f4a2a05714210bc241e851c799ec1daff6b6b5ed0b2c53da7430978dfd?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
          className="shrink-0 aspect-[1.03] w-[33px]"
        />
        <span className="flex-auto my-auto">EXPERTEFY</span>
      </div>
      <div className="flex flex-col px-5 mt-5 max-md:max-w-full">
        <h2 className="text-xl font-bold text-center text-indigo-900 leading-[48.09px]">
          Got a Project in Mind?
        </h2>
        <label htmlFor="name" className="sr-only">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="self-start mt-7 ml-3.5 text-lg text-center leading-[48.06px] text-zinc-400 max-md:ml-2.5"
          placeholder="Your Name"
          aria-label="Your Name"
        />
        <div className="shrink-0 mt-2 h-0.5 bg-zinc-400"></div>

        <label htmlFor="email" className="sr-only">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          className="self-start mt-9 ml-3.5 text-lg text-center leading-[48.06px] text-zinc-400 max-md:ml-2.5"
          placeholder="Your Email"
          aria-label="Your Email"
        />
        <div className="shrink-0 mt-2 h-0.5 bg-zinc-400"></div>

        <label htmlFor="contactNumber" className="sr-only">
          Contact Number
        </label>
        <input
          type="tel"
          id="contactNumber"
          className="self-start mt-6 ml-3.5 text-lg text-center leading-[48.06px] text-zinc-400 max-md:ml-2.5"
          placeholder="Contact Number"
          aria-label="Contact Number"
        />
        <div className="flex z-10 gap-5 self-start mt-3.5 ml-3 max-md:ml-2.5">
          <button
            type="button"
            className="flex gap-2.5"
            aria-label="Country Code Selector"
          >
            <img
              alt="Country Flag"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8cb1a84416cfe957cb1f14157d067e44835bce1b75905baf230fa476808f3b3?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
              className="shrink-0 aspect-square w-[30px]"
            />
            <img
              alt="Dropdown Icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb2f88a278a77e358ed8a427d4b155820f07acefd3abc5ce6458acdd37920ca2?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
              className="shrink-0 my-auto w-2.5 aspect-[1.67] fill-zinc-400"
            />
          </button>
          <span className="my-auto text-lg text-center leading-[48.06px] text-zinc-400">
            +1
          </span>
        </div>
        <div className="shrink-0 h-0.5 bg-zinc-400"></div>

        <label htmlFor="projectScope" className="sr-only">
          Let us know the project scope
        </label>
        <textarea
          id="projectScope"
          className="self-start mt-8 ml-4 text-lg text-center leading-[48.06px] text-zinc-400 max-md:ml-2.5"
          placeholder="Let us know the project scope"
          aria-label="Project Scope"
        ></textarea>
        <div className="shrink-0 mt-16 h-0.5 bg-zinc-400 max-md:mt-10"></div>

        <button
          type="submit"
          className="justify-center items-center self-center px-16 py-5 mt-7 max-w-full text-2xl text-center text-white rounded-lg shadow-xl w-[323px] max-md:px-5"
        >
          Submit Request
        </button>
      </div>
    </form>
  );
}

function Home() {
  const serviceCards = [
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7932c311e28fc88bfa2605f081b6906c1d64961e4e03765719c9e00f59012e07?apiKey=3756b57bedc84c2cbd55485bb12ec63c&", title: "Finance & Investments" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b57c69818cb076c03b6972d2a4bc2d5ba5251f9d6975dbd65bcd8f9e6db334a1?apiKey=3756b57bedc84c2cbd55485bb12ec63c&", title: "Life Sciences" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d87ebc2e7ee0233b170fb6384a520d923db5fcbfedf611679da0f80e7f2a103c?apiKey=3756b57bedc84c2cbd55485bb12ec63c&", title: "Pharmaceuticals" },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a8581c38e0afd403ca34d3fc9e10aad01e3a9877fec7c284ae5f26071ca5126?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
      title: "Technology & Digital Transformation",
    },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f01643c924307064cdb6ebdfd847e67f6a24727c391f4bd4099d88fee40fff29?apiKey=3756b57bedc84c2cbd55485bb12ec63c&", title: "Construction & Interior Design" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1eb8bd74d72e7754af80f8af782be67d9d8956705b7f1a3ed80c63d6450410ab?apiKey=3756b57bedc84c2cbd55485bb12ec63c&", title: "Telecom" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c5a04fd625731ba3ee3ecb39c2ea77fe4eac7e14eb83209b4d7d9dbc6a7aedb?apiKey=3756b57bedc84c2cbd55485bb12ec63c&", title: "Printing & Publishing" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b189b3feabf0eff0556d6622a1ce5dbdb43aae1fba2ce0fa6a1334657a78de4?apiKey=3756b57bedc84c2cbd55485bb12ec63c&", title: "Mining & Metals" },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6d0d3b5087452aea8401215a61b1c027e0ca0f625a4a1b6d593be455812f3a6?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
      title: "Industrial & Environmental Technology",
    },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a43698c6d472c4080999b2a0b78a420b01b482fec94bf1fb3d5607352688fac1?apiKey=3756b57bedc84c2cbd55485bb12ec63c&", title: "Manufacturing" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e227fea54b0b12d8255e6889c0d1263b67a8c02208d532a261944f3bf674a428?apiKey=3756b57bedc84c2cbd55485bb12ec63c&", title: "Automotive" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/889f33df1eb4471a2a6a9d296c08e8ba9a8b500fc2025e0016c48e154be8f7f4?apiKey=3756b57bedc84c2cbd55485bb12ec63c&", title: "Consumer Goods" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/81f5fcbe680d3a94ec6bb8045642ff75af3150505aa414b1034e640ed35a8cbf?apiKey=3756b57bedc84c2cbd55485bb12ec63c&", title: "Chemicals" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a1c4617bf9a00b2f6f46c4e2b4567c5cd358359e3cda73678b66c6d16076f8c?apiKey=3756b57bedc84c2cbd55485bb12ec63c&", title: "Energy & Utilities Management" },
    { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b915942e04d0cacf59a689a00bf2d28fc5065bf74bc12c8f744670a72b9ecb9e?apiKey=3756b57bedc84c2cbd55485bb12ec63c&", title: "Advertising & Market Research" },
  ];

  const testimonials = [
    {
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d0f3d28d63b0ed377625cba0fa9c6adc22cb0bedce7b3936e65aa2e9fc585e1?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
      sentence:
        "Global Strategy Consultancy Partner has been a game-changer for our firm. Their swift access to industry expertise has saved us time and resources, allowing us to serve our clients more effectively.",
      name: "Bradley",
      location: "United States",
    },
    {
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/59c8aaffcf471959a123ebf4b4a59039cf8814d579112e5c72677ebbe0ca1c40?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
      sentence:
        "We've been impressed with Expertefy's affordability and reliability. Their experts are available around the clock, ensuring we get the insights we need when we need them. Expertefy has become an integral part of our process.",
      name: "Paul",
      location: "United Kingdom",
    },
    {
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f88115be6c6c5e6a9c98cdaa1f28b6e5e71fab787c494fbc0dcced07a53295ba?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
      sentence:
        "Solid communication and went to bat for competitive pricing. Sid, the account manager, even stayed on the line to ensure there was a connected bridge between expertise, professionalism & rapport. Out of the 4 different firms I've worked with Expertefy stepped into my #1 position!",
      name: "Mohammed",
      location: "United Arab Emirates",
    },
  ];

  return (
    <div className="flex flex-col bg-white shadow-xl">
      <img
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a192a9e014b31d4f59a4e8c0f9e4ee039c9bf011f54f6ab73ef4780a0a45b56?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
        className="self-center mt-28 w-full aspect-[2] max-w-[1120px] max-md:mt-10 max-md:max-w-full"
      />
      <main>
        <section className="flex justify-center items-center px-16 py-16 mt-52 w-full bg-indigo-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center w-full max-w-[1120px] max-md:max-w-full">
            <h1 className="text-5xl font-medium leading-10 text-center text-white capitalize">
              What we offer
            </h1>
            <p className="mt-4 text-lg text-center text-white max-md:max-w-full">
              Our network prioritizes quality and depth, serving as your gateway
              to unparalleled expertise. Utilize insights from our network to
              make informed decisions, gain a competitive advantage, and stay
              abreast of industry trends.
            </p>
            <div className="flex-wrap justify-center content-start mt-16 max-w-full w-[816px] max-md:mt-10">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <img
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5aec01d3cf937b94c80fa84ce9717bffb2c5121ec5b48f3fd7400d7c193edb44?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                    className="grow shrink-0 max-w-full aspect-[1.23] w-[170px] max-md:mt-6"
                  />
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow py-0.5 text-lg font-medium text-center text-white capitalize max-md:mt-6">
                    <img
                      alt=""
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/77fe8e72589c70ef1caaf5d78353c6201f0f4010eb86e4fb0fbfcfb908338d2e?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                      className="self-center aspect-square w-[84px]"
                    />
                    <h2 className="mt-4">Customized & targeted research</h2>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow py-0.5 text-lg font-medium text-center text-white capitalize max-md:mt-6">
                    <img
                      alt=""
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e2bc11782b3219b3e8ba25b8826c42aa09ff561e4a585a42c52818d4129e5b1?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                      className="self-center aspect-square w-[84px]"
                    />
                    <h2 className="mt-4">list of available experts for review in 24h</h2>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <img
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8349cfbcb1598ef3be65454a5fcbf0d8ea20bf8c0f6e3fff7bd4aa3064b1cf6?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                    className="grow shrink-0 max-w-full aspect-[1.11] w-[154px] max-md:mt-6"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pt-5 max-md:mt-8">
                    <div className="flex flex-col bg-white rounded-none shadow-xl">
                      <div className="z-10 justify-center items-start px-5 py-3.5 -mt-5 text-xl font-medium text-center text-white whitespace-nowrap bg-indigo-500 rounded-xl shadow-sm">
                        Interviews
                      </div>
                      <p className="mt-4 text-lg text-indigo-900">
                        Engage with subject matter experts across all
                        industries. • Virtual and face-to-face meetings •
                        One-on-one session or a group setting • Free audio
                        recording & transcript
                      </p>
                      <img
                        alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1841942f0768bcb9ef5a2d21ee239bf6b77366e2abbcd8d58a2595d8da6181b?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                        className="mt-9 w-full aspect-[2.04]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pt-5 max-md:mt-8">
                    <div className="flex flex-col bg-white rounded-none shadow-xl">
                      <div className="z-10 justify-center items-start px-5 py-3 -mt-5 text-xl font-medium text-white bg-indigo-500 rounded-xl shadow-sm max-md:pr-5">
                        Expertefy-led Calls
                      </div>
                      <p className="mt-4 text-lg text-indigo-900">
                        Expertefy can moderate interviews on your behalf. Our
                        skilled moderators ensure that your discussions are
                        focused and effective, covering critical topics of
                        interest. • Audio recording and manual transcript
                      </p>
                      <img
                        alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/19987e9e93ca0ed001d8c6206fdb2e7d142b2c517c833468e0359dc89478f666?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                        className="mt-4 w-full aspect-[2.04]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pt-5 max-md:mt-8">
                    <div className="flex flex-col bg-white rounded-none shadow-xl">
                      <div className="z-10 justify-center items-start px-5 py-3 -mt-5 text-xl font-medium text-white bg-indigo-500 rounded-xl shadow-sm max-md:pr-5">
                        B2B Survey
                      </div>
                      <p className="mt-4 text-lg text-indigo-900">
                        We offer a robust B2B survey service that develops and
                        distributes custom surveys to targeted respondent pools,
                        collecting high-quality data tailored to your specific
                        research needs. • Qualitative and quantitative •
                        Programming & hosting
                      </p>
                      <img
                        alt=""
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/277feb47ba01fe9f7f34be4d53a5ebb3a5d30a1fa0a076f7e7d7db9d0bd405c4?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                        className="mt-4 w-full aspect-[2.04]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center px-16 py-5 mt-14 text-2xl text-center text-white rounded-lg shadow-xl max-md:px-6 max-md:mt-10">
              View More
            </div>
          </div>
        </section>
        <section className="flex flex-col text-lg font-medium text-center text-indigo-900 capitalize">
          <h2 className="mt-5">Industrial & Environmental Technology</h2>
          {serviceCards.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </section>
        <section className="flex flex-col items-center px-5 mt-24 w-full max-md:mt-10 max-md:max-w-full">
          <div className="text-base leading-4 text-center text-indigo-500">
            <span className="text-lg text-indigo-900">TESTIMONIALS</span>
            <br />
            <span className="text-5xl font-medium text-indigo-500">
              What Our Clients Say
            </span>
            <br />
          </div>
          <div className="mt-6 w-full max-w-[1120px] max-md:max-w-full">
            {testimonials.map((testimonial, index) => (
                            <Testimonial key={index} {...testimonial} />
            ))}
          </div>
          <div className="flex gap-5 justify-between mt-6">
            <div className="shrink-0 w-40 h-1 bg-indigo-500 rounded-3xl"></div>
            <div className="shrink-0 w-40 h-1 rounded-3xl bg-indigo-900 bg-opacity-40"></div>
          </div>
          <h2 className="mt-20 text-5xl font-medium leading-10 text-center text-indigo-500 max-md:mt-10 max-md:max-w-full">
            Diverse Industry Capabilities
          </h2>
          <p className="mt-2.5 text-lg leading-5 text-center text-indigo-900 max-md:max-w-full">
            At <span className="font-medium">Expertefy</span>, we empower a diverse range
            of clients to navigate complex challenges with confidence.
          </p>
          <div className="flex gap-5 justify-between items-start mt-8 w-full max-w-[1103px] max-md:flex-wrap">
            {serviceCards.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>
          <div className="mt-10 max-w-full w-[542px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {serviceCards.slice(12).map((card, index) => (
                <ServiceCard key={index} {...card} />
              ))}
            </div>
          </div>
        </section>
        <section className="mt-16 text-base leading-4 text-center text-indigo-500 max-md:mt-10 max-md:max-w-full">
          <span className="text-lg text-indigo-900">TESTIMONIALS</span> <br />
          <span className="text-5xl font-medium text-indigo-500">What Our Experts Say</span> <br />
        </section>
        <section className="mt-6 w-full max-w-[1120px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
          <div className="flex gap-5 justify-between mt-6">
            <div className="shrink-0 w-40 h-1 bg-indigo-500 rounded-3xl"></div>
            <div className="shrink-0 w-40 h-1 rounded-3xl bg-indigo-900 bg-opacity-40"></div>
          </div>
        </section>
        <section className="flex flex-col justify-center self-stretch mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-14 w-full min-h-[512px] max-md:px-5 max-md:max-w-full">
            <img
              alt="Background Image"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fe45f2cbc77b822adb5562dcd7f068f6201a3217439843eccebfcabc3d31ad5?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative w-full max-w-[1030px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative gap-3.5 items-start mt-5 text-white max-md:flex-wrap max-md:mt-10">
                    <div className="flex flex-col grow shrink-0 self-end mt-6 basis-0 w-fit max-md:max-w-full">
                      <h2 className="text-5xl font-medium leading-10 capitalize max-md:max-w-full">
                        Pioneering the way forward to better decision making
                      </h2>
                      <p className="mt-5 text-lg max-md:max-w-full">
                        Expert knowledge and market insights into any industry in every corner of the world
                      </p>
                      <button className="justify-center self-center px-16 py-5 mt-20 text-2xl text-center rounded-lg shadow-xl max-md:px-6 max-md:mt-10">
                        Read More
                      </button>
                    </div>
                    <img
                      alt=""
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/11f3ec86e683c4a38112ead59bf5f4e853c6b458731e1c42b6e88a791b9364ee?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                      className="shrink-0 self-start aspect-[4.17] fill-gray-200 w-[76px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <img
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/04f7ec9cf316556b0b11a3c14c0ffd99ad05b56b0734d94884aec50a7bf740fd?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                    className="grow w-full aspect-[0.82] max-md:mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20 text-5xl font-medium leading-10 text-center text-indigo-500 capitalize max-md:mt-10 max-md:max-w-full">
          The Expertefy Advantage
        </section>
        <p className="mt-2.5 text-lg text-center text-indigo-900 w-[832px] max-md:max-w-full">
          At Expertefy, we merge deep market understanding with agile connectivity to provide an unrivaled expert network service. Here's what sets us apart:
        </p>
        <section className="mt-6 w-full max-w-[1119px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center py-px w-full text-lg leading-5 text-white bg-indigo-500 rounded-xl shadow-xl max-md:mt-8 max-md:max-w-full">
                <div className="overflow-hidden relative z-10 flex-col justify-center p-4 w-full min-h-[126px] max-md:max-w-full">
                  <img
                    alt="Precision-Paired Proficiency Background"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdea0391c55f19195ca1a70f0b5a844a19eedaa71ae4a04673facf4543003d52?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <span className="text-xl font-medium text-white">| Precision-Paired Proficiency</span><br />
                  <span className="leading-8">Every expert in our network is rigorously screened, ensuring</span>
                  <span className="leading-5">a perfect match to your precise industry and inquiry needs.</span><br /><br />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center py-px w-full text-lg leading-5 text-white bg-indigo-900 rounded-xl shadow-xl max-md:mt-8 max-md:max-w-full">
                <div className="overflow-hidden relative z-10 flex-col justify-center p-4 w-full min-h-[126px] max-md:max-w-full">
                  <img
                    alt="Accelerated Insight Access Background"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2348b25a06fc66b9a4395a883731ba25bcdbe611a75cbf76ecd4c75a13002e4a?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <span className="text-xl font-medium text-white">| Accelerated Insight Access</span><br />
                  <span className="leading-8">Our operations span time zones, promising swift delivery of</span>
                  <span className="leading-5">critical expertise so you can capitalize on evolving market dynamics instantly.</span><br /><br />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-6 w-full max-w-[1119px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center w-full text-lg leading-5 text-white bg-indigo-900 rounded-xl shadow-xl max-md:mt-8 max-md:max-w-full">
                <div className="overflow-hidden relative flex-col justify-center p-4 w-full min-h-[126px] max-md:max-w-full">
                  <img
                    alt="Comprehensive Coverage Background"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/561c6dabb37e387fb8308c4fe728f117d6614405f629545cac01fcbf82cb8594?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <span className="text-xl font-medium text-white">| Comprehensive Coverage</span><br />
                  <span className="leading-8">Whether it's expansive market landscapes or specific industry</span>
                  <span className="leading-5">niches, our scalable network delivers the right volume and caliber of expertise.</span><br /><br /><br />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center w-full text-lg leading-5 text-white uppercase bg-indigo-500 rounded-xl shadow-xl max-md:mt-8 max-md:max-w-full">
                <div className="overflow-hidden relative flex-col justify-center p-4 w-full min-h-[126px] max-md:max-w-full">
                  <img
                    alt="Unmatched Flexibility Background"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cea56ef44cc2cc0bac55db9753db7c655cfc624c86ded480a10febfc57886c34?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <span className="text-xl font-medium text-white">| Unmatched Flexibility</span><br />
                  <span className="leading-8">Your business is dynamic; so are we. <span className="leading-8 uppercase">Expertefy</span> offers</span>
                  <span className="leading-5">adaptable engagement models to seamlessly fit your evolving project and budgetary needs.</span><br /><br /><br />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-6 w-full max-w-[1119px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center w-full text-lg leading-5 text-white bg-indigo-500 rounded-xl shadow-xl max-md:mt-8 max-md:max-w-full">
                <div className="overflow-hidden relative flex-col justify-center p-4 w-full min-h-[126px] max-md:max-w-full">
                  <img
                    alt="Global Reach, Personal Touch Background"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c23112d2daef7c6c3d88d19d45cb619e4842354237db79237b6337e8b3942a9e?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <span className="text-xl font-medium text-white">| Global Reach, Personal Touch</span><br />
                  <span className="leading-8">Our extensive network spans continents, but our service is</span>
                  <span className="leading-5">intimately tailored to your unique challenges.</span><br /><br /><br />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center w-full text-lg leading-5 text-white uppercase bg-indigo-900 rounded-xl shadow-xl max-md:mt-8 max-md:max-w-full">
                <div className="overflow-hidden relative flex-col justify-center p-4 w-full min-h-[126px] max-md:max-w-full">
                  <img
                    alt="Trust Through Transparency Background"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ed6c4de6a4c00bae9d47d341a258bc74281d0ab2b7d630f7aeb21e7a30cd376?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <span className="text-xl font-medium text-white">| Trust Through Transparency</span><br />
                  <span className="leading-8">At </span><span className="leading-8 uppercase">Expertefy</span><span className="leading-8">, trust is paramount. Our commitment to clear,</span>
                  <span className="leading-5">honest communication ensures that our partnership is always aligned with your best interests.</span><br /><br />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Form />
      <aside className="flex flex-col mt-0 ml-40 max-w-full w-[574px] max-md:mt-0">
        <header className="text-5xl font-medium leading-10 text-center text-indigo-500 max-md:max-w-full">
          Expertise at Scale
        </header>
        <p className="mt-3.5 text-lg text-indigo-900 max-md:max-w-full">
          Connecting you to top-tier professionals across diverse industries. We facilitate strategic insights and foster enduring collaborations.
        </p>
        <section className="flex flex-col self-start mt-24 ml-14 font-medium text-center max-md:mt-10 max-md:ml-2.5">
          <h2 className="text-6xl leading-10 text-indigo-500 max-md:text-4xl">
            8000+
          </h2>
          <p className="mt-7 text-lg text-indigo-900 leading-[48.06px]">
            Engagements Completed
          </p>
        </section>
        <section className="flex z-10 flex-col self-end mt-0 mr-8 font-medium text-center max-md:mr-2.5">
          <h2 className="text-6xl leading-10 text-indigo-500 max-md:text-4xl">
            400K+
          </h2>
          <p className="self-center mt-3.5 text-lg text-indigo-900 leading-[48.06px]">
            Expert Panel
          </p>
        </section>
        <section className="flex z-10 flex-col self-end mt-28 mr-14 font-medium text-center max-md:mt-10 max-md:mr-2.5">
          <h2 className="text-6xl leading-10 text-indigo-500 max-md:text-4xl">
            120+
          </h2>
          <p className="mt-3 text-lg text-indigo-900 leading-[48.06px]">
            Industry Niches
          </p>
        </section>
        <section className="flex flex-col self-start mt-0 ml-24 font-medium text-center max-md:ml-2.5">
          <h2 className="self-center text-6xl leading-10 text-indigo-500 max-md:text-4xl">
            95%
          </h2>
          <p className="mt-3 text-lg text-indigo-900 leading-[48.06px]">
            Returning clients
          </p>
        </section>
      </aside>
    </div>
  );
}

export default Home;