import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import BulletinBoard from "./BulletinBoard/BulletinBoard";
import Confirmation from "./Confirmation/Confirmation";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import VotingScheme from "./VotingScheme/VotingScheme";
import { useState } from "react";
import IndividualResult from "./BulletinBoard/IndividualResult";
import Invitation from "./letter/Invitation";
import ResultNotification from "./letter/ResultNotification";

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
              <Route exact path="/invitation" element={<Invitation />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/voting" element={<VotingScheme />} />
              <Route exact path="/confirmation" element={<Confirmation />} />
              <Route exact path="/bulletinboard" element={<BulletinBoard />} />
              <Route
                exact
                path="/individualresult"
                element={<IndividualResult />}
              />
              <Route exact path="/invitation" element={<Invitation />} />
              <Route
                exact
                path="/resultnotification"
                element={<ResultNotification />}
              />
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
