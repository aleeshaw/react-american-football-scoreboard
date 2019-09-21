/////TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
// import BottomRow from "./BottomRow";


function App() {
  //original assignment code comment out for orig. display. VVV
  /////TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

//   const [homeScore, setHScore] = useState(0);
//   const [awayScore, setAScore] = useState(0); 

//   return (
//     <div className="container">
//       <section className="scoreboard">
//         <div className="topRow">
//           <div className="home">
//             <h2 className="home__name">Lions</h2>

//             {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

//             <div className="home__score">{homeScore}</div>
//           </div>
//           <div className="timer">00:03</div>
//           <div className="away">
//             <h2 className="away__name">Tigers</h2>
//             <div className="away__score">{awayScore}</div>
//           </div>
//         </div>
//         <BottomRow />
//       </section>
//       <section className="buttons">
//         <div className="homeButtons">
//           {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
//           <button className="homeButtons__touchdown"
//             onClick = {() => {
//               setHScore(homeScore + 7);
//             }}>
//               Home Touchdown
//           </button>

//           <button className="homeButtons__fieldGoal"
//           onClick = {() => {
//             setHScore(homeScore + 3);
//           }}>
//             Home Field Goal
//           </button>
//         </div>

//         <div className="awayButtons">
//           <button className="awayButtons__touchdown"
//             onClick = {() => {
//               setAScore(awayScore + 7);
//             }}>
//               Away Touchdown
//           </button>

//           <button className="awayButtons__fieldGoal"
//             onClick = {() => {
//               setAScore(awayScore + 3);
//             }}>
//               Away Field Goal
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }



/*"Football" Scoreboard Conversion*/

// //TODO (extra) added time panel next to the timer.. '+ num'

const [homeGoal, setHGoal] = useState(0);
const [awayGoal, setAGoal] = useState(0);  

const [homeShots, setHShots] = useState(0);
const [awayShots, setAShots] = useState(0);
const [half, setHalf] = useState(1);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeGoal}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayGoal}</div>
          </div>
        </div>

        {/* <BottomRow /> */}

        <div className="bottomRow">
      <div className="shots homeShots">
        <h3 className="shots__title">Shots</h3>
        <div className="shots__value">{homeShots}</div>
      </div>

      <div className="half">
        <h3 className="half__title">Half</h3>
        <div className="half__value">{half}</div>
      </div>
     
      <div className="shots awayShots">
        <h3 className="shots__title">Shots</h3>
        <div className="shots__value">{awayShots}</div>
      </div>
    </div> 

      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown"
            onClick = {() => {
              setHShots(homeShots + 1);
            }}>
              Home Shot
          </button>
            
          <button className="homeButtons__fieldGoal"
          onClick = {() => {
            setHGoal(homeGoal + 1);
          }}>
            Home Goal
          </button>
        </div>

        <div className="centerButton">
          <button className="halfButton" onClick = {() => {
            setHalf(half === 1 ? 2 : 1)
          }}>
            Half
          </button>
        </div>

        <div className="awayButtons">
          <button className="awayButtons__touchdown"
            onClick = {() => {
              setAShots(awayShots + 1);
            }}>
              Away Shot
          </button>

          <button className="awayButtons__fieldGoal"
            onClick = {() => {
              setAGoal(awayGoal + 1);
            }}>
              Away Goal
          </button>
        </div>
      </section>
    </div>
  );
  }

export default App;
