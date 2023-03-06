import "./App.css";
import "./Info-Pages/InfoPages.css"
import "./Voting-System/VotingSystem.css"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import VoteVerification from "./Voting-System/VoteVerification/VoteVerification";
import IndividualVoteVerification from "./Voting-System/VoteVerification/IndividualVoteVerification";
import Confirmation from "./Voting-System/Confirmation/Confirmation";
import Voting from "./Voting-System/Voting/Voting";
import Info3 from "./Info-Pages/Info-3";
import Info2 from "./Info-Pages/Info-2";
import Welcome from "./Info-Pages/Welcome";
import Info1 from "./Info-Pages/Info-1";
import Reporting from "./Voting-System/Reporting/Reporting";
import Parse from "parse";

const PARSE_APPLICATION_ID = "pzyT2tanDNkEYFCpW0os9mzCQagkCqdr8SFaqNUa";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "LnMuO8tFqDcVRFzNH3YGDvzglcTJRGNYFgurraxj";

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);

Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div className="App">
      <div id="app-main">
        <BrowserRouter>
       <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/info-1" element={<Info1 />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/info-2" element={<Info2 />} />
            <Route path="/verification" element={<VoteVerification />} />
            <Route path="/individual-verification" element={<IndividualVoteVerification />} />
            <Route path="/info-3" element={<Info3 />} />
            <Route path="reporting" element={<Reporting/>}/>
            <Route path="/*" element={<Navigate to="/welcome" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
