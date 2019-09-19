import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  const [homeShots, setHShots] = useState(0);
  const [awayShots, setAShots] = useState(0);
  const [half, setHalf] = useState(1);
  return (
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
  );
};

export default BottomRow;
