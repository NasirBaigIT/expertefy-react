import * as React from "react";

import logo from "../../../assets/form/Logo.png";
import PhoneInput from "react-phone-input-2";

const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [projectScope, setProjectScope] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const homeForm = { name, email, phone, projectScope };
    console.log(homeForm);
  };
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

              <div className="lg:form-left-section lg:ml-auto">
                <div className="flex justify-between mt-24 max-md:flex-col max-md:mt-10">
                  <section className="flex flex-col font-medium text-center max-md:ml-2.5 max-md:my-5">
                    <h2 className="text-6xl leading-10 text-indigo-500 max-md:text-4xl">
                      8000+
                    </h2>
                    <p className="mt-7 text-lg text-indigo-900 leading-[48.06px]">
                      Engagements Completed
                    </p>
                  </section>
                  <section className="flex flex-col font-medium text-center max-md:ml-2.5 max-md:my-5 lg:ml-24">
                    <h2 className="text-6xl leading-10 text-indigo-500 max-md:text-4xl">
                      120+
                    </h2>
                    <p className="mt-7 text-lg text-indigo-900 leading-[48.06px]">
                      Industry Niches
                    </p>
                  </section>
                </div>

                <div className="flex justify-between mt-28 max-md:flex-col max-md:mt-2">
                  <section className="flex flex-col font-medium text-center max-md:mr-2.5 max-md:my-5">
                    <h2 className="text-6xl leading-10 text-indigo-500 max-md:text-4xl">
                      400K+
                    </h2>
                    <p className="self-center mt-3.5 text-lg text-indigo-900 leading-[48.06px]">
                      Expert Panel
                    </p>
                  </section>
                  <section className="flex flex-col font-medium text-center max-md:mr-2.5 max-md:my-5">
                    <h2 className="self-center text-6xl leading-10 text-indigo-500 max-md:text-4xl">
                      95%
                    </h2>
                    <p className="mt-3 text-lg text-indigo-900 leading-[48.06px]">
                      Returning clients
                    </p>
                  </section>
                </div>
              </div>
            </aside>

            <form
              className="flex flex-col w-1/2 self-end pb-8 ml-40 max-w-full bg-white rounded-t-xl shadow-xl max-md:w-full max-md:mt-10 max-md:ml-2.5"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="flex gap-2.5 px-4 py-2 text-xl font-semibold text-white whitespace-nowrap card-header rounded-t-xl shadow-sm max-md:flex-wrap">
                <img
                  alt="Expertefy Logo"
                  src={logo}
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
                  className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded-md border-2 border-indigo-900 border-solid"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded-md border-2 border-indigo-900 border-solid"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <PhoneInput
                  className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded-md border-2 border-indigo-900 border-solid"
                  inputStyle={{ borderStyle: "none", width: "inherit" }}
                  dropdownStyle={{
                    borderStyle: "solid",
                    border: 1,
                    borderColor: "#6369C4",
                    backgroundColor: "#fff",
                  }}
                  buttonStyle={{
                    borderStyle: "none",
                    border: 0,
                    backgroundColor: "#fff",
                  }}
                  required
                  country={"us"}
                  value={phone}
                  onChange={(ph) => setPhone(ph)}
                />

                <label htmlFor="projectScope" className="sr-only">
                  Let us know the project scope
                </label>
                <textarea
                  id="projectScope"
                  className="box-border flex relative flex-col shrink-0 px-2.5 pt-2.5 pb-28 my-5 rounded-md border-2 border-indigo-900 border-solid"
                  placeholder="Let us know the project scope"
                  aria-label="Project Scope"
                  value={projectScope}
                  onChange={(e) => setProjectScope(e.target.value)}
                  required
                ></textarea>
                <div className="shrink-0 mt-16 h-0.5 bg-zinc-400 max-md:mt-10"></div>

                <button className="justify-center dark-button items-center self-center px-16 py-5 mt-7 max-w-full text-2xl text-center text-white rounded-lg shadow-xl w-[323px] max-md:px-5">
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
