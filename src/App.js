/////TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  /////TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHScore] = useState(0);
  const [awayScore, setAScore] = useState(0); 

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown"
            onClick = {() => {
              setHScore(homeScore + 6);
            }}>
              Home Touchdown
          </button>

          <button className="homeButtons__fieldGoal"
          onClick = {() => {
            setHScore(homeScore + 3);
          }}>
            Home Field Goal
          </button>
        </div>

        <div className="awayButtons">
          <button className="awayButtons__touchdown"
            onClick = {() => {
              setAScore(awayScore + 6);
            }}>
              Away Touchdown
          </button>

          <button className="awayButtons__fieldGoal"
            onClick = {() => {
              setAScore(awayScore + 3);
            }}>
              Away Field Goal
          </button>
        </div>

        <div className="quarterButtons"></div>
      </section>
    </div>
  );
}

export default App;

//TODO convert scoreboard into a (real :D) football scoreboard. Replace 'Down' 'Quarter' panels with 'Shots', add button for adding 1 to shots panels. 
//TODO remove touchdown and field goal buttons and replace with 'Goal' buttons.
//TODO replace 'To go' and 'ball on' panels with a half panal with a button to switch between 1 and 2
//TODO (extra) added time panel next to the timer.. '+ num'