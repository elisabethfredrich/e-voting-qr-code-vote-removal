import { useState } from "react";
import { Button, Text, Checkbox, Flex, Grid, Image, GridItem, Box } from "@chakra-ui/react";
import "./VerificationCode.css";
import { useNavigate } from "react-router-dom";
import getCurrentUser from "../../API/Voter";
import Navbar from "../Navbar/Navbar";
import PDFgenerator from "./PDFgenerator";
import PopOverVerificationCode from "./PopOverVerificationCode";
import VerificationCodeExample from "../../assets/VerificationCode_example.png";

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
  {/* <GridItem>
     <Box className={"info-box"} mt={"26rem"} ml={"2rem"}>
      <h2>Why verify my vote?</h2>
           <Text className="text-margin-top" fontSize={"0.9rem"}>
              To ensure the correctness of the voting result in this online
              election, it is important that you verify your vote. Possible
              manipulations can only be detected if as many voters as possible
              verify their vote and report problems. Vote verification is
              completely anonymous.
            </Text> 
    </Box> 
  </GridItem> */}
        <div className="inner-page-container-wide">
          <Flex
            id="generated-verification-code"
            className="generated-verification-code-container"
          >
          <h1 className="blue-text">Welcome</h1>
            <Text >
              Welcome to the General Election 2023! 
              </Text>
           <Text className="text-margin-top">
              In order 
              to ensure the correctness of the voting result in this online
              election, it is important that you verify your vote later in the process. 
              In the box further down below, you find your unique verification code which will be
              connected to your vote. You will find both on the official result
              page as soon as the results are published, looking like this:
              </Text>
              
              <Image src={VerificationCodeExample} mt={"2rem"} border={"solid 1px var(--light_grey)"}/>
              <figcaption className="figcaption-verification-example">Example of verification code and vote</figcaption>
              
              <Text className="text-margin-top" >
              You will also be able to scan
              a QR code which will only show you the vote that has been
              registered for your code. You get your QR code by downloading your
              code below.
            </Text>

            <Text className="text-margin-top">
              Please download your code or save it somewhere, where you can find
              it again. Please do not share your code with others!
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
          </Grid>
      </div>
    </div>
  );
}