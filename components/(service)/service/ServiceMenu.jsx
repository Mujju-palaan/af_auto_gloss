import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceData from "../../../data/ServiceData";
import Heading_desc from "../../Heading_desc";

const ServiceMenu = () => {
  return (
    <>
      <Heading_desc
        title={`Our Services`}
        description={`We manufacture high-quality auto care products and supply in bulk to dealers, workshops, and service centres, while also serving car wash and detailing units with safe, cost-effective solutions.`}
      />

      <div className="md:flex xs:flex-col gap-6 items-center justify-center">
        {ServiceData.map((data) => (
          <ServiceCard
            key={data.id}
            slug={data.slug}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      <div className="md:mt-10 m-6"></div>
    </>
  );
};

export default ServiceMenu;
