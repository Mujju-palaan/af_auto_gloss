import React from "react";
import PolicyPage from "../../../components/policies/PolicyPage";
import ShippingPolicyData from "../../../data/ShippingPolicy";
import PolicyBanner from "@/components/policies/PolicyBanner";

const Shippingpolicy = () => {
  return (
    <div>
      <PolicyBanner title={`Shipping Policy`} date={`Effective 23rd Sep, 2025`}/>
      <PolicyPage PolicyData={ShippingPolicyData} />
    </div>
  );
};

export default Shippingpolicy;
