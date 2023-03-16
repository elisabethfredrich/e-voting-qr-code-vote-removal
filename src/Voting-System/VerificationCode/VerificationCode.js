import { useState } from "react";
import { Button, Text, Checkbox, Flex, Grid, Image, GridItem, Box } from "@chakra-ui/react";
import "./VerificationCode.css";
import { useNavigate } from "react-router-dom";
import getCurrentUser from "../../API/Voter";
import Navbar from "../Navbar/Navbar";
import PDFgenerator from "./PDFgenerator";
import PopOverVerificationCode from "./PopOverVerificationCode";
import VerificationCodeExample from "../../assets/Example_VerificationCode.png";
import IndividualBBExampe from "../../assets/IndividualBB_Example.png";

export default function VerificationCode() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [disabledButton, setDisabled] = useState(true);

  const voter = getCurrentUser();

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
<Grid gridTemplateColumns={"1fr"} gap={"7rem"}>
<div className="inner-page-container-wide margin-left margin-right">
            <Flex
              id="generated-verification-code"
              className="generated-verification-code-container"
            >
              <h1 className="blue-text">Welcome</h1>
              <Text>Welcome to the General Election 2023!</Text>
              <Text className="text-margin-top">
                In order to ensure the correctness of the election result in
                this online election, it is important that you verify your vote
                later in the process. For this purpose, you will need a unique
                verification code which will be linked to your vote. In the box
                below further down, you will find your unique verification code.
              </Text>
              <Text className="text-margin-top">
                After the election result is published, you need to visit our
                official webpage and search for your verification code between
                all the codes. The picture to right illustrates how it will look
                like with all the verification codes being linked their specific
                vote.
              </Text>

              <Text className="text-margin-top">
                You also have the opportunity to scan a QR code, which will you
                only show you the vote that has been registered for your QR
                code. You get your QR code by downloading your code below. {/* The
                picture 2 to right illustrates how this will look like. */}
              </Text>

              <Text className="text-margin-top">
                Please download your code or save it somewhere, where you can
                find it again. Do not share your code with others!
              </Text>

              <Text className="text-margin-top" fontWeight="600">
                NB! You need to keep this code until the end of the election!
              </Text>

            <Grid className="verification-code-box centered-text">
              <h3>fPdJhDVz9aEkJOa-P76d4HRe</h3>

              <Button className="blue-btn" width={"15rem"}>
                <Text display={"flex"}>
                  <span className="material-symbols-outlined medium-icon margin-right-icon">
                    download
                  </span>
                </Text>
                {<PDFgenerator voterId={voter.attributes.username} />}
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
          </Grid>

          <div className="verification-code-example-picture">
          <Image
            className="picture-example-bb"
            src={VerificationCodeExample}
            width={"100%"}
            height={"auto"}
            border={"solid 1px var(--light_grey)"}
          />
          <figcaption className="figcaption-verification-example">
            The official webpage with all verification codes linked to their
            vote.
          </figcaption>

   {/*        <Image
            className="picture-example-bb"
            src={IndividualBBExampe}
            width={"100%"}
            height={"auto"}
            border={"solid 1px var(--light_grey)"}
          />
          <figcaption className="figcaption-verification-example">
            Picture 2: After scanning your QR-code, you will see your saved voted. 
          </figcaption> */}
        </div>
      </div>
    </div>
  );
}