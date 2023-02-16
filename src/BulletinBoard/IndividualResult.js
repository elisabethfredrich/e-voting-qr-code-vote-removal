import { GridItem, Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import "./BulletinBoard.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const IndividualResult = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="main-mobile">
        <h1>You vote has been counted</h1>
        <Box
          bg="var(--secondary_blue)"
          padding="1rem"
          borderRadius={"5px"}
          color="#599C2D"
          w={"100%"}
        >
          <Text className="info-text">
            NB! If the candidate below does not match with your cast of vote, then please follow the instructions paper.
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
          {/* This we need to change */}
          <Text>
          <p> Pia Olsen Dyhr</p>
          </Text>
        </Box>
        <Box className="intro-text" marginTop={"1rem"} marginBottom={"1rem"}>
          <p>
            If you want to see all counted votes, click{" "}
            <Link
              className="link-bold"
              onClick={() => navigate("/bulletinboard")}
            >
              here
            </Link>
            .
          </p>
          <p>
          By following the link you can also check whether your vote has been cast correctly by using this verification code:
          </p>
        </Box>
        {/* This we also need to change */}
        <p className="bold">CWTL-DMDpLZDSvR</p>

        <GridItem className="btn-container-vertical">
          <Button
            className="button"
            width="100%"
            bg={"var(--primary_blue)"}
            color="var(--secondary_blue)"
            onClick={() => navigate("/survey")}
            fontSize="0.9rem"
            marginTop={"2rem"}
          >
            Next
          </Button>
        </GridItem>
      </div>
    </div>
  );
};

export default IndividualResult;
