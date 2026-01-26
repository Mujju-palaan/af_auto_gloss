import React from "react";
import PolicyPage from "../../../components/(service)/policies/PolicyPage";
import PolicyBanner from '../../../components/(service)/policies/PolicyBanner.jsx'
import TermsData from "../../../data/Terms";

const Termscondition = () => {
  return (
    <div className="min-h-screen">
      <PolicyBanner title={`Terms & Condition`} date={`Effective 1st Jan 2026`}/>
      <PolicyPage PolicyData={TermsData}/>
    </div>
  );
};

export default Termscondition;
