import React from "react";

import Testimonials from "./Testimonials";

export default function SuccessStories() {
  return (
    <div>
      <div className="text-align-center">
        <h1 className="antic ">
          <span className="accent-border">Student Success Stories</span>
        </h1>
      </div>
      <div className="spacer-sm"></div>
      <div className="testimonial-block-wrapper flex-wrap">
        {Testimonials.slice(0, 6).map((test, i) => (
          <div className="testimonial-block" key={i}>
            <div className="testimonal-bubble talk-bubble shadow2">
              <div className="talk-text">
                <p className="rm-browser-margin">{test.testimonial}</p>
              </div>
            </div>
            <div className="testimonial-by flex-row-start">
              <img src={test.img} alt=":)"></img>
              <div className="inline">
                <span className="emphasised-text">{test.name}</span>
                <span className="block">{test.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
