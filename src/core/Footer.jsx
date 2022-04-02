import React from "react";

const Footer = () => {
  return (
    <div className="footer">
        <img className="footer__decoration-bg-1" src="/assets/components/footer-bottom-lightblue-bg.svg" alt="" />
      <div className="footer__locations">
      <div>
          <img style={{width:"70px"}} src="/assets/components/location-icon.svg" alt="" />
      </div>

        <div className="footer__locations-direction">
          <div className="line-and-text">
            <div className="blue-line"></div>
            <div className="p">Spain</div>
          </div>
          <p className="h3">  C/ Plaza España, 10439 Murcia, Spain</p>
        </div>

        <div className="footer__locations-direction">
          <div className="line-and-text">
            <div className="blue-line"></div>
            <div className="p">Spain</div>
          </div>
          <p className="h3">  C/ Plaza España, 10439 Murcia, Spain</p>
        </div>

        <div className="footer__locations-direction">
          <div className="line-and-text">
            <div className="blue-line"></div>
            <div className="p">Spain</div>
          </div>
          <p className="h3">  C/ Plaza España, 10439 Murcia, Spain</p>
        </div>

       

       
      </div>

      <div className="footer__box">
        <div className="footer__box-wrapper">
          <h2 className="h3 mb-3">Subscribe to the monthly newsletter</h2>
          <p className="footer__box-wrapper-p p mb-5">
            Be the first to know what’s new in the Propelverse. Subscribe to our
            newsletter now!
          </p>
          <form>
            <input
              className="footer__box-input"
              type="text"
              name="newsletter"
              id="newsletter"
            />
            <button className="footer__box-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
