import React, { useState } from "react";
import "./flie.css";

function Fly({ fly }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="flie">
      <div className="flie_box">
        <img src={fly} alt="" />
      </div>
    </div>
  );
}

export default Fly;
