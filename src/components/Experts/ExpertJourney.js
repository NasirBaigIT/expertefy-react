import * as React from "react";
import expertJourney from "../../assets/experts/expert-journey.png";

function ExpertJourney() {
  return (
    <div className="flex justify-center items-center px-16 py-10 text-white bg-indigo-900 max-md:px-5">
      <div className="flex gap-4 max-md:flex-wrap w-1/2">
        <div className="flex flex-col self-center text-6xl leading-10 text-center capitalize max-md:hidden max-md:text-4xl max-md:leading-9">
          <div className="max-md:text-4xl max-md:leading-9 mb-4 mt-6">
            <span className="text-lg text-indigo-500">STEP</span>
            <br />
            <span className="text-white">1</span>
          </div>
          <div className="mt-36 pt-8 max-md:text-4xl">
            <span className="text-lg text-indigo-500">STEP</span>
            <br />
            <span className="text-white">3</span>
          </div>
          <div className="mt-36 pt-12 max-md:text-4xl">
            <span className="text-lg text-indigo-500">STEP</span>
            <br />
            <span className="text-white">5</span>
          </div>
        </div>
        <div className="flex flex-col font-medium max-md:max-w-full">
          <div className="self-center text-5xl leading-10 text-center capitalize">
            Expert Journey
          </div>
          <div className="flex overflow-hidden relative flex-col py-9 mt-7 w-full text-xl min-h-[479px] max-md:max-w-xs">
            <img
              loading="lazy"
              src={expertJourney}
              className="object-fill absolute inset-0 size-full"
            />
            <div className="flex relative flex-col px-7 max-md:pl-5 max-md:max-w-full pt-4">
              <div className="leading-[229%] max-md:max-w-full">
                Join our global network{" "}
                <a href="www.google.com" style={{ textDecoration: "none" }}>
                  (link to join){" "}
                </a>
              </div>
              <div className="mt-12 pt-10 text-right max-md:mt-10">
                Get an opportunity to participate in the relevant projects
                whenever available.{" "}
              </div>
            </div>
            <div className="flex relative flex-col px-7 mt-20 leading-[229%] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                Accept or reject the consultation opportunity.
              </div>
              <div className="mt-16 text-right max-md:mt-10 max-md:max-w-full">
                Once accepted, share your knowledge with leading consulting,
                investment, and corporate firms.{" "}
              </div>
              <div className="mt-16 max-md:mt-10 max-md:max-w-full mb-4">
                Get paid and share your feedback.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-auto text-6xl leading-10 text-center capitalize max-md:text-4xl max-md:leading-9">
          <div className="max-md:text-4xl pt-8 max-md:leading-9">
            <span className="text-lg text-indigo-500">STEP</span>
            <br />
            <span className="text-white">2</span>
          </div>
          <div className="mt-36 pt-12 max-md:mt-10 max-md:text-4xl max-md:leading-9">
            <span className="text-lg text-indigo-500">STEP</span>
            <br />
            <span className="text-white">4</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertJourney;
