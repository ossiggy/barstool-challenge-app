import React from "react";
import { shallow } from "enzyme";
import TeamInfo from "../../scoreboard/TeamInfo";

describe("Score", () => {
  it("renders without crashing", () => {
    shallow(<TeamInfo status="away" team={{first_name: "foo", last_name: "bar"}}/>);
  });

  it("renders the props given", () => {
    const wrapper = shallow(<TeamInfo status="away" team={{first_name: "foo", last_name: "bar"}}/>);
    expect(wrapper.find('.away').length).toEqual(1);
    expect(wrapper.find('.team-city').text()).toEqual("foo");
    expect(wrapper.find('.team-name').text()).toEqual("bar");
  });
});
