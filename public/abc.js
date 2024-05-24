import * as React from "react";

function ImageSection({ src, className }) {
  return <img loading="lazy" src={src} className={className} />;
}

function NavItem({ children }) {
  return (
    <div className="self-stretch my-auto">
      {children}
    </div>
  );
}

function ServiceItem({ src, text }) {
  return (
    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow py-0.5 text-lg font-medium text-center text-white capitalize max-md:mt-6">
        <img loading="lazy" src={src} className="self-center aspect-square w-[84px]" />
        <div className="mt-4">{text}</div>
      </div>
    </div>
  );
}

function OfferItem({ title, text, imgSrc }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow pt-5 max-md:mt-8">
        <div className="flex flex-col bg-white rounded-none shadow-xl">
          <div className="z-10 justify-center items-start px-5 py-3 -mt-5 text-xl font-medium text-white bg-indigo-500 rounded-xl shadow-sm max-md:pr-5">
            {title}
          </div>
          <div className="px-5 mt-4 text-lg text-indigo-900">{text}</div>
          <img loading="lazy" src={imgSrc} className="mt-4 w-full aspect-[2.04]" />
        </div>
      </div>
    </div>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <header className="flex flex-col pt-3.5 w-full bg-white shadow-lg max-md:max-w-full">
        <div className="flex gap-5 justify-between self-center w-full max-w-[1120px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-2 px-5 text-xl font-semibold text-indigo-500 whitespace-nowrap">
            <ImageSection src="https://cdn.builder.io/api/v1/image/assets/TEMP/7be36607d5c66be3bfb7649f4b238274d4d8c5f2273844d07bd86d5bbdf2a4f3?apiKey=3756b57bedc84c2cbd55485bb12ec63c&" className="shrink-0 aspect-[1.04] w-[57px]" />
            <div className="flex-auto my-auto">EXPERTEFY</div>
          </div>
          <nav className="flex gap-5 items-center px-5 my-auto text-lg text-indigo-900 max-md:flex-wrap">
            <NavItem>Services</NavItem>
            <NavItem>Clients</NavItem>
            <NavItem>Experts</NavItem>
            <NavItem>Success Stories</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
            <ImageSection src="https://cdn.builder.io/api/v1/image/assets/TEMP/210be32a2c0f8d8011df312d01652e6db5e2b5404c7b11f4a1be06802cc962d3?apiKey=3756b57bedc84c2cbd55485bb12ec63c&" className="shrink-0 self-stretch w-6 aspect-square" />
          </nav>
        </div>
        <div className="mt-3 w-full bg-indigo-500 shadow-xl min-h-[2px] max-md:max-w-full" />
      </header>
      <ImageSection src="https://cdn.builder.io/api/v1/image/assets/TEMP/0be351684f05368462fa1482b791375d598adeb0cb258ea88af126f514b82c8e?apiKey=3756b57bedc84c2cbd55485bb12ec63c&" className="self-center mt-28 w-full aspect-[2] max-w-[1120px] max-md:mt-10 max-md:max-w-full" />
      <section className="flex justify-center items-center px-16 py-16 mt-52 w-full bg-indigo-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-w-[1120px] max-md:max-w-full">
          <div className="text-5xl font-medium leading-10 text-center text-white capitalize">What we offer</div>
          <div className="mt-4 text-lg text-center text-white max-md:max-w-full">
            Our network prioritizes quality and depth, serving as your gateway to unparalleled expertise. Utilize insights from our network to make informed decisions, gain a competitive advantage, and stay abreast of industry trends.
          </div>
          <div className="flex-wrap justify-center content-start mt-16 max-w-full w-[816px] max-md:mt-10 max-sm:flex max-sm:flex-col">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <ImageSection src="https://cdn.builder.io/api/v1/image/assets/TEMP/5aec01d3cf937b94c80fa84ce9717bffb2c5121ec5b48f3fd7400d7c193edb44?apiKey=3756b57bedc84c2cbd55485bb12ec63c&" className="grow shrink-0 max-w-full aspect-[1.23] w-[170px] max-md:mt-6 max-sm:px-5 max-sm:mx-auto max-sm:w-[195px]" />
              <ServiceItem src="https://cdn.builder.io/api/v1/image/assets/TEMP/77fe8e72589c70ef1caaf5d78353c6201f0f4010eb86e4fb0fbfcfb908338d2e?apiKey=3756b57bedc84c2cbd55485bb12ec63c&" text="Customized & targeted research" />
              <ServiceItem src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e2bc11782b3219b3e8ba25b8826c42aa09ff561e4a585a42c52818d4129e5b1?apiKey=3756b57bedc84c2cbd55485bb12ec63c&" text="list of available experts for review in 24h" />
              <ImageSection src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8349cfbcb1598ef3be65454a5fcbf0d8ea20bf8c0f6e3fff7bd4aa3064b1cf6?apiKey=3756b57bedc84c2cbd55485bb12ec63c&" className="grow shrink-0 max-w-full aspect-[1.11] w-[154px] max-md:mt-6" />
            </div>
          </div>
          <div className="self-stretch mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <OfferItem title="Interviews" text="Engage with subject matter experts across all industries. • Virtual and face-to-face meetings • One-on-one session or a group setting • Free audio recording & transcript" imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a1841942f0768bcb9ef5a2d21ee239bf6b77366e2abbcd8d58a2595d8da6181b?apiKey=3756b57bedc84c2cbd55485bb12ec63c&" />
              <OfferItem title="Expertefy-led Calls" text="Expertefy can moderate interviews on your behalf. Our skilled moderators ensure that your discussions are focused and effective, covering critical topics of interest. • Audio recording and manual transcript" imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/19987e9e93ca0ed001d8c6206fdb2e7d142b2c517c833468e0359dc89478f666?apiKey=3756b57bedc84c2cbd55485bb12ec63c&" />
              <OfferItem title="B2B Survey" text="We offer a robust B2B survey service that develops and distributes custom surveys to targeted respondent pools, collecting high-quality data tailored to your specific research needs. • Qualitative and quantitative • Programming & hosting" imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/277feb47ba01fe9f7f34be4d53a5ebb3a5d30a1fa0a076f7e7d7db9d0bd405c4?apiKey=3756b57bedc84c2cbd55485bb12ec63c&" />
            </div>
          </div>
          <div className="justify-center px-16 py-5 mt-14 text-2xl text-center text-white rounded-lg shadow-xl max-md:px-6 max-md:mt-10">
            View More
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyComponent;