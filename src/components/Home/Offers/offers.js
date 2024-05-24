import * as React from "react";
import image1 from "../../../assets/offers/1.png";
import image2 from "../../../assets/offers/2.png";
import image3 from "../../../assets/offers/3.png";
import image4 from "../../../assets/offers/4.png";

const Offers = () => {
  return (
    <section className="flex justify-center items-center px-16 py-16 mt-52 w-full bg-indigo-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center w-full max-w-[1120px] max-md:max-w-full">
        <h1 className="text-5xl font-medium leading-10 text-center text-white capitalize">
          What we offer
        </h1>
        <p className="mt-4 text-lg text-center text-white max-md:max-w-full">
          Our network prioritizes quality and depth, serving as your gateway to
          unparalleled expertise. Utilize insights from our network to make
          informed decisions, gain a competitive advantage, and stay abreast of
          industry trends.
        </p>
        <div className="flex-wrap justify-center content-start mt-16 max-w-full w-[816px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 text-lg font-medium text-center text-white capitalize max-md:mt-6">
                <img alt="" src={image1} className="self-center" />
                <h2 className="mt-4">Access to top-tier expertise</h2>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 text-lg font-medium text-center text-white capitalize max-md:mt-6">
                <img alt="" src={image2} className="self-center" />
                <h2 className="mt-4">Customized & targeted research</h2>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 text-lg font-medium text-center text-white capitalize max-md:mt-6">
                <img alt="" src={image3} className="self-center" />
                <h2 className="mt-4">
                  list of available experts for review in 24h
                </h2>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 text-lg font-medium text-center text-white capitalize max-md:mt-6">
                <img alt="" src={image4} className="self-center" />
                <h2 className="mt-4">Confidentiality & anonymity</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-5 max-md:mt-8">
                <div className="flex flex-col bg-white rounded-none shadow-xl">
                  <div className="z-10 justify-center items-start px-5 py-3.5 -mt-5 text-xl font-medium text-white whitespace-nowrap bg-indigo-500 rounded-t-xl shadow-sm">
                    Interviews
                  </div>
                  <p className="mt-4 text-lg text-indigo-900 px-5">
                    Engage with subject matter experts across all industries.
                    <ul>
                      <li>•Virtual and face-to-face meetings</li>
                      <li>• One-on-one session or a group setting</li>
                      <li>• Free audio recording & transcript</li>
                    </ul>
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
                  <div className="z-10 justify-center items-start px-5 py-3 -mt-5 text-xl font-medium text-white bg-indigo-500 rounded-t-xl shadow-sm max-md:pr-5">
                    Expertefy-led Calls
                  </div>
                  <p className="mt-4 text-lg text-indigo-900 px-5">
                    Expertefy can moderate interviews on your behalf. Our
                    skilled moderators ensure that your discussions are focused
                    and effective, covering critical topics of interest.
                    <ul>
                      <li>• Audio recording and manual transcript</li>
                    </ul>
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
                  <div className="z-10 justify-center items-start px-5 py-3 -mt-5 text-xl font-medium text-white bg-indigo-500 rounded-t-xl shadow-sm max-md:pr-5">
                    B2B Survey
                  </div>
                  <p className="mt-4 text-lg text-indigo-900 px-5">
                    We offer a robust B2B survey service that develops and
                    distributes custom surveys to targeted respondent pools,
                    collecting high-quality data tailored to your specific
                    research needs.
                    <ul>
                      <li>• Qualitative and quantitative</li>
                      <li>• Programming & hosting</li>
                    </ul>
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
  );
};

export default Offers;
