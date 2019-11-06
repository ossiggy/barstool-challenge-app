import React from "react";
import { shallow } from "enzyme";
import StatBox from "../../scoreboard/StatBox";
import Players from "../../nba/Players";
import MlbStatBox from "../../mlb/MlbStatBox";

describe("StatBox", () => {
  it("renders without crashing", () => {
    shallow(<StatBox away={{team: "away"}} home={{team: "home"}} type="MLB"/>);
  });

  it("renders the MlbStatBox component when passed type 'MLB'", () => {
    const wrapper = shallow(<StatBox away={{team: "away"}} home={{team: "home"}} type="MLB"/>);
    expect(wrapper.find(MlbStatBox).length).toEqual(2);
  });

  it("renders the Players component when passed type 'NBA'", () => {
    const wrapper = shallow(<StatBox away={{team: "away"}} home={{team: "home"}} type="NBA"/>);
    expect(wrapper.find(Players).length).toEqual(2);
  });
});
