import * as React from "react";
import "../../../index.css";

import icon1 from "../../../assets/industry/1.png";
import icon2 from "../../../assets/industry/2.png";
import icon3 from "../../../assets/industry/3.png";
import icon4 from "../../../assets/industry/4.png";
import icon5 from "../../../assets/industry/5.png";
import icon6 from "../../../assets/industry/6.png";
import icon7 from "../../../assets/industry/7.png";
import icon8 from "../../../assets/industry/8.png";
import icon9 from "../../../assets/industry/9.png";
import icon10 from "../../../assets/industry/10.png";
import icon11 from "../../../assets/industry/11.png";
import icon12 from "../../../assets/industry/12.png";
import icon13 from "../../../assets/industry/13.png";
import icon14 from "../../../assets/industry/14.png";
import icon15 from "../../../assets/industry/15.png";

const serviceCards = [
  {
    imgSrc: icon1,
    title: "Finance & Investments",
  },
  {
    imgSrc: icon2,
    title: "Life Sciences",
  },
  {
    imgSrc: icon3,
    title: "Pharmaceuticals",
  },
  {
    imgSrc: icon4,
    title: "Technology & Digital Transformation",
  },
  {
    imgSrc: icon9,
    title: "Industrial & Environmental Technology",
  },
  {
    imgSrc: icon11,
    title: "Automotive",
  },
  {
    imgSrc: icon5,
    title: "Construction & Interior Design",
  },
  {
    imgSrc: icon6,
    title: "Telecom",
  },
  {
    imgSrc: icon7,
    title: "Printing & Publishing",
  },
  {
    imgSrc: icon8,
    title: "Mining & Metals",
  },
  {
    imgSrc: icon10,
    title: "Manufacturing",
  },
  {
    imgSrc: icon12,
    title: "Consumer Goods",
  },
  {
    imgSrc: icon13,
    title: "Chemicals",
  },
  {
    imgSrc: icon14,
    title: "Energy & Utilities Management",
  },
  {
    imgSrc: icon15,
    title: "Advertising & Market Research",
  },
];
function ServiceCard({ imgSrc, title, index }) {
  return (
    <article className="flex flex-col font-medium text-center text-indigo-900">
      <div
        className={`${
          index !== 0 ? "lg:ml-14" : ""
        } max-md:ml-10 flex-none justify-center align-items-center`}
      >
        <img
          alt="{title}"
          src={imgSrc}
          className="self-center rounded-xl shadow-xl w-[136px]"
        />
        <h2 className="mt-5 w-[136px]">{title}</h2>
      </div>
    </article>
  );
}
function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}
const IndustryCapabilities = () => {
  const [chunkSize, setChunkSize] = React.useState(6);

  React.useEffect(() => {
    const updateChunkSize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setChunkSize(isMobile ? 2 : 6);
    };

    // Set initial chunk size
    updateChunkSize();

    // Add event listener to update chunk size on screen resize
    window.addEventListener("resize", updateChunkSize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateChunkSize);
    };
  }, []);

  return (
    <>
      <section className="flex flex-col items-center px-5 w-full max-md:mt-10 max-md:max-w-full">
        <div>
          <h2 className="mt-20 text-5xl font-medium leading-10 text-center text-indigo-500 max-md:mt-10 max-md:max-w-full">
            Diverse Industry Capabilities
          </h2>

          <p className="mt-2.5 text-lg leading-5 text-center text-indigo-900 max-md:max-w-full">
            At <span className="font-medium">Expertefy</span>, we empower a
            diverse range of clients to navigate complex challenges with
            confidence.
          </p>
        </div>
        <section className="text-lg font-medium text-center text-indigo-900 capitalize total-available-width">
          {chunkArray(serviceCards, chunkSize).map((chunk, rowIndex) => (
            <div key={rowIndex} className="flex md:justify-center mt-5">
              {chunk.map((card, index) => (
                <ServiceCard key={index} {...card} index={index} />
              ))}
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default IndustryCapabilities;
