import React from "react";
import useScrollPosition from "../../hooks/useScrollPosition";

const Hero2 = () => {
  const ScrollPosition = useScrollPosition();
  console.log(ScrollPosition);
  return (
    <div className="hero2">
      {ScrollPosition <= 200 ? (
        <img
          src="/assets/components/footer-bottom-lightblue-bg.svg"
          alt="bg"
          className="hero2__bg"
        />
      ) : (
        <img
          src="/assets/components/footer-bottom-lightblue-bg.svg"
          alt="bg"
          className="hero2__bg-scrolled"
        />
      )}

      <div className="hero2__wrapper">
        <div className="hero2__wrapper-col">
          {/* <span>Grow</span>
        <span>Build</span> */}
          <span>Scale</span>
          <h1>Without Borders</h1>
          <p className="p">
            Access top African tech talent through Propel’s community-powered
            ecosystem
          </p>
          <button className="hero2__btn">Get Started</button>
          <div className="hero2__bottom">
            Propel’s community-powered ecosystem
          </div>
        </div>
        <div className="hero2__wrapper-col"> </div>
      </div>
    </div>
  );
};

export default Hero2;
