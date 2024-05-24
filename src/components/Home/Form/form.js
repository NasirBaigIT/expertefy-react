import * as React from "react";
const Form = () => {
  return (
    <>
      <section className="flex justify-center items-center py-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1120px] max-md:max-w-full">
          <div className="flex w-full max-md:flex-col">
            <aside className="flex flex-col w-1/2 max-w-full max-md:w-full">
              <header className="text-5xl font-medium leading-10 text-indigo-500 max-md:max-w-full">
                Expertise at Scale
              </header>
              <p className="mt-3.5 text-lg text-indigo-900 max-md:max-w-full">
                Connecting you to top-tier professionals across diverse
                industries. We facilitate strategic insights and foster enduring
                collaborations.
              </p>

              <div className="flex justify-between mt-24 max-md:flex-col max-md:mt-10">
                <section className="flex flex-col font-medium text-center max-md:ml-2.5">
                  <h2 className="text-6xl leading-10 text-indigo-500 max-md:text-4xl">
                    8000+
                  </h2>
                  <p className="mt-7 text-lg text-indigo-900 leading-[48.06px]">
                    Engagements Completed
                  </p>
                </section>
                <section className="flex flex-col font-medium text-center max-md:mr-2.5">
                  <h2 className="text-6xl leading-10 text-indigo-500 max-md:text-4xl">
                    400K+
                  </h2>
                  <p className="self-center mt-3.5 text-lg text-indigo-900 leading-[48.06px]">
                    Expert Panel
                  </p>
                </section>
              </div>

              <div className="flex justify-between mt-28 max-md:flex-col max-md:mt-10">
                <section className="flex flex-col font-medium text-center max-md:ml-2.5">
                  <h2 className="text-6xl leading-10 text-indigo-500 max-md:text-4xl">
                    120+
                  </h2>
                  <p className="mt-3 text-lg text-indigo-900 leading-[48.06px]">
                    Industry Niches
                  </p>
                </section>
                <section className="flex flex-col font-medium text-center max-md:mr-2.5">
                  <h2 className="self-center text-6xl leading-10 text-indigo-500 max-md:text-4xl">
                    95%
                  </h2>
                  <p className="mt-3 text-lg text-indigo-900 leading-[48.06px]">
                    Returning clients
                  </p>
                </section>
              </div>
            </aside>

            <form className="flex flex-col w-1/2 self-end pb-8 ml-40 max-w-full bg-white rounded-t-xl shadow-xl max-md:w-full max-md:mt-10 max-md:ml-2.5">
              <div className="flex gap-2.5 px-4 py-2 text-xl font-semibold text-white whitespace-nowrap bg-indigo-500 rounded-t-xl shadow-sm max-md:flex-wrap">
                <img
                  alt="Expertefy Logo"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a25724f4a2a05714210bc241e851c799ec1daff6b6b5ed0b2c53da7430978dfd?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                  className="shrink-0 aspect-[1.03] w-[33px]"
                />
                <span className="flex-auto my-auto">EXPERTEFY</span>
              </div>
              <div className="flex flex-col px-5 mt-5 max-md:max-w-full">
                <h2 className="text-xl font-bold text-indigo-900 leading-[48.09px]">
                  Got a Project in Mind?
                </h2>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="self-start mt-7 ml-3.5 text-lg leading-[48.06px] text-zinc-400 max-md:ml-2.5"
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
                  className="self-start mt-9 ml-3.5 text-lg leading-[48.06px] text-zinc-400 max-md:ml-2.5"
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
                  className="self-start mt-6 ml-3.5 text-lg leading-[48.06px] text-zinc-400 max-md:ml-2.5"
                  placeholder="Contact Number"
                  aria-label="Contact Number"
                />
                <div className="flex gap-5 self-start mt-3.5 ml-3 max-md:ml-2.5">
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
                  className="mt-8 ml-4 text-lg leading-[48.06px] text-zinc-400 max-md:ml-2.5"
                  placeholder="Let us know the project scope"
                  aria-label="Project Scope"
                ></textarea>
                <div className="shrink-0 mt-16 h-0.5 bg-zinc-400 max-md:mt-10"></div>

                <button
                  type="submit"
                  className="justify-center bg-indigo-900 items-center self-center px-16 py-5 mt-7 max-w-full text-2xl text-center text-white rounded-lg shadow-xl w-[323px] max-md:px-5"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
