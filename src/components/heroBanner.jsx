import React from "react";
import Marquee from "react-fast-marquee";

const HeroBanner = () => (
  <div className="background--animated">
      <div className="container">
        <Marquee direction="left">
          <div className="marquee marquee--to-left">· thibault·livran</div>
        </Marquee>
      </div>
      <div className="container">
        <Marquee direction="right">
          <div className="marquee marquee--to-right">· full·stack</div>
        </Marquee>
      </div>
  </div>
);

export default HeroBanner;
