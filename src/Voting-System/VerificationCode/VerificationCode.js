import { useState } from "react";
import { Button, Text, Checkbox, Flex, Grid } from "@chakra-ui/react";
import "./VerificationCode.css";
import { useNavigate } from "react-router-dom";
import getCurrentUser from "../../API/Voter";
import Navbar from "../Navbar/Navbar";
import PDFgenerator from "./PDFgenerator";
import PopOverVerificationCode from "./PopOverVerificationCode";

export default function VerificationCode() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [disabledButton, setDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const voter = getCurrentUser();

  function generateCode() {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    result += "-";
    for (var i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function handleChange() {
    if (checked) {
      setChecked(false);
      setDisabled(true);
    } else {
      setChecked(true);
      setInvalid(false);
      setDisabled(false);
    }
  }

  function handleSubmitVerificationCode(value) {
    if (checked) {
      navigate("/voting");
    } else {
      setInvalid(true);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-wide">
          <h1 className="blue-text">Welcome</h1>

          <Flex
            id="generated-verification-code"
            className="generated-verification-code-container"
            /*             display={voter.attributes.VerificationCode !== "" ? "flex" : "none"}
             */
          >
            <Text>
              To ensure the correctness of the voting result in this online
              election, it is important that you verify your vote. Possible
              manipulations can only be detected if as many voters as possible
              verify their vote and report problems. Vote verification is
              completely anonymous.
            </Text>
            <Text className="text-margin-top">
              Below you find your unique verification code which will be connected to your vote. You
            will find both on the official result page as soon as the results
            are up. You will also be able to scan a QR code which will only show
            you the vote that has been registered for your code. You get your QR code by downloading your code below.
              <PopOverVerificationCode />
            </Text>

            <Text className="text-margin-top">
              Please download your code or save it somewhere, where you can find
              it again. Please do not share your
              code with others!
            </Text>

            <Grid className="verification-code-box centered-text">
              <h3>fPdJhDVz9aEkJOa-P76d4HRe</h3>

              <Button className="blue-btn" width={"15rem"}>
                <Text display={"flex"}>
                  <span className="material-symbols-outlined medium-icon margin-right-icon">
                    download
                  </span>
                </Text>
                {<PDFgenerator voterId={voter.id} />}
              </Button>
            </Grid>
            <Checkbox
              className="check-box"
              id="checkBox"
              isChecked={checked}
              onChange={handleChange}
              isInvalid={invalid}
            >
              I have downloaded or saved my verification code.
            </Checkbox>
            <Button
              onClick={handleSubmitVerificationCode}
              className="blue-btn"
              disabled={disabledButton}
            >
              Vote now
            </Button>
          </Flex>
        </div>
      </div>
    </div>
  );
}
