import React from "react";
import { shallow } from "enzyme";
import PlayerStats from "../../mlb/PlayerStats";
import { pitching, batting } from "../../fields";

const data = require("../structures/mlbData.json");

describe("PlayerStats", () => {
  describe("PlayerStats - pitching", () => {
    it("renders without crashing", () => {
      shallow(
        <PlayerStats
          keys={pitching}
          abbr="LAA"
          players={data.stats.home.pitchers}
        />
      );
    });

    it("renders the correct amount of header fields", () => {
      const wrapper = shallow(
        <PlayerStats
          keys={pitching}
          abbr="LAA"
          players={data.stats.home.pitchers}
        />
      );
      expect(wrapper.find(".stats-header").length).toEqual(10);
    });

    it("renders the correct amount of player-stats rows", () => {
      const wrapper = shallow(
        <PlayerStats
          keys={pitching}
          abbr="LAA"
          players={data.stats.home.pitchers}
        />
      );
      expect(wrapper.find(".player-stats-row").length).toEqual(4);
    });

    it("renders the correct amount of player-stats fields", () => {
      const wrapper = shallow(
        <PlayerStats
          keys={pitching}
          abbr="LAA"
          players={data.stats.home.pitchers}
        />
      );
      expect(wrapper.find(".player-stats-col").length).toEqual(40);
    });
  });

  describe("PlayerStats - batting", () => {
    it("renders without crashing", () => {
      shallow(
        <PlayerStats
          keys={batting}
          abbr="LAA"
          players={data.stats.home.batters}
        />
      );
    });

    it("renders the correct amount of header fields", () => {
      const wrapper = shallow(
        <PlayerStats
          keys={batting}
          abbr="LAA"
          players={data.stats.home.batters}
        />
      );
      expect(wrapper.find(".stats-header").length).toEqual(10);
    });

    it("renders the correct amount of player-stats rows", () => {
      const wrapper = shallow(
        <PlayerStats
          keys={batting}
          abbr="LAA"
          players={data.stats.home.batters}
        />
      );
      expect(wrapper.find(".player-stats-row").length).toEqual(12);
    });

    it("renders the correct amount of player-stats fields", () => {
      const wrapper = shallow(
        <PlayerStats
          keys={batting}
          abbr="LAA"
          players={data.stats.home.batters}
        />
      );
      expect(wrapper.find(".player-stats-col").length).toEqual(120);
    });
  });
});
