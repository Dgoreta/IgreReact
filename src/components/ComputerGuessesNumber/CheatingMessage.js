import React from "react";

const CheatingMessage = () => {
  return setTimeout(() => {
    <div style={{ backgroundColor: "red", color: "antiquewhite" }}>
      HEY YOU ! STOP CHEATING !!! GIVE ME CORRECT DIRECTION
    </div>;
  }, 2);
};

export default CheatingMessage;
