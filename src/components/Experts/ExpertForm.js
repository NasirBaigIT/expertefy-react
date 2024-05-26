import * as React from "react";

function ExpertForm() {
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [websiteUrl, setWebsiteUrl] = React.useState("");
  const [honorarium, setHonorarium] = React.useState("");
  const [experienceDetails, setExperienceDetails] = React.useState("");
  const handleSubmit = () => {
    console.log({
      email,
      phone,
      firstName,
      lastName,
      websiteUrl,
      honorarium,
      experienceDetails,
    });
  };
  return (
    <section className="flex justify-center items-center py-8 mt-8 w-full max-md:px-5 max-md:mt-5 max-md:max-w-full">
      <div className="flex flex-col self-stretch px-5 w-auto">
        <div className="self-center text-5xl font-medium text-center text-indigo-500">
          Expert Registration
        </div>
        <div className="mt-8 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="text-lg font-medium text-indigo-900 max-md:mt-8">
                First Name
              </div>
              <input
                type="text"
                placeholder=""
                name="FirstName"
                className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded-md border-2 border-indigo-900 border-solid"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-8">
                <div className="text-lg font-medium text-indigo-900">
                  Last Name
                </div>
                <input
                  type="text"
                  placeholder=""
                  name="LastName"
                  className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded-md border-2 border-indigo-900 border-solid"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full max-md:max-w-full max-sm:mt-0">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-lg font-medium text-indigo-900 whitespace-nowrap max-md:mt-8">
                <div>Email</div>
                <input
                  type="email"
                  placeholder=""
                  name="Email"
                  className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded-md border-2 border-indigo-900 border-solid"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-lg font-medium text-indigo-900 max-md:mt-8">
                <div>Contact Number</div>
                <input
                  type="tel"
                  placeholder=""
                  name="ContactNumber"
                  className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded-md border-2 border-indigo-900 border-solid"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-lg font-medium text-indigo-900 whitespace-nowrap max-md:mt-8">
                <div className="max-md:mt-10">LinkedIn/Website</div>
                <input
                  type="url"
                  placeholder=""
                  name="Website"
                  className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded-md border-2 border-indigo-900 border-solid"
                  required
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-lg font-medium text-indigo-900 max-md:mt-8 max-sm:mt-0">
                <div className="max-md:mt-10">
                  <span className="">Honorarium for 1 hour call</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  name="Honorarium"
                  className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 mb-0 rounded-md border-2 border-indigo-900 border-solid"
                  required
                  value={honorarium}
                  onChange={(e) => setHonorarium(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full text-lg font-medium text-indigo-900 max-md:mt-10 max-md:max-w-full max-sm:mt-8">
          Details of Professional Experience
        </div>
        <textarea
          name="ExperienceDetails"
          className="box-border flex relative flex-col shrink-0 px-2.5 pt-2.5 pb-28 my-5 rounded-md border-2 border-indigo-900 border-solid"
          required
          value={experienceDetails}
          onChange={(e) => setExperienceDetails(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="justify-center items-center self-center px-4 py-3 mt-8 max-w-full text-2xl font-medium text-center bg-indigo-800 text-white whitespace-nowrap rounded-lg shadow-xl w-[300px] max-md:px-5"
        >
          Submit
        </button>
      </div>
    </section>
  );
}

export default ExpertForm;
