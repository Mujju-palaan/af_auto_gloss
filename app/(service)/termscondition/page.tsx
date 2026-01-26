import React from "react";
import PolicyPage from "../../../components/(service)/policies/PolicyPage";
import PolicyBanner from '../../../components/(service)/policies/PolicyBanner.jsx'
import TermsData from "../../../data/Terms";

const Termscondition = () => {
  return (
    <div>
      <PolicyBanner title={`Terms & Condition`} date={`Effective 23rd Sep, 2025`}/>
      <PolicyPage PolicyData={TermsData} />
    </div>
  );
};

export default Termscondition;
