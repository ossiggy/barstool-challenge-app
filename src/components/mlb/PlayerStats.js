import React from "react";
import { map } from "lodash";
import { Container, Row, Col } from "react-bootstrap";
import Score from "../scoreboard/Score";

export default function PlayerStats({ keys, abbr, players }) {
  const { fields: original, playerKeys } = keys;

  let fields;
  if (original) {
    fields = [abbr, ...original];
  }

  return (
    <Container className="player-stats">
      <Row className="player-stats-headers">
        {map(fields, (field, i) => {
          return (
            <Col
              key={`stats-header-${i}`}
              className={`stats-header position-${i}`}
            >
              <Score score={field} />
            </Col>
          );
        })}
      </Row>
      {map(players, (player, i) => {
        return (
          <Row className="player-stats-row" key={`player-row-${i}`}>
            {map(playerKeys, (key, i) => {
              return (
                <Col
                  key={`stats-player-${i}`}
                  className={`player-stats-col position-${i}`}
                >
                  <Score
                    score={
                      i !== 0 && typeof player[key] === "string"
                        ? player[key].substring(0, 4)
                        : player[key]
                    }
                  />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
}
