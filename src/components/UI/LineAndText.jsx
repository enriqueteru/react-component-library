import React from "react";

const LineAndText = ({name, job}) => {
  return (
    <div>
    <div className="line-and-text">
      <div className="blue-line"></div>
      <div className="p">{name}</div>
    </div>
    <div className="p strong ">{job} </div>
    </div>
  );
};

export default LineAndText;
