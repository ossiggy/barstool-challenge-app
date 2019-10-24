import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Batting from './Batting';
import Fielding from './Fielding';
import Pitching from './Pitching';

export default function MlbStatBox({batters, fielding, pitchers}) {
  const [viewing, setViewing] = useState('batters');
  const handleClick = (e, view) => {
    e.preventDefault();
    console.log(view);
    setViewing(view);
  };

  let viewStats;

  if (viewing === 'batters') {
    viewStats = <Batting {...batters}/>
  } else if (viewing === 'pitchers') {
    viewStats = <Pitching {...pitchers}/>
  } else if (viewing === 'fielders') {
    viewStats = <Fielding {...fielding}/>
  }
  
  return (
    <div className="mlb-stat-box">
      <div className="mlb-button-box">
        <Button className="mlb-stat-box-button" variant='outline-secondary' onClick={(e) => handleClick(e, 'batters')}>Batting</Button>
        <Button className="mlb-stat-box-button" variant='outline-secondary' onClick={(e) => handleClick(e, 'pitchers')}>Pitching</Button>
        <Button className="mlb-stat-box-button" variant='outline-secondary' onClick={(e) => handleClick(e, 'fielders')}>Fielding</Button>
      </div>
      <div className="player-stats">
        {viewStats}
      </div>
    </div>
  )
};