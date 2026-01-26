import React from "react";
import PolicyPage from '../../../components/(service)/policies/PolicyPage'
import RefundPolicyData from '../../../data/RefundPolicy'
import PolicyBanner from "@/components/(service)/policies/PolicyBanner";

const Refundpolicy = () => {
  return (
    <div>
      <PolicyBanner title={`Refund Policy`} date={`Effective 23rd Sep, 2025`}/>
      <PolicyPage PolicyData={RefundPolicyData} />
    </div>
  );
};

export default Refundpolicy;
