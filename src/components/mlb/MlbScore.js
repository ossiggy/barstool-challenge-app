import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { map, get } from 'lodash';
import Score from '../scoreboard/Score';
import ScoreRow from './ScoreRow';

import '../../styles/MlbScore.css'

export default function MlbScore(props) {
  const {
    stats,
    totals,
    away_team,
    home_team,
    home_period_scores,
    away_period_scores,
  } = get(props, 'data');

  const { marker, period } = props;

  let homeScoreByInning 
  if (marker !== 'bot'){
    if (period <= 9) {
      homeScoreByInning = home_period_scores.slice(0, period - 1)
    }
  } else {
    homeScoreByInning = home_period_scores.slice(0, period)
  }

  const awayScoreByInning = away_period_scores.slice(0, period);
  
  const headers = new Array(9);

  return (
    <Container className="scoreboard-container">
      <Row id="headers">
        <Col className="box-info-col" xs={2}></Col>
        {map(headers, (header, i) => {
          return (
            <Col className="box-info-col" key={`inning-${i}`}>
              <Score score={i + 1} />
            </Col>
          )
        })}
        <Col className="box-info-col header">
          <Score key='header-runs' score='R'/>
        </Col>
        <Col className="box-info-col header">
          <Score key='header-hits' score='H' />
        </Col>
        <Col className="box-info-col header" id="errors-header">
          <Score key='header-errors' score='E'/>
        </Col>
      </Row>
        <ScoreRow 
          team={away_team} 
          type="away" 
          scores={awayScoreByInning}
          hits={get(totals, 'away_batter_totals.hits')}
          errors={get(stats, 'away._errors')}
          headers={headers} />
          <ScoreRow 
          team={home_team} 
          type="home" 
          scores={homeScoreByInning}
          hits={get(totals, 'home_batter_totals.hits')}
          errors={get(stats, 'home._errors')}
          headers={headers} />
    </Container>
  );
}