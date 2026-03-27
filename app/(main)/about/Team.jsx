import React from "react";
import TeamCard from "./TeamCard";
import TeamData from "../../../data/TeamData";

const Team = () => {
  return (
    <div className="flex flex-col md:gap-8 gap-4">
      <div className="md:px-20 p-4 text-center flex flex-col gap-4">
        <h1 className="md:text-6xl text-xl font-serif md:font-normal font-semibold text-white">
          Meet our team
        </h1>
        <p className="text-gray-600 md:text-lg text-xs">
          At AF Auto Gloss, we believe that our people are our greatest asset.
          Our team combines expertise, creativity, and dedication to deliver
          exceptional results for our clients and partners. Each member brings a
          unique skill set, helping us innovate and excel in every project we
          undertake.
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center md:p-8 ">
        {TeamData.map((e) => (
          <TeamCard
            key={e.id}
            avatar={e.avatar}
            name={e.name}
            title={e.title}
            instagram={e.instagram}
            linkedin={e.linkedin}
            phone={e.phone}
            whatsapp={e.whatsapp}
            mail={e.mail}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
