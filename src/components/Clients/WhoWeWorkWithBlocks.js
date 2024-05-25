import * as React from "react";

import banner1 from "../../assets/clients/work-with-1.png";
import banner2 from "../../assets/clients/work-with-2.png";
import banner3 from "../../assets/clients/work-with-3.png";

function WhoWeWorkWithBlocks() {
  return (
    <section className="flex justify-center items-center py-8 w-full max-md:px-5 max-md:mt-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1120px] max-md:max-w-full">
        <div className="self-center text-5xl font-medium leading-10 text-center text-indigo-500 capitalize">
          Who We Work With
        </div>
        {/* First banner */}
        <div className="flex flex-col flex-wrap justify-center content-start items-center p-5 mt-7  bg-indigo-900 rounded-xl shadow-xl w-full max-w-[1120px] max-md:max-w-full">
          <div className="self-stretch max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="text-lg text-white max-md:mt-2 max-md:max-w-full">
                  <span className="text-3xl font-medium capitalize">
                    Strategy Consulting
                  </span>
                  <br />
                  <br />
                  We empowers clients with deep expertise for critical strategic
                  decisions. We offer comprehensive services:
                  <ul className="list-disc px-5 leading-6">
                    <li>
                      Competitive <strong>benchmarking</strong> to identify
                      improvement areas and assess market positions.
                    </li>
                    <li>
                      <strong>Market entry</strong> strategies for successful
                      launches and expansions.
                    </li>
                    <li>
                      Thorough <strong>due diligence</strong> for evaluating
                      potential investments and partnerships.
                    </li>
                    <li>
                      Mergers and acquisitions support, ensuring seamless
                      integrations and value creation.
                    </li>
                  </ul>
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
        </div>
        {/* Second banner */}
        <div className="flex flex-col flex-wrap justify-center content-start items-center p-5 mt-7  bg-indigo-900 rounded-xl shadow-xl w-full max-w-[1120px] max-md:max-w-full">
          <div className="self-stretch max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="text-lg text-white max-md:mt-2 max-md:max-w-full">
                  <span className="text-3xl font-medium capitalize">
                    Life Sciences & Healthcare
                  </span>
                  <br />
                  <br />
                  For life sciences and healthcare, clients leverage our
                  specialized services leveraging our expert panel insights
                  <strong> payers, KOLs, clinicians, academics</strong>, and
                  other experts:
                  <ul className="list-disc px-5 leading-6">
                    <li>
                      <strong>Market access</strong>, pricing, reimbursement,
                      and patient life cycle analyses.
                    </li>
                    <li>
                      <strong>Therapeutic area</strong> and technology expertise
                      guiding product development for maximized value.
                    </li>
                    <li>
                      Commercialization support including company/portfolio
                      strategies and value-based pricing.
                    </li>
                  </ul>
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
        </div>
        {/* Third banner */}
        <div className="flex flex-col flex-wrap justify-center content-start items-center p-5 mt-7  bg-indigo-900 rounded-xl shadow-xl w-full max-w-[1120px] max-md:max-w-full">
          <div className="self-stretch max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="text-lg text-white max-md:mt-2 max-md:max-w-full">
                  <span className="text-3xl font-medium capitalize">
                    Investment Houses
                  </span>
                  <br />
                  <br />
                  For investment firms, we offer tailored services to enhance
                  investment strategies:
                  <ul className="list-disc px-5 leading-6">
                    <li>
                      Comprehensive <strong>commercial due diligence</strong>{" "}
                      and <strong>M&A advisory</strong>.
                    </li>
                    <li>
                      Unique primary research supporting{" "}
                      <strong>deal origination</strong> and{" "}
                      <strong>de-risking</strong> investments.
                    </li>
                  </ul>
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
        </div>
      </div>
    </section>
  );
}

export default WhoWeWorkWithBlocks;
