import React from "react";
import PolicyPage from '../../../components/(service)/policies/PolicyPage'
import QualityPolicyData from "../../../data/QualityPolicyData ";
import PolicyBanner from "@/components/(service)/policies/PolicyBanner";

const Refundpolicy = () => {
  return (
    <div>
      <PolicyBanner title={`Quality Policy`} date={`Effective 23rd Sep, 2025`}/>
      <PolicyPage PolicyData={QualityPolicyData} />
    </div>
  );
};

export default Refundpolicy;
