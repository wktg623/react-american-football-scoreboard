//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and 
  //another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  

  const homeTeamTouchdown = el => {
  setHomeScore(homeScore + 7);
  }
  
  const awayTeamTouchdown = el => {
  setAwayScore(awayScore + 7);
  }

  const homeTeamFieldGoal = el => {
    setHomeScore(homeScore + 3);
    }
    
    const awayTeamFieldGoal = el => {
    setAwayScore(awayScore + 3);
    }
  

  return (

    
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Vols</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">32 seconds</div>
          <div className="away">
            <h2 className="away__name">Hogs</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {homeTeamTouchdown}  className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {homeTeamFieldGoal}  className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick ={awayTeamTouchdown}  className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {awayTeamFieldGoal} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        
      </section>
    </div>
  );
}

export default App;
