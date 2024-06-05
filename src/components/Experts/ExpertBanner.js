import * as React from "react";

function ExpertBanner(props) {
  return (
    <section className="flex justify-center items-center py-8 w-full max-md:px-5 max-md:mt-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1120px] max-md:max-w-full">
        <div className="self-center text-5xl font-medium leading-10 text-center text-indigo-500 capitalize">
          {props.banner.sectionTitle}
        </div>
        {/* First banner */}
        <div className="flex flex-col flex-wrap justify-center content-start items-center p-5 mt-7  bg-dark-indigo rounded-xl shadow-xl w-full max-w-[1120px] max-md:max-w-full">
          <div className="self-stretch max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="text-lg text-white max-md:mt-2 max-md:max-w-full">
                  <span className="text-3xl font-medium capitalize">
                    {props.banner.title}
                  </span>
                  <br />
                  <br />
                  {props.banner.description}
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={props.banner.imageSrc}
                  className="grow w-full aspect-[1.85] max-md:mt-2 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertBanner;
