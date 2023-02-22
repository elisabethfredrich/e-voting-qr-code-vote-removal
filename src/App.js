import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import BulletinBoard from "./BulletinBoard/BulletinBoard";
import Confirmation from "./Confirmation/Confirmation";
import Navbar from "./Navbar/Navbar";
import VotingScheme from "./VotingScheme/VotingScheme";
import { useState } from "react";
import IndividualResult from "./BulletinBoard/IndividualResult";
import Survey from "./Survey/Survey"

function App() {
  const [voted, setVoted] = useState(false);

  return (
    <div className="App">
      <div id="app-main">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route
                exact
                path="/qr-verification"
                element={
                  <Navigate
                    to="/individualresult" /* Should be referencing the main screen */
                  />
                }
              />
              <Route exact path="/voting" element={<VotingScheme />} />
              <Route exact path="/confirmation" element={<Confirmation />} />
              <Route exact path="/bulletinboard" element={<BulletinBoard />} />
              <Route exact path="/survey" element={<Survey />} />
              <Route
                exact
                path="/individualresult"
                element={<IndividualResult />}
              />
              
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
