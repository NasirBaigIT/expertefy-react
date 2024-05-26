import React from "react";
import Header from "../components/Clients/Header";
import ExpertBanner from "../components/Experts/ExpertBanner";
import ExpertTestimonials from "../components/Home/Experts/expertTestimonails";

import expertBanner1 from "../assets/experts/experts-banner-1.png";
import expertBanner2 from "../assets/experts/experts-banner-2.png";
import ExpertEngagementProcess from "../components/Experts/ExpertEngagementProcess";
import ExpertJourney from "../components/Experts/ExpertJourney";
import ExpertForm from "../components/Experts/ExpertForm";

const Experts = () => {
  const title = "Leverage Your Expertise";
  const description =
    "Expertefy is building a global network of subject matter experts to power cutting-edge research and advisory services. Our community comprises over 400,000 professionals, including corporate executives, industry veterans and academic leaders from around the globe. If you are invited to join Expertefy, it is because we recognize the value your knowledge and experience can bring to our clients.";
  const banner1 = {
    sectionTitle: "Who are Our Experts?",
    title: "experienced professionals",
    description:
      "We welcome experienced professionals with over 10 years of industry-specific expertise to participate in our network. Whether you are a C-suite executive, technical specialist, or commercial leader, we invite you to leverage your knowledge through online or in-person paid consultations and surveys. ",
    imageSrc: expertBanner1,
  };
  const banner2 = {
    sectionTitle: "What We Do?",
    title: "shaping the latest business trends worldwide",
    description:
      "Expertefy bridges the gap between leading firms and top-tier experts, fostering a space where valuable insights are exchanged for unparalleled rewards. Through Expertefy, these professionals are not just participants but active contributors shaping the latest business trends worldwide.",
    imageSrc: expertBanner2,
  };
  return (
    <>
      <Header title={title} description={description} />
      <ExpertBanner banner={banner1} />
      <ExpertBanner banner={banner2} />
      <ExpertJourney />
      <ExpertEngagementProcess />
      <ExpertTestimonials />
      <ExpertForm />
    </>
  );
};

export default Experts;
