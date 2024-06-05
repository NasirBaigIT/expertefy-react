import * as React from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import useCheckMobileScreen from "../../util/checkMobileHook";

function ExpertEngagementProcess() {
  const [isMobile] = React.useState(useCheckMobileScreen());
  return (
    <div className="px-10 pt-10">
      <ArcherContainer
        strokeColor="#6369C4"
        lineStyle="angle"
        svgContainerStyle={{ zIndex: 1 }}
      >
        <div className="flex flex-col px-5">
          <div className="self-center text-5xl font-medium leading-10 text-center text-indigo-500 capitalize max-md:max-w-full">
            Expert Engagement Process
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
                  <div className="flex flex-col grow pb-11 mx-auto w-full bg-dark-indigo rounded-xl shadow-md max-md:mt-8">
                    <div className="flex gap-3.5 font-medium capitalize bg-white rounded-t-xl border-2 border-indigo-500 border-solid overflow-hidden">
                      <div className="justify-center px-3 py-3 text-5xl text-center text-white whitespace-nowrap bg-light-indigo max-md:text-4xl">
                        1
                      </div>
                      <div className="flex-auto my-auto text-xl leading-5 text-indigo-500">
                        Expert Engagement
                      </div>
                    </div>
                    <div className="mt-3.5 p-3 text-lg text-white">
                      Expertefy initiates contact with a selected expert, deemed
                      an ideal fit for the project, to confirm interest and
                      brief them on the topic of discussion, ensuring alignment
                      with the project's goals.
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
                  <div className="flex flex-col grow pb-20 mx-auto w-full bg-light-indigo rounded-xl shadow-md max-md:mt-8">
                    <div className="flex gap-3.5 font-medium capitalize bg-white rounded-t-xl border-2 border-indigo-900 border-solid overflow-hidden">
                      <div className="justify-center px-3.5 py-3 text-5xl text-center text-white whitespace-nowrap bg-dark-indigo max-md:text-4xl">
                        2
                      </div>
                      <div className="flex-auto my-auto text-xl leading-5 text-indigo-500">
                        Expert Profile Review
                      </div>
                    </div>
                    <div className="self-start mt-4 ml-3.5 p-3 text-lg text-white max-md:ml-2.5">
                      Following the expert’s agreement on the project scope,
                      Expertefy presents their profile to the client for
                      consideration, ensuring a transparent and informed
                      selection process.
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
                  <div className="flex flex-col grow pb-11 mx-auto w-full bg-dark-indigo rounded-xl shadow-md max-md:mt-8">
                    <div className="flex gap-3.5 font-medium capitalize bg-white rounded-t-xl border-2 border-indigo-500 border-solid overflow-hidden">
                      <div className="justify-center px-3 py-3 text-5xl text-center text-white whitespace-nowrap bg-light-indigo max-md:text-4xl">
                        3
                      </div>
                      <div className="flex-auto my-auto text-xl leading-5 text-indigo-500">
                        Compliance Assurance
                      </div>
                    </div>
                    <div className="mt-3.5 text-lg text-white p-3">
                      Prior to the consultation, Expertefy completes all
                      necessary compliance checks with the expert to prevent any
                      conflicts of interest, upholding the integrity of the
                      engagement.
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
                  <div className="flex flex-col grow pb-12 mx-auto w-full bg-light-indigo rounded-xl shadow-md max-md:mt-8">
                    <div className="flex gap-3.5 font-medium capitalize bg-white rounded-t-xl border-2 border-indigo-900 border-solid overflow-hidden">
                      <div className="justify-center px-3 py-3 text-5xl text-center text-white whitespace-nowrap bg-dark-indigo max-md:text-4xl">
                        4
                      </div>
                      <div className="flex-auto my-auto text-xl leading-5 text-indigo-500">
                        Consultation Coordination
                      </div>
                    </div>
                    <div className="mt-4 text-lg text-white p-3">
                      Expertefy facilitates the scheduling of the consultation
                      between the expert and the client using platforms such as
                      MS Teams or Zoom, providing a seamless connection
                      experience.
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
                  <div className="flex flex-col grow pb-6 mx-auto w-full bg-dark-indigo rounded-xl shadow-md max-md:mt-8">
                    <div className="flex gap-3.5 font-medium capitalize bg-white rounded-t-xl border-2 border-indigo-500 border-solid overflow-hidden">
                      <div className="justify-center px-3 py-3 text-5xl text-center text-white whitespace-nowrap bg-light-indigo max-md:text-4xl">
                        5
                      </div>
                      <div className="flex-auto my-auto text-xl leading-5 text-indigo-500">
                        Payment Processing
                      </div>
                    </div>
                    <div className="self-start mt-4 ml-3.5 text-lg text-white max-md:ml-2.5 p-3">
                      Our accounting team connects with the expert
                      post-consultation to initiate the payment process,
                      recognizing the value of timely and accurate financial
                      compensation.
                    </div>
                  </div>
                </div>
              </ArcherElement>
              <ArcherElement id="element6">
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full ">
                  <div className="flex flex-col grow pb-6 mx-auto w-full bg-light-indigo rounded-xl shadow-md max-md:mt-8">
                    <div className="flex gap-3.5 font-medium capitalize bg-white rounded-t-xl border-2 border-indigo-900 border-solid overflow-hidden">
                      <div className="justify-center px-3 py-3 text-5xl text-center text-white whitespace-nowrap bg-dark-indigo max-md:text-4xl">
                        6
                      </div>
                      <div className="flex-auto my-auto text-xl leading-5 text-indigo-500">
                        Engagement Feedback
                      </div>
                    </div>
                    <div className="mt-4 text-lg text-white p-3">
                      Expertefy values feedback from our experts regarding the
                      consultation process and overall engagement, as continuous
                      improvement is a cornerstone of our service excellence.
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

export default ExpertEngagementProcess;
