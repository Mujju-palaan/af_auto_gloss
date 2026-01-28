import React from "react";
import Faq from "@/components/(service)/faqs/Faq";
import Heading_desc from "@/components/Heading_desc";

const Page = () => {
  return (
    <div>
      <Heading_desc
        title={`Frequently Asked Questions`}
        description={`If you can’t find what you’re looking for, please try to connect us via whatsApp.`}
      />
      <Faq />
    </div>
  );
};

export default Page;
