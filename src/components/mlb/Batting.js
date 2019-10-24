import React from 'react';
import { map, get } from 'lodash';
import { Container, Row, Col } from 'react-bootstrap';
import Score from '../scoreboard/Score';

export default function Batting(props) {
  const fields = [
    `${props[0].team_abbreviation}`,
    'AB',
    'H',
    'R',
    'RBI',
    'BB',
    'K',
    'AVG',
    'OBP',
    'SLG',
  ];

  const playerKeys = [
    'last_name',
    'at_bats',
    'hits',
    'runs',
    'rbi',
    'walks',
    'strike_outs',
    'avg_string',
    'obp_string',
    'slg_string',
  ];
  
  return (
    <Container className="player-stats">
      <Row className="player-stats-headers">
      {map(fields, (field, i) => {
        return (
          <Col key={`stats-header-${i}`} className={`stats-header position-${i}`}>
            <Score score={field}/>
          </Col>
        )
      })}
      </Row>
      {map(props, (player, i) => {
        return(
          <Row className="player-stats-row" key={`player-row-${i}`}>
            {map(playerKeys, (key, i) => {
              return (
                <Col key={`stats-player-${i}`} className={`player-stats-col position-${i}`}>
                  <Score score={i !== 0 && typeof player[key] === 'string' ? player[key].substring(0, 4) : player[key]}/>
                </Col>
              )
            })}
        </Row>
        )
      })}
    </Container>
  );
}