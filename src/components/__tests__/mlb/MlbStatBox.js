import React from 'react';
import { Button } from "react-bootstrap";
import { shallow, mount } from 'enzyme';
import MlbStatBox from '../../mlb/MlbStatBox';
import PlayerStats from '../../mlb/PlayerStats';
import { pitching, batting } from '../../fields';

const data = require('../structures/mlbData.json');

describe('MlbStatBox', () => {
  it('renders without crashing', () => {
    shallow(<MlbStatBox batters={data.stats.away.batters} pitchers={data.stats.away.pitchers}/>);
  });

  it('renders two buttons to view pitchers and batters', () => {
    const wrapper = shallow(<MlbStatBox batters={data.stats.away.batters} pitchers={data.stats.away.pitchers}/>);
    expect(wrapper.find(Button).length).toEqual(2);
  });

  it('renders an element to view stats', () => {
    const wrapper = shallow(<MlbStatBox batters={data.stats.away.batters} pitchers={data.stats.away.pitchers}/>);
    expect(wrapper.find('.player-stats').length).toEqual(1);
  });

  it('Should render the batter stats when selected', () => {
    const wrapper = mount(<MlbStatBox batters={data.stats.away.batters} pitchers={data.stats.away.pitchers}/>);
    wrapper.find(Button).at(0).simulate('click');
    const playerStats = wrapper.find(PlayerStats);
    expect(playerStats.length).toEqual(1);
    expect(playerStats.at(0).prop('keys')).toEqual(batting);
    expect(playerStats.at(0).prop('players')).toEqual(data.stats.away.batters);
  });

  it('Should render the pitcher stats when selected', () => {
    const wrapper = mount(<MlbStatBox batters={data.stats.away.batters} pitchers={data.stats.away.pitchers}/>);
    wrapper.find(Button).at(1).simulate('click');
    const playerStats = wrapper.find(PlayerStats);
    expect(playerStats.length).toEqual(1);
    expect(playerStats.at(0).prop('keys')).toEqual(pitching);
    expect(playerStats.at(0).prop('players')).toEqual(data.stats.away.pitchers);
  });
})