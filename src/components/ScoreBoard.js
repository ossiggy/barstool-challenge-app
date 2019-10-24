import React from 'react';
import { get } from 'lodash';
import { Button } from 'react-bootstrap';
import MlbScore from './MlbScore';
import NbaScore from './NbaScore';
import TeamInfo from './TeamInfo';
import GameStatus from './GameStatus';
import useMoveGame from '../hooks/useMoveGame';
import useGameFeed from '../hooks/useGameFeed';

import '../styles/ScoreBoard.css';

export default function ScoreBoard(props){
  const [data, loading, isError] = useGameFeed(props.url);
  const [
    period,
    status,
    marker,
    buttonText,
    incrementMlb,
    incrementNba,
  ] = useMoveGame(0, 'bot');
  
  let content;
  let league;

  if (loading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>Error</div>;
  } else if(get(data, 'league') === 'NBA'){
    league='NBA';
    content = <NbaScore {...data} />;
  } else if (get(data, 'league') === 'MLB') {
    console.log(data);
    league='MLB';
    content = <MlbScore data={data} period={period} marker={marker} />;
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    if (league === 'MLB'){
      incrementMlb(marker, period);
    } else if (league === 'NBA'){
      incrementNba(marker, period);
    }
  }

  const { start_date_time } = get(data, 'eventInfo', ''); 

  return (
    <div id="scoreboard">
      <div id="team-info-container">
        <TeamInfo team={get(data, 'away_team')} status="away" />
          <GameStatus 
            status={status}
            startDateTime={start_date_time}
            period={period}
            marker={marker}/>
        <TeamInfo team={get(data, 'home_team')} status="home"/>
      </div>
      {content}
      <Button variant="success" onClick={(e) => handleClick(e)}>{buttonText}</Button>
    </div>
  );
};