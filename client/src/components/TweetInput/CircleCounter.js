import React, { useEffect, useState } from "react";

const CircleCounter = ({ textLength }) => {
  const [circleColor, setCircleColor] = useState("#1A8CD8");
  const [fillPercentage, setFillPercentage] = useState(0);
  const dashArray = 88

  const checkCircleColor = () => {
    if (textLength < 260) {
      setCircleColor("#1A8CD8");
    } else if (textLength < 280) {
      setCircleColor("#fcdd3e");
    } else {
      setCircleColor("#F4212E");
    }
  };



  const checkFillPercentage = () => {
    const pct = (textLength / 280) * 100;

    if (pct < 0) setFillPercentage(0);
    else if (pct > 100) setFillPercentage(100);
    else setFillPercentage(pct);
  };

  useEffect(() => {
    checkCircleColor();
    checkFillPercentage();
  }, [textLength, circleColor]);

  return (
    <div className="counter-wrapper">
      <div className={"counter" + ((textLength < 290 && textLength !== 0 ) ? " active" : " disable")}>
        <svg
          height="100%"
          viewBox="0 0 30 30"
          width="100%"
          overflow="visible"
          className={textLength >= 260 ? "large" : "small"}
        >
          <circle
            cx="50%"
            cy="50%"
            fill="none"
            strokeWidth="2"
            r="14"
            stroke="#EFF3F4"
          ></circle>
          <circle
            cx="50%"
            cy="50%"
            fill="none"
            strokeWidth={textLength >= 260 ? "2" : "3"}
            r="14"
            stroke={circleColor}
            strokeLinecap="round"
            strokeDashoffset={dashArray-fillPercentage/(100/dashArray)}
            strokeDasharray={dashArray}
          ></circle>
        </svg>
      </div>
      {textLength >= 260 && (
        <div className={"number" + ((textLength >= 280) ? " red" : "")}>
          {280 - textLength}
        </div>
      )}
    </div>
  );
};

export default CircleCounter;
