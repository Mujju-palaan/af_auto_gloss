import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Heading_desc from "../../../components/Heading_desc";
import { TeamData as team } from "../../../data/TeamData";
import Team from "./Team";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8">
      <Team />
      {/* --------- Our Mission/Vision ------------- */}
      {/* <div className="md:flex xs:flex-col gap-12 justify-center md:m-4">
        <OurMission />
        <OurVision />
      </div> */}
      <div className="md:pb-10"></div>
    </div>
  );
};

export default AboutUs;
