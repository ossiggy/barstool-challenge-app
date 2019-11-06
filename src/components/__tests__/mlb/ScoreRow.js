import React from "react";
import { shallow } from "enzyme";
import Score from '../../scoreboard/Score';
import ScoreRow from "../../mlb/ScoreRow";

const data = require("../structures/mlbData.json");

const {
  stats,
  totals,
  home_team,
  home_period_scores
} = data;

const headers = new Array(9);

describe("ScoreRow", () => {
  it("renders without crashing", () => {
    shallow(
      <ScoreRow
        team={home_team}
        scores={home_period_scores}
        type="home"
        hits={totals.home_batter_totals.hits}
        errors={stats.home._errors}
        headers={headers}
      />
    );
  });

  it("renders the correct amount of scores", () => {
    const wrapper = shallow(
      <ScoreRow
        team={home_team}
        scores={home_period_scores}
        type="home"
        hits={totals.home_batter_totals.hits}
        errors={stats.home._errors}
        headers={headers}
      />
    );
    expect(wrapper.find(Score).length).toEqual(9);
  });

  it('renders the correct totals', () => {
    const wrapper = shallow(
      <ScoreRow
        team={home_team}
        scores={home_period_scores}
        type="home"
        hits={totals.home_batter_totals.hits}
        errors={stats.home._errors}
        headers={headers}
      />
    );

    expect(wrapper.find('.totals').length).toEqual(3);
    expect(wrapper.find('.totals').at(0).text()).toEqual("4");
    expect(wrapper.find('.totals').at(1).text()).toEqual("10");
    expect(wrapper.find('.totals').at(2).text()).toEqual("0");
  })
});
