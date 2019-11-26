import React, { Component } from "react";
import ClassBanner from "./Blocks/ClassBanner";
import LearnByCoding from "./Blocks/LearnByCoding";
import SuccessStories from "./Blocks/SuccessStories";
import UnionTribune from "./Blocks/UnionTribune";
import ReadyToBeginBanner from "./Blocks/ReadyToBeginBanner";
import LeadInstructor from "./Blocks/LeadInstructor";
import DoYouStill from "./Blocks/DoYouStill";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonialLength: 14
    };
  }

  render() {
    return (
      <div className="Flexstart">
        <ClassBanner />
        <LearnByCoding />
        <LeadInstructor />
        <div className="spacer-md"></div>
        <SuccessStories testimonialLength={this.state.testimonialLength} />
        <div className="spacer-md"></div>
        <UnionTribune />
        <div className="spacer-md"></div>
        <ReadyToBeginBanner />
        <DoYouStill />
        <div className="spacer-sm"></div>
        <div className="spacer-lg"></div>
      </div>
    );
  }
}
