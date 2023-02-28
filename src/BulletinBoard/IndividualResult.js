import { GridItem, Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import "./BulletinBoard.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import getCurrentUser from "../API/Voter";

const IndividualResult = () => {
  const navigate = useNavigate();
  const voter = getCurrentUser();

  return (
    <div className="container">
      <div className="main-mobile">
        <h1 className="blue-text">Vote Verification</h1>

        <Box
          bg="var(--secondary_blue)"
          padding="1rem"
          borderRadius={"5px"}
          color="#599C2D"
          w={"100%"}
        >
          <Text className="info-text">
            <span className="bold-text">NB!</span> If your vote is not counted
            correctly, please follow the guidelines in the instruction paper.
          </Text>
        </Box>

        <Box
          width="100%"
          color={"var(--primary_blue)"}
          fontWeight="600"
          fontSize={"1.2rem"}
          paddingTop="3rem"
          marginTop="2rem"
          paddingBottom="3rem"
          border="solid 1px #D9D9D9"
          paddingLeft={"1rem"}
          paddingRight={"0.5rem"}
          justifyItems="center"
          display={"flex"}
          justifyContent={"center"}
        >
          <p>Emma Miller (Party J)</p>
        </Box>
        <Box className="intro-text" marginTop={"1rem"} marginBottom={"1rem"}>
          <p>
            If you wish to see all counted votes, please click {" "}
            <Link
              className="link-bold"
              onClick={() => navigate("/bulletinboard")}
            >
              here
            </Link>
            .
          </p>
          <p>
            There, you can also verify your vote by using the following code:
          </p>
        </Box>
        <p className="bold blue-text">bAdJhFVz6aFrJTa-F86I5HTe</p>

        <GridItem className="btn-container-vertical">
          <Button
            className="button"
            width="100%"
            bg={"var(--primary_blue)"}
            color="var(--secondary_blue)"
            onClick={() => navigate("/login")}
            fontSize="0.9rem"
            marginTop={"2rem"}
          >
            Afslut
          </Button>
        </GridItem>
      </div>
    </div>
  );
};

export default IndividualResult;
