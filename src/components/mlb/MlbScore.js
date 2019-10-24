import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { map, get } from 'lodash';
import Score from '../scoreboard/Score';

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

  const homeScoreByInning = marker !== 'bot' && period < 9 
    ? home_period_scores.slice(0, period - 1)
    : home_period_scores.slice(0, period);

  const homeRuns = homeScoreByInning.length 
    ? homeScoreByInning.reduce((acc, x) => acc + x)
    : 0;

  const awayScoreByInning = away_period_scores.slice(0, period);
  
  const awayRuns = awayScoreByInning.length 
    ? awayScoreByInning.reduce((acc, x) => acc + x)
    : 0;
  
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
      <Row id="away" className="game-info">
      <Col className="box-info-col away teams" xs={2}>{get(away_team, 'abbreviation')}</Col>
        {map(headers, (slot, i) => {
          let scoreByInning;
          if (awayScoreByInning[i]){
              scoreByInning = <Score score={awayScoreByInning[i]} />
            } else {
              scoreByInning = <Score score={0} />
            }
            return  (
              <Col className="box-info-col" key={`away-score-${i}`}>
                  {scoreByInning}
              </Col>
            )
        })}
          <Col className="box-info-col totals runs">{awayRuns}</Col>
          <Col className="box-info-col totals">{get(totals, 'away_batter_totals.hits')}</Col>
          <Col className="box-info-col totals">{get(stats, 'away._errors')}</Col>
      </Row>
      <Row id="home" className="game-info">
      <Col className="box-info-col home teams" xs={2}>{get(home_team, 'abbreviation')}</Col>
        {map(headers, (slot, i) => {
          let scoreByInning;
          if (homeScoreByInning[i]){
              scoreByInning = <Score score={homeScoreByInning[i]} />
            } else {
              scoreByInning = <Score score={0} />
            }
            return  (
              <Col className="box-info-col" key={`home-score-${i}`}>
                  {scoreByInning}
              </Col>
            )
        })}
        <Col className="box-info-col totals runs">{homeRuns}</Col>
        <Col className="box-info-col totals">{get(totals, 'home_batter_totals.hits')}</Col>
        <Col className="box-info-col totals">{get(stats, 'home._errors')}</Col>
      </Row>
    </Container>
  );
}