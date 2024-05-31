import * as React from "react";

import banner1 from "../../assets/services/banner1.png";
import banner2 from "../../assets/services/banner2.png";
import banner3 from "../../assets/services/banner3.png";

import banner1Icon1 from "../../assets/services/banner1/1.png";
import banner1Icon2 from "../../assets/services/banner1/2.png";
import banner1Icon3 from "../../assets/services/banner1/3.png";
import banner1Icon4 from "../../assets/services/banner1/4.png";
import banner1Icon5 from "../../assets/services/banner1/5.png";
import banner1Icon6 from "../../assets/services/banner1/6.png";
import banner1Icon7 from "../../assets/services/banner1/7.png";
import banner1Icon8 from "../../assets/services/banner1/8.png";
import banner1Icon9 from "../../assets/services/banner1/9.png";

import banner2Incon1 from "../../assets/services/banner2/1.png";
import banner2Incon2 from "../../assets/services/banner2/2.png";
import banner2Incon3 from "../../assets/services/banner2/3.png";
import banner2Incon4 from "../../assets/services/banner2/4.png";
import banner2Incon5 from "../../assets/services/banner2/5.png";
import banner2Incon6 from "../../assets/services/banner2/6.png";

import banner3Icon1 from "../../assets/services/banner3/1.png";
import banner3Icon2 from "../../assets/services/banner3/2.png";
import banner3Icon3 from "../../assets/services/banner3/3.png";
import banner3Icon4 from "../../assets/services/banner3/4.png";

