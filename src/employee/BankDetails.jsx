import React from "react";
import Inputfields from "./Inputfields";
import { bankDetails, state, accountType } from "./Data";

export default function BankDetails() {
  return (
    <div>
      <Inputfields
        inputs={bankDetails}
        selectList={state}
        accountType={accountType}
      ></Inputfields>
    </div>
  );
}
