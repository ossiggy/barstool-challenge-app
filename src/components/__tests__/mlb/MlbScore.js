import React from 'react';
import { shallow } from 'enzyme';
import Score from '../../scoreboard/Score';
import MlbScore from '../../mlb/MlbScore';
import ScoreRow from '../../mlb/ScoreRow';

const data = require('../structures/mlbData.json');

describe('MlbScore', () => {

  it('renders without crashing', () => {
    shallow(<MlbScore data={data} period={7} marker="bot"/>);
  });

  it('renders 13 box-info columns', () => {
    const wrapper = shallow(<MlbScore data={data} period={7} marker="bot"/>);
    expect(wrapper.find('.box-info-col').length).toEqual(13);
  });

  it('renders 12 Score components', () => {
    const wrapper = shallow(<MlbScore data={data} period={7} marker="bot"/>);
    expect(wrapper.find(Score).length).toEqual(12);
  });

  it('renders 2 ScoreRow components', () => {
    const wrapper = shallow(<MlbScore data={data} period={7} marker="bot"/>);
    expect(wrapper.find(ScoreRow).length).toEqual(2);
  });

  it('passes the correct props to home and away ScoreRows', () => {
    const wrapper = shallow(<MlbScore data={data} period={7} marker="bot"/>);
    const scoreRows = wrapper.find(ScoreRow);
    expect(scoreRows.at(0).prop('team')).toEqual(data.away_team);
    expect(scoreRows.at(0).prop('hits')).toEqual(data.totals.away_batter_totals.hits);
    expect(scoreRows.at(0).prop('errors')).toEqual(data.stats.away._errors);
    expect(scoreRows.at(1).prop('team')).toEqual(data.home_team);
    expect(scoreRows.at(1).prop('hits')).toEqual(data.totals.home_batter_totals.hits);
    expect(scoreRows.at(1).prop('errors')).toEqual(data.stats.home._errors);
  });
});