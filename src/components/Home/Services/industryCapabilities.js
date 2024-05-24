import * as React from "react";
import "../../../index.css";

const serviceCards = [
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7932c311e28fc88bfa2605f081b6906c1d64961e4e03765719c9e00f59012e07?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Finance & Investments",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b57c69818cb076c03b6972d2a4bc2d5ba5251f9d6975dbd65bcd8f9e6db334a1?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Life Sciences",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d87ebc2e7ee0233b170fb6384a520d923db5fcbfedf611679da0f80e7f2a103c?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Pharmaceuticals",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7a8581c38e0afd403ca34d3fc9e10aad01e3a9877fec7c284ae5f26071ca5126?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Technology & Digital Transformation",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f01643c924307064cdb6ebdfd847e67f6a24727c391f4bd4099d88fee40fff29?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Construction & Interior Design",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1eb8bd74d72e7754af80f8af782be67d9d8956705b7f1a3ed80c63d6450410ab?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Telecom",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1c5a04fd625731ba3ee3ecb39c2ea77fe4eac7e14eb83209b4d7d9dbc6a7aedb?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Printing & Publishing",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0b189b3feabf0eff0556d6622a1ce5dbdb43aae1fba2ce0fa6a1334657a78de4?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Mining & Metals",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c6d0d3b5087452aea8401215a61b1c027e0ca0f625a4a1b6d593be455812f3a6?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Industrial & Environmental Technology",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a43698c6d472c4080999b2a0b78a420b01b482fec94bf1fb3d5607352688fac1?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Manufacturing",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e227fea54b0b12d8255e6889c0d1263b67a8c02208d532a261944f3bf674a428?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Automotive",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/889f33df1eb4471a2a6a9d296c08e8ba9a8b500fc2025e0016c48e154be8f7f4?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Consumer Goods",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/81f5fcbe680d3a94ec6bb8045642ff75af3150505aa414b1034e640ed35a8cbf?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Chemicals",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3a1c4617bf9a00b2f6f46c4e2b4567c5cd358359e3cda73678b66c6d16076f8c?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Energy & Utilities Management",
  },
  {
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b915942e04d0cacf59a689a00bf2d28fc5065bf74bc12c8f744670a72b9ecb9e?apiKey=3756b57bedc84c2cbd55485bb12ec63c&",
    title: "Advertising & Market Research",
  },
];
function ServiceCard({ imgSrc, title }) {
  return (
    <article class="flex flex-col font-medium text-center text-indigo-900">
      <div class="image-container flex-none">
        <img
          alt="{title}"
          src={imgSrc}
          class="self-center rounded-xl shadow-xl w-[136px]"
        />
        <h2 class="mt-5 w-[136px]">{title}</h2>
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
      <section className="flex flex-col items-center px-5 mt-24 w-full max-md:mt-10 max-md:max-w-full">
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
            <div key={rowIndex} className="flex justify-evenly mt-5">
              {chunk.map((card, index) => (
                <ServiceCard key={index} {...card} />
              ))}
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default IndustryCapabilities;
