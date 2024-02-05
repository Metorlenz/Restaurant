import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.scss";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant"> Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email"  placeholder="enter your e-mail adresse" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
