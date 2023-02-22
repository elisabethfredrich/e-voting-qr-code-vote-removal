import React from "react";
import "./Confirmation.css";

export default function Confirmation() {

  return (
    <div className="container-confirmation container">
      <div className="content-confirmation">
        <h1>Thank you for voting</h1>
        <p>You will recieve an email, when all votes has been counted and the results are published on the offical webpage. </p>
        <br></br>
        <p>Use this webpage to check, if your vote has been counted correctly by finding your unique verification code.</p>
        <p>The email will contain your unique verification code</p>
      </div>
    </div>
  );
}
