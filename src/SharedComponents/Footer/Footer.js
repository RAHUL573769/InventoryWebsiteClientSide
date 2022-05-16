import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="section footer bg-dark text-white my-5">
        <div className="container">
          <div>
            <div>
              <h6>Contact Information</h6>
              <div className="text-white mb-1">
                #45,Dhanmondhi Road,Dhaka,Bangladesh
              </div>
              <div className="text-white mb-1">+9123242422</div>
              <div className="text-white mb-1">+880163732838</div>
              <div className="text-white mb-1">email@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
