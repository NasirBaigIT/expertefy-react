import * as React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ExpertForm() {
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [websiteUrl, setWebsiteUrl] = React.useState("");
  const [honorarium, setHonorarium] = React.useState("");
  const [experienceDetails, setExperienceDetails] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const expert = {
      email,
      phone,
      firstName,
      lastName,
      websiteUrl,
      honorarium,
      experienceDetails,
    };
    console.log(expert);
  };
  return (
    <section className="flex justify-center items-center py-8 mt-8 w-full max-md:px-5 max-md:mt-5 max-md:max-w-full">
      <form
        className="flex flex-col self-stretch px-5 w-auto"
        onSubmit={(e) => handleSubmit(e)}
      >
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
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="text-lg font-medium text-indigo-900 max-md:mt-8">
                Linkedin/Website
              </div>
              <input
                type="text"
                placeholder=""
                name="WebsiteUrl"
                className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded-md border-2 border-indigo-900 border-solid"
                required
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-8">
                <div className="text-lg font-medium text-indigo-900">
                  Honorarium for 1 hour call
                </div>
                <input
                  type="text"
                  placeholder=""
                  name="Honorarium"
                  className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded-md border-2 border-indigo-900 border-solid"
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
        <button className="justify-center items-center self-center px-4 py-3 my-8 max-w-full text-2xl font-medium text-center dark-button text-white whitespace-nowrap rounded-lg  shadow-xl w-[300px] max-md:px-5">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ExpertForm;
