import * as React from "react";

function Testimonials() {
  return (
    <div className="flex flex-col items-center px-5">
      <div className="text-base leading-4 text-center text-indigo-500">
        <span className="text-lg text-indigo-900">TESTIMONIALS</span>
        <br />
        <span className="text-5xl font-medium text-indigo-500">
          What Our Clients Say
        </span>
        <br />
      </div>
      <div className="self-stretch mt-6 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center pb-4 w-full bg-white rounded-xl shadow-xl max-md:mt-8">
              <div className="flex justify-center items-center px-16 py-3.5 bg-indigo-500 rounded-xl shadow-sm max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f44a74b7af4fb6153ecd7452e7c9e130c861952d54bc67831823e9057bd3f1d8?"
                  className="max-w-full aspect-[7.14] w-[152px]"
                />
              </div>
              <div className="mx-4 mt-2 text-lg leading-5 text-indigo-900 uppercase max-md:mx-2.5">
                <span className="text-xl font-medium text-indigo-500">
                  Global Strategy Consultancy Partner
                </span>
                <br />
                <span className="text-5xl leading-10 text-indigo-900 lowercase">
                  “
                </span>
                <br />
                <span className="uppercase">Expertefy</span> has been a
                game-changer for our firm. Their swift access to industry
                expertise has saved us time and resources, allowing us to serve
                our clients more effectively.
                <br />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center pb-4 w-full bg-white rounded-xl shadow-xl max-md:mt-8">
              <div className="flex justify-center items-center px-16 py-3.5 bg-indigo-500 rounded-xl shadow-sm max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8205f9d39d4b57d04ac9e548e206e5e831553646e7689a7ba9e8d818b1577e6?"
                  className="max-w-full aspect-[7.14] w-[152px]"
                />
              </div>
              <div className="mx-4 mt-2 text-lg leading-5 text-indigo-900 uppercase max-md:mx-2.5">
                <span className="text-xl font-medium text-indigo-500">
                  US Life Science Consultancy Principal
                </span>
                <br />
                <span className="text-5xl text-indigo-900 lowercase leading-[56px]">
                  “
                </span>{" "}
                <br />
                We've been impressed with{" "}
                <span className="uppercase">Expertefy</span>'s affordability and
                reliability. Their experts are available around the clock,
                ensuring we get the insights we need when we need them.{" "}
                <span className="uppercase">Expertefy</span> has become an
                integral part of our process. Their commitment to
                confidentiality gives us peace of mind when dealing with
                sensitive projects.
                <br />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center pb-4 w-full bg-white rounded-xl shadow-xl max-md:mt-8">
              <div className="flex justify-center items-center px-16 py-3.5 bg-indigo-500 rounded-xl shadow-sm max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/87106f729dc7e8e0cc2d0f094191f7aee7273d1b42f3cd2a220f2e8de8f101b0?"
                  className="max-w-full aspect-[7.14] w-[152px]"
                />
              </div>
              <div className="mx-4 mt-2 text-lg leading-5 text-indigo-900 lowercase max-md:mx-2.5">
                <span className="text-xl font-medium text-indigo-500">
                  UK Strategy Consultancy Managing Director
                </span>
                <br />
                <span className="text-5xl text-indigo-900 lowercase leading-[56px]">
                  “
                </span>{" "}
                <br />
                Their flexibility and responsiveness have allowed us to adapt to
                our clients' evolving needs quickly. Working with them has been
                a seamless experience.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-6">
        <div className="shrink-0 w-40 h-1 bg-indigo-500 rounded-3xl" />
        <div className="shrink-0 w-40 h-1 rounded-3xl bg-indigo-900 bg-opacity-40" />
      </div>
      <div className="justify-center items-center px-16 py-6 mt-12 bg-indigo-500 max-w-full text-5xl text-center text-white rounded-lg shadow-xl w-[398px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
        Get Started!
      </div>
    </div>
  );
}

export default Testimonials;
