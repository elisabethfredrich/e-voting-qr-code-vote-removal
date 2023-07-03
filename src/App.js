/**
 * Copyright 2023 Christina Frederikke Nissen, Elisabeth Fredrich
 *
 * This file is part of e-voting-system-auto-remove.
 *
 * e-voting-system-auto-remove is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * e-voting-system-auto-remove is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with e-voting-system-auto-remove. If not, see <https://www.gnu.org/licenses/>.
 */

import "./App.css";
import "./Info-Pages/InfoPages.css"
import "./Voting-System/VotingSystem.css"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import VoteVerification from "./Voting-System/VoteVerification/VoteVerification";
import IndividualVoteVerification from "./Voting-System/VoteVerification/IndividualVoteVerification";
import Confirmation from "./Voting-System/Confirmation/Confirmation";
import Voting from "./Voting-System/Voting/Voting";
import Info2 from "./Info-Pages/Info-2";
import Info1 from "./Info-Pages/Info-1";
import Info3 from "./Info-Pages/Info-3";
import Reporting from "./Voting-System/Reporting/Reporting";
import Welcome from "./Voting-System/Welcome/Welcome";
import Parse from "parse";
import VerificationCode from "./Voting-System/VerificationCode/VerificationCode";
import Error from "./Voting-System/Error/Error"
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
            <Route path="/" element={<Navigate to="/info-1" />} />
            <Route path="/info-1" element={<Info1 />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/verification-code" element={<VerificationCode />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/info-2" element={<Info2 />} />
            <Route path="/verification" element={<VoteVerification />} />
            <Route path="/verification/:id" element={<IndividualVoteVerification />} />
            <Route path="/reporting" element={<Reporting/>}/>
            <Route path="/info-3" element={<Info3/>}/>
            <Route path="invalid-url" element={<Error/>}/>
            <Route path="/*" element={<Navigate to="/invalid-url" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
