import { GridItem, Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import "./VoteVerification.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function IndividualVoteVerification() {
  const navigate = useNavigate();

  return (
    <div>
       <Navbar/>
    <div className="outer-page-container">
      <div className="inner-page-container-wide">
        <h1 className="blue-text centered-text">Vote Verification</h1>

        <Box className="info-box">
          <Text className="info-text">
            <span className="bold-text">NB!</span> If your vote is not counted
            correctly, please follow the guidelines in the instruction paper.
          </Text>

        </Box>
          <Text className="centered-text" mt={"1.5rem"}>Below you can see your counted vote:</Text>

        <Box className="individual-vote-display">
          <Text></Text>
        </Box>
        <Box className="bb-code-container">
          <Text>
            If you wish to see all counted votes, please click{" "}
            <Link
              className="link-bold"
              onClick={() => navigate("/verification")}
            >
              here
            </Link>
            .
          </Text>
          <Text>
            There, you can also verify your vote by using the following code:
          </Text>
        </Box>
        <Text className="verification-code-individual-page">
        </Text>

        <GridItem className="btn-container-vertical">
          <Button
            className="blue-btn"
            width={"100%"}
            onClick={() => navigate("/info-3")}
            mt="6rem"
          >
            Close
          </Button>
        </GridItem>
      </div>
    </div>
    </div>
  );
}
