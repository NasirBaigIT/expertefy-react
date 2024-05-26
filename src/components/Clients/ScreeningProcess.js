import * as React from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import useCheckMobileScreen from "../../util/checkMobileHook";

function ScreeningProcess() {
  const [isMobile] = React.useState(useCheckMobileScreen());
  return (
    <div className="px-10 py-10 pb-20">
      <ArcherContainer
        strokeColor="#6369C4"
        lineStyle="angle"
        svgContainerStyle={{ zIndex: 1 }}
      >
        <div className="flex flex-col px-5">
          <div className="self-center text-5xl font-medium leading-10 text-center text-indigo-500 capitalize max-md:max-w-full">
            Our Screening Process
          </div>
          <div className="self-center mt-3.5 text-lg text-center text-indigo-900 capitalize max-md:max-w-full">
            we follow a structured process to ensure our clients receive
            accurate insights:
            <br />
          </div>
          <div className="mt-7 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <ArcherElement
                id="root"
                relations={
                  isMobile
                    ? []
                    : [
                        {
                          targetId: "element2",
                          targetAnchor: "left",
                          sourceAnchor: "right",
                        },
                      ]
                }
              >
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pb-11 mx-auto w-full bg-indigo-900 rounded-xl shadow-md max-md:mt-8">
                    <div className="flex gap-3.5 font-medium capitalize bg-white rounded-t-xl border-2 border-indigo-500 border-solid overflow-hidden">
                      <div className="justify-center px-3 py-3 text-5xl text-center text-white whitespace-nowrap bg-indigo-500 max-md:text-4xl">
                        1
                      </div>
                      <div className="flex-auto my-auto text-xl leading-5 text-indigo-500">
                        Screening Questions
                      </div>
                    </div>
                    <div className="mt-3.5 p-3 text-lg text-white">
                      Expertefy's teams always request screening questions from
                      clients upfront, which are then shared with potential
                      experts.
                    </div>
                  </div>
                </div>
              </ArcherElement>
              <ArcherElement
                id="element2"
                relations={
                  isMobile
                    ? []
                    : [
                        {
                          targetId: "element3",
                          targetAnchor: "left",
                          sourceAnchor: "right",
                        },
                      ]
                }
              >
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full ">
                  <div className="flex flex-col grow pb-20 mx-auto w-full bg-indigo-500 rounded-xl shadow-md max-md:mt-8">
                    <div className="flex gap-3.5 font-medium capitalize bg-white rounded-t-xl border-2 border-indigo-900 border-solid overflow-hidden">
                      <div className="justify-center px-3.5 py-3 text-5xl text-center text-white whitespace-nowrap bg-indigo-900 max-md:text-4xl">
                        2
                      </div>
                      <div className="flex-auto my-auto text-xl leading-5 text-indigo-500">
                        Running Screener
                      </div>
                    </div>
                    <div className="self-start mt-4 ml-3.5 p-3 text-lg text-white max-md:ml-2.5">
                      We conduct the screening process, ensuring experts provide
                      thorough, relevant answers.
                    </div>
                  </div>
                </div>
              </ArcherElement>
              <ArcherElement
                id="element3"
                relations={
                  isMobile
                    ? []
                    : [
                        {
                          targetId: "element4",
                          targetAnchor: "top",
                          sourceAnchor: "bottom",
                        },
                      ]
                }
              >
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full ">
                  <div className="flex flex-col grow pb-11 mx-auto w-full bg-indigo-900 rounded-xl shadow-md max-md:mt-8">
                    <div className="flex gap-3.5 font-medium capitalize bg-white rounded-t-xl border-2 border-indigo-500 border-solid overflow-hidden">
                      <div className="justify-center px-3 py-3 text-5xl text-center text-white whitespace-nowrap bg-indigo-500 max-md:text-4xl">
                        3
                      </div>
                      <div className="flex-auto my-auto text-xl leading-5 text-indigo-500">
                        Sharing Expert Responses
                      </div>
                    </div>
                    <div className="mt-3.5 text-lg text-white p-3">
                      Expertefy shares the experts' screening responses with
                      clients, allowing them to assess the relevance of each
                      expert's background to the specific topics.
                    </div>
                  </div>
                </div>
              </ArcherElement>
            </div>
          </div>

          <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <ArcherElement
                id="element4"
                relations={
                  isMobile
                    ? []
                    : [
                        {
                          targetId: "element5",
                          targetAnchor: "left",
                          sourceAnchor: "right",
                        },
                      ]
                }
              >
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full ">
                  <div className="flex flex-col grow pb-12 mx-auto w-full bg-indigo-500 rounded-xl shadow-md max-md:mt-8">
                    <div className="flex gap-3.5 font-medium capitalize bg-white rounded-t-xl border-2 border-indigo-900 border-solid overflow-hidden">
                      <div className="justify-center px-3 py-3 text-5xl text-center text-white whitespace-nowrap bg-indigo-900 max-md:text-4xl">
                        4
                      </div>
                      <div className="flex-auto my-auto text-xl leading-5 text-indigo-500">
                        Decision on Profile Selection
                      </div>
                    </div>
                    <div className="mt-4 text-lg text-white p-3">
                      The client's review of the expert's background and
                      screening responses helps them make the final decision on
                      which expert to engage for an interview.
                    </div>
                  </div>
                </div>
              </ArcherElement>
              <ArcherElement
                id="element5"
                relations={
                  isMobile
                    ? []
                    : [
                        {
                          targetId: "element6",
                          targetAnchor: "left",
                          sourceAnchor: "right",
                        },
                      ]
                }
              >
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full ">
                  <div className="flex flex-col grow pb-6 mx-auto w-full bg-indigo-900 rounded-xl shadow-md max-md:mt-8">
                    <div className="flex gap-3.5 font-medium capitalize bg-white rounded-t-xl border-2 border-indigo-500 border-solid overflow-hidden">
                      <div className="justify-center px-3 py-3 text-5xl text-center text-white whitespace-nowrap bg-indigo-500 max-md:text-4xl">
                        5
                      </div>
                      <div className="flex-auto my-auto text-xl leading-5 text-indigo-500">
                        Pre-Read Sharing
                      </div>
                    </div>
                    <div className="self-start mt-4 ml-3.5 text-lg text-white max-md:ml-2.5 p-3">
                      If applicable, Expertefy shares any pre-read materials
                      with the selected expert, enabling them to prepare
                      thoroughly for the consultation and ensuring both parties
                      can make the most of the time together.
                    </div>
                  </div>
                </div>
              </ArcherElement>
              <ArcherElement id="element6">
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full ">
                  <div className="flex flex-col grow pb-6 mx-auto w-full bg-indigo-500 rounded-xl shadow-md max-md:mt-8">
                    <div className="flex gap-3.5 font-medium capitalize bg-white rounded-t-xl border-2 border-indigo-900 border-solid overflow-hidden">
                      <div className="justify-center px-3 py-3 text-5xl text-center text-white whitespace-nowrap bg-indigo-900 max-md:text-4xl">
                        6
                      </div>
                      <div className="flex-auto my-auto text-xl leading-5 text-indigo-500">
                        First 10-mintue Rule
                      </div>
                    </div>
                    <div className="mt-4 text-lg text-white p-3">
                      During the first ten minutes of the consultation, clients
                      can terminate the session, at no cost, if they determine
                      the expert is not a good fit for their specific needs.
                      Expertefy will then find a replacement.
                    </div>
                  </div>
                </div>
              </ArcherElement>
            </div>
          </div>
        </div>
      </ArcherContainer>
    </div>
  );
}

export default ScreeningProcess;
