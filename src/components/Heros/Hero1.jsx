import React from "react";

const Hero1 = ({title, content, color, img}) => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h1 className="hero__wrapper-title">
         {title}
        </h1>
        <h4 className="hero__wrapper-text">
         {content}
        </h4>
      </div>

      <div className="hero__wrapper">
        <div className="hero__img-bg"></div>
      </div>
    </div>
  );
};

export default Hero1;
