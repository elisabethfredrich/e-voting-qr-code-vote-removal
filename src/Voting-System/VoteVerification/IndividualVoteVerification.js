import { GridItem, Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import "./VoteVerification.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import getCurrentUser from "../../API/Voter";

export default function IndividualVoteVerification() {
  const navigate = useNavigate();
  const voter = getCurrentUser();

  return (
    <div className="outer-page-container">
      <div className="inner-page-container-wide">
        <h1 className="blue-text centered-text">Vote Verification</h1>

        <Box className="info-box">
          <Text className="info-text">
            <span className="bold-text">NB!</span> If your vote is not counted
            correctly, please follow the guidelines in the instruction paper.
          </Text>
        </Box>

        <Box className="individual-vote-display">
          <Text>Sarah Miller (Party J)</Text>
        </Box>
        <Box>
          <Text>
            If you wish to see all counted votes, please click{" "}
            <Link
              className="link-bold"
              onClick={() => navigate("/vote-verification")}
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
          bAdJhFVz6aFrJTa-F86I5HTe
        </Text>

        <GridItem className="btn-container-vertical">
          <Button
            className="blue-btn"
            width={"100%"}
            onClick={() => navigate("/info-3")}
          >
            Close
          </Button>
        </GridItem>
      </div>
    </div>
  );
}
