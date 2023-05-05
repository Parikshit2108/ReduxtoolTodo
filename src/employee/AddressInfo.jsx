import React from "react";
import { addressDetails, state, addressType } from "./Data";
import Accordian from "./Accordian";

export default function AddressInfo() {
  console.log(addressType);
  return (
    <div>
      <Accordian
        inputs={addressDetails}
        selectList={state}
        addressList={addressType}
        heading="Address Details"
      ></Accordian>
    </div>
  );
}