function ServiceBlocks() {
  return (
    <section className="flex justify-center items-center py-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1120px] max-md:max-w-full">
        {/* First banner */}
        <div className="flex flex-col flex-wrap justify-center content-start items-center p-5 mt-7  bg-indigo-900 rounded-xl shadow-xl w-full max-w-[1120px] max-md:max-w-full">
          <div className="self-stretch max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="text-lg text-white capitalize max-md:mt-2 max-md:max-w-full">
                  <span className="text-3xl font-medium capitalize">
                    Expert Interviews
                  </span>
                  <br />
                  <br />
                  In today’s fast-paced market, reliance on static published
                  sources can leave you a step behind. Expertefy offers a
                  dynamic solution: direct access to industry experts within
                  24-48 hours, ensuring you receive the most current and
                  actionable insights. Cut through the clutter of market noise
                  with ease. Our suite of services includes comprehensive online
                  interviews and face-to-face meetings designed to provide you
                  with the depth of understanding required to make informed
                  decisions swiftly.
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={banner1}
                  className="grow w-full aspect-[1.85] max-md:mt-2 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 text-3xl font-medium text-white capitalize">
            Our offering includes
          </div>
          <div className="flex flex-col flex-wrap justify-center content-start px-3.5 mt-4 w-full max-w-[1013px] max-md:max-w-full">
            <div className="flex gap-3 text-lg font-medium text-center text-white max-md:flex-wrap">
              <div className="flex flex-col px-2">
                <img
                  loading="lazy"
                  src={banner1Icon1}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">Virtual and face-to-face meetings</div>
              </div>
              <div className="flex flex-col px-2">
                <img
                  loading="lazy"
                  src={banner1Icon2}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">
                  One-on-one session or a group setting
                </div>
              </div>
              <div className="flex flex-col px-2">
                <img
                  loading="lazy"
                  src={banner1Icon3}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">
                  {" "}
                  Free audio recording & AI transcript
                </div>
              </div>
              <div className="flex flex-col px-2">
                <img
                  loading="lazy"
                  src={banner1Icon4}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">Custom recruitment for each project</div>
              </div>
              <div className="flex flex-col px-2">
                <img
                  loading="lazy"
                  src={banner1Icon5}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">
                  {" "}
                  Boost pitch credibility: free list of experts
                </div>
              </div>
            </div>
            <div className="self-center mt-4 w-full max-w-[861px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-lg font-medium text-center text-white max-md:mt-3">
                    <img
                      loading="lazy"
                      src={banner1Icon6}
                      className="self-center aspect-square w-[84px]"
                    />
                    <div className="mt-4">
                      Post-consultation follow-ups at no extra charge
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow py-0.5 text-lg font-medium text-center text-white max-md:mt-3">
                    <img
                      loading="lazy"
                      src={banner1Icon7}
                      className="self-center aspect-square w-[84px]"
                    />
                    <div className="mt-4">
                      First 10 minutes free: end call if unsatisfied
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-2 py-px text-lg font-medium text-center text-white max-md:mt-3">
                    <img
                      loading="lazy"
                      src={banner1Icon8}
                      className="self-center aspect-square w-[84px]"
                    />
                    <div className="mt-4">
                      Pre-reads can be shared for expert prep
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col px-3 py-0.5 text-lg font-medium text-center text-white max-md:mt-3">
                    <img
                      loading="lazy"
                      src={banner1Icon9}
                      className="self-center aspect-square w-[84px]"
                    />
                    <div className="mt-4">Flexible call durations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second banner */}
        <div className="flex flex-col flex-wrap justify-center content-start items-center p-5 mt-7  bg-indigo-900 rounded-xl shadow-xl w-full max-w-[1120px] max-md:max-w-full">
          <div className="self-stretch max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="text-lg text-white capitalize max-md:mt-2 max-md:max-w-full">
                  <span className="text-3xl font-medium capitalize">
                    Expertefy-led Calls
                  </span>
                  <br />
                  <br />
                  At Expertefy, we can moderate expert interviews on your
                  behalf. Following each interview, we provide you with manual
                  transcript and audio recording of the interview, capturing the
                  essence of the expert's insights and allowing you to revisit
                  the discussion at your convenience. This service is crafted to
                  save you time and resources and to help you tackle the
                  complexities of language and compliance.
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={banner2}
                  className="grow w-full aspect-[1.85] max-md:mt-2 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 text-3xl font-medium text-white capitalize">
            Our offering includes
          </div>
          <div className="flex flex-col flex-wrap justify-center content-start px-3.5 mt-4 w-full">
            <div className="flex gap-5 text-lg font-medium text-center text-white max-md:flex-wrap">
              <div className="flex flex-col px-2 max-md:px-10">
                <img
                  loading="lazy"
                  src={banner2Incon1}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">Interview content translation</div>
              </div>
              <div className="flex flex-col px-2">
                <img
                  loading="lazy"
                  src={banner2Incon2}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">
                  One-on-one session or a group setting
                </div>
              </div>
              <div className="flex flex-col px-2">
                <img
                  loading="lazy"
                  src={banner2Incon3}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">
                  {" "}
                  Audio recording & manual transcript{" "}
                </div>
              </div>
              <div className="flex flex-col px-2">
                <img
                  loading="lazy"
                  src={banner2Incon4}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">Custom recruitment for each project</div>
              </div>
              <div className="flex flex-col px-2">
                <img
                  loading="lazy"
                  src={banner2Incon5}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">
                  {" "}
                  Post-consultation follow-ups at no extra charge
                </div>
              </div>
              <div className="flex flex-col px-2 max-md:px-16">
                <img
                  loading="lazy"
                  src={banner2Incon6}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4"> Flexible call durations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Third banner */}
        <div className="flex flex-col flex-wrap justify-center content-start items-center p-5 mt-7  bg-indigo-900 rounded-xl shadow-xl w-full max-w-[1120px] max-md:max-w-full">
          <div className="self-stretch max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="text-lg text-white capitalize max-md:mt-2 max-md:max-w-full">
                  <span className="text-3xl font-medium capitalize">
                    Expertefy-led Calls
                  </span>
                  <br />
                  <br />
                  At Expertefy, we can moderate expert interviews on your
                  behalf. Following each interview, we provide you with manual
                  transcript and audio recording of the interview, capturing the
                  essence of the expert's insights and allowing you to revisit
                  the discussion at your convenience. This service is crafted to
                  save you time and resources and to help you tackle the
                  complexities of language and compliance.
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={banner3}
                  className="grow w-full aspect-[1.85] max-md:mt-2 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 text-3xl font-medium text-white capitalize">
            Our offering includes
          </div>
          <div className="flex flex-col flex-wrap justify-center content-start px-3.5 mt-4 w-full max-w-[1013px] max-md:max-w-full">
            <div className="flex gap-3 text-lg font-medium text-center text-white max-md:flex-wrap">
              <div className="flex flex-col px-2">
                <img
                  loading="lazy"
                  src={banner3Icon1}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">Virtual and face-to-face meetings</div>
              </div>
              <div className="flex flex-col px-2">
                <img
                  loading="lazy"
                  src={banner3Icon2}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">
                  One-on-one session or a group setting
                </div>
              </div>
              <div className="flex flex-col px-2">
                <img
                  loading="lazy"
                  src={banner3Icon3}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">
                  {" "}
                  Free audio recording & AI transcript
                </div>
              </div>
              <div className="flex flex-col px-2">
                <img
                  loading="lazy"
                  src={banner3Icon4}
                  className="self-center aspect-square w-[84px]"
                />
                <div className="mt-4">Custom recruitment for each project</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceBlocks;
