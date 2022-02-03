import React from "react";

const Separator = ({label}) => {
  return (
    <div className="separator">
      <div className="line" />
      <span>{label}</span>
      <div className="line" />
    </div>
  );
};

export default Separator;
