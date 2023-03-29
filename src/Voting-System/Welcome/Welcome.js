import { Button, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import VotingOverview from "../../assets/Voting-Overview.png";
import { useEffect } from "react";

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-wide">
          <h1 className="blue-text">Welcome</h1>

          <Text>Welcome to the General Election 2023!</Text>
          <Text className="text-margin-top" marginBottom={"2rem"}>
            This election consists of three parts. First, you will get a unique
            verification code, then you will vote. Later on you can use your
            verification code to verify your vote, i.e. check whether your vote
            has been counted correctly. This is important to ensure the
            correctness of the election result.
          </Text>

          <div>
            <Image src={VotingOverview} />
          </div>
          <Text className="text-margin-top" marginBottom={"2rem"}>
            The demo video below will give you a brief introduction to the
            online voting system. We highly encourage you to watch it, as this
            online election is a bit different from a paper-based election.
          </Text>

          <div>
            <h3 className="headline-results">Demo video</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/vOHGdjblMfU"
              title="demo video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <Button
            onClick={() => navigate("/verification-code")}
            className="blue-btn"
            width={"100%"}
            marginTop={"4rem"}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
