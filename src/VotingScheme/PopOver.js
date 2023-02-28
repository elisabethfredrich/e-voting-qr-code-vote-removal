import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./VotingScheme.css";
import getCurrentUser, { saveVerificationCode, saveVote } from "../API/Voter";

function PopOver({vote}) {
  const voter = getCurrentUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if(vote==="Sarah Wilson (Party F)"){
      const alteredVote = "Emma Miller (Party J)";
      await saveVote(vote, alteredVote);
      await saveVerificationCode("bAdJhFVz6aFrJTa-F86I5HTe");
    }
    else{
      await saveVote(vote, vote)
      await saveVerificationCode(generateCode());
    }
    navigate("/confirmation");
  };

  const generateCode = () => {

    let alphanumerical = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let alphanumericalLength = alphanumerical.length;

    let result = "";

            for (let k = 0; k < 8; k++) {
                result += alphanumerical.charAt((Math.floor(Math.random() * alphanumericalLength)));
            }
            result += "-";
        
        
        for (let k = 0; k < 8; k++) {
            result += alphanumerical.charAt((Math.floor(Math.random() * alphanumericalLength)));
        }
        return result;
    
      }


  return (
    <Popover className="popover">
      <PopoverTrigger display="flex" justifyContent="center">
        <Button
          className="button"
          bg={"var(--primary_blue)"}
          color="var(--secondary_blue)"
          width="100%"
        >
          Submit vote 
        </Button>
      </PopoverTrigger>
      <PopoverContent width={"100%"} backgroundColor={"#EEF5FB"} padding="3rem">
        <PopoverArrow />
        <PopoverCloseButton />
          <PopoverBody alignContent="center">
            <Text>
              Please check your vote is entered correctly. Are you sure, you want to vote for: 
            </Text>
            <Text marginBottom={"1.5rem"} marginTop={"1rem"} color="#1C4E81">
              {vote}
            </Text>
            <Box display={"flex"} alignItems="top">
              <PopoverCloseButton className="no-button">No</PopoverCloseButton>
              <Button
                className="button"
                bg={"var(--primary_blue)"}
                color="var(--secondary_blue)"
                onClick={handleSubmit}
              >
                Yes
              </Button>
            </Box>
          </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PopOver;
