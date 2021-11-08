import React from "react";
import PricingComponent from "../PricingComponent";
function Index({ subscriptionDetails }) {
  return (
    <>
      {subscriptionDetails.map((item) => (
        <PricingComponent plan={item} />
      ))}
    </>
  );
}

export default Index;
