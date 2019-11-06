import React from "react";
import { shallow } from "enzyme";
import Score from "../../scoreboard/Score";

describe("Score", () => {
  it("renders without crashing", () => {
    shallow(<Score score="0" />);
  });

  it("renders the value given", () => {
    const wrapper = shallow(<Score score="54 blue" />);
    expect(wrapper.text()).toEqual("54 blue");
  });
});
