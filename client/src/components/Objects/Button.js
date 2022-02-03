import React from "react";

const Button = ({
  label,
  img,
  backGroundColor,
  textColor,
  textWeight,
  onClick,
  disable,
}) => {
  return (
    <div
      className={
        "btn-container" +
        (disable ? " disable" : "") +
        (backGroundColor ? " " + backGroundColor : "")
      }
      onClick={onClick ? onClick : null}
    >
      <div className="btn-wrapper">
        {img && <img src={img} alt="" className="btn-logo" />}
        <div
          className={
            "btn-text" +
            (textColor ? " " + textColor : "") +
            (textWeight ? " " + textWeight : "")
          }
        >
          <span>{label}</span>
        </div>
      </div>
    </div>
  );
};

export default Button;
