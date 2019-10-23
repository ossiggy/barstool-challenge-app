import React from 'react';
import { get } from 'lodash';
import useGameFeed from '../hooks/useGameFeed';
import MlbScore from './MlbScore';
import NbaScore from './NbaScore';
import TeamInfo from './TeamInfo';
import '../styles/ScoreBoard.css';

export default function ScoreBoard(props){
  const [data, loading, isError] = useGameFeed(props.url);

  let content;
  if (loading) {
    content = <div>Loading...</div>
  } else if (isError) {
    content = <div>Error</div>
  } else if(get(data, 'league') === 'NBA'){
      content = <NbaScore {...data} />
  } else if (get(data, 'league') === 'MLB') {
    content = <MlbScore {...data} />
  }

  return (
    <div id="scoreboard">
      <TeamInfo away={get(data, 'away_team')} home={get(data, 'home_team')} />
      {content}
    </div>
  );
};