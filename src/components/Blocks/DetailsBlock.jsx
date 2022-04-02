import React, { useState } from "react";
import LineAndText from "../UI/LineAndText";

const DetailsBlock = ({ backgroundImg, name, job }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      {!show && (
        <div
          onClick={handleClick}
          className="details-block"
          style={{
            color: "white",
            background: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,1)), url('${backgroundImg}')`,
          }}
        >
          <div
            className="details-block__content"
            style={{ transform: "rotate(-90deg)" }}
          >
            {" "}
            <LineAndText name={name} job={job} />{" "}
          </div>
        </div>
      )}

      {show && (
        <>
          <div
            onClick={handleClick}
            className="details-block-clicked"
            style={{
              color: "white",
              background: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,1)), url('${backgroundImg}')`,
            }}
          >
            <div
              className="details-block-clicked__content"
              style={{ transform: "rotate(0deg)" }}
            >
              {" "}
              <LineAndText name={name} job={job} />{" "}
            </div>
          </div>
          <div className="details-block-clicked__text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              illo vero laudantium veritatis mollitia? Inventore quos in facilis
              esse eveniet nostrum quae provident, asperiores sequi, quasi
              delectus. Explicabo, laudantium fugit!
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default DetailsBlock;
