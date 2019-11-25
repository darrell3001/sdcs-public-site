import React, { Component } from "react";
import ClassScheduleInfo from "./Blocks/ClassScheduleInfo";
import ClassBanner from "./Blocks/ClassBanner";
import OurFrontEndProgram from "./Blocks/OurFrontEndProgram";
import MichaelQuote from "./Blocks/MichaelQuote";
import SuccessStories from "./Blocks/SuccessStories";
import UnionTribune from "./Blocks/UnionTribune";
import ReadyToBeginBanner from "./Blocks/ReadyToBeginBanner";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Flexstart">
        <ClassBanner />
        <div className="spacer-sm"></div>
        <OurFrontEndProgram />
        <MichaelQuote />
        <div className="spacer-md"></div>
        <ClassScheduleInfo />
        <div className="spacer-md"></div>
        <SuccessStories />
        <div className="spacer-sm"></div>
        <UnionTribune/>
        <div className="spacer-sm"></div>
        <ReadyToBeginBanner/>
        <div className="spacer-lg"></div>
        <div className="spacer-sm"></div>
      </div>
    );
  }
}
