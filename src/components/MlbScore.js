import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { map, get } from 'lodash';
import Score from './Score';

import '../styles/MlbScore.css'

export default function MlbScore(props) {
  const {
    stats,
    totals,
    away_team,
    home_team,
    eventInfo,
    officials,
    home_period_scores,
    away_period_scores,
  } = props;

  console.log(totals);

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
        {map(away_period_scores, (score, i) => {
          return (
            <Col className="box-info-col" key={`away-score-${i}`}>
              <Score score={score} />
            </Col>
          )
        })}
          <Col className="box-info-col totals runs">{get(totals, 'away_batter_totals.runs')}</Col>
          <Col className="box-info-col totals">{get(totals, 'away_batter_totals.hits')}</Col>
          <Col className="box-info-col totals">{get(stats, 'away_errors')}</Col>
      </Row>
      <Row id="home" className="game-info">
      <Col className="box-info-col home teams" xs={2}>{get(home_team, 'abbreviation')}</Col>
        {map(home_period_scores, (score, i) => {
          return (
            <Col className="box-info-col" key={`home-score-${i}`}>
              <Score score={score} />
            </Col>
          )
        })}
        <Col className="box-info-col totals runs">{get(totals, 'home_batter_totals.runs')}</Col>
        <Col className="box-info-col totals">{get(totals, 'home_batter_totals.hits')}</Col>
        <Col className="box-info-col totals">{get(stats, 'home_errors')}</Col>
      </Row>
    </Container>
  );
}