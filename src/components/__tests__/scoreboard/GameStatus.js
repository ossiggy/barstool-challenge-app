import React from "react";
import { shallow } from "enzyme";
import GameStatus from "../../scoreboard/GameStatus";

describe("GameStatus", () => {
  it("renders without crashing", () => {
    shallow(
      <GameStatus
        status="completed"
        startDateTime="2019-11-05T18:06:58.831Z"
        period={9}
        marker="bot"
      />
    );
  });

  it("shows 'Final' when game is completed", () => {
    const wrapper = shallow(
      <GameStatus
        status="completed"
        startDateTime="2019-11-05T18:06:58.831Z"
        period={9}
        marker="bot"
      />
    );

    expect(wrapper.find("#vs").text()).toEqual("Final");
  });

  it("shows correct imperial time when game is pending", () => {
    const wrapper = shallow(
      <GameStatus
        status="pending"
        startDateTime="2019-11-05T18:06:58.831Z"
        period={0}
        marker="top"
      />
    );

    expect(wrapper.find("#vs").text()).toEqual("1pm");
    expect(wrapper.find("#timezone").text()).toEqual("est");
    expect(wrapper.find("#date").text()).toEqual("Tue Nov 05");
  });

  it("shows correct stamp of game progress", () => {
    const wrapper = shallow(
      <GameStatus
        status="in progress"
        startDateTime="2019-11-05T18:06:58.831Z"
        period={2}
        marker="top"
      />
    );

    expect(wrapper.find("#mark").text()).toEqual("top");
    expect(wrapper.find("#vs").text()).toEqual("2");
  });
});
