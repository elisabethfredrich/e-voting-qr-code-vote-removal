import React from "react";
import VerificationCode from "../assets/Verification-Code.pdf"
import { Button, Text } from "@chakra-ui/react";
import { downloadFile } from "../utils";
import "./InfoPages.css";

export default function Info2() {
  const downloadVerificationCode = () => {
    downloadFile(VerificationCode, "General-Election-2023_VerificationCode.pdf");
  };

  return (
    <div className="container-info-pages">
      <div className="inner-box-info centered-info-page">
        <h2 className="h2-info-pages">
          You have completed the first part of the study!
        </h2>
        <Text className="medium-body-text-info">
          If this was a real election, the votes would now be counted and you would get a physical or digital letter with a verification code once the result is up.
          
        </Text>
        <Text className="medium-body-text-info">
          However, since this is a study, the results are already up and you can now download the letter.
          
        </Text>

        <Button onClick={downloadVerificationCode} className="red-btn">
          <span className="material-symbols-outlined medium-icon margin-right-icon">
            download
          </span>
          Download
        </Button>
      </div>
    </div>
  );
}
