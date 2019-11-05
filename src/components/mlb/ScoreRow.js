import React from "react";
import { map, get } from "lodash";
import { Row, Col } from "react-bootstrap";
import Score from "../scoreboard/Score";

export default function ScoreRow({
  team,
  scores,
  type,
  hits,
  errors,
  headers
}) {
  const runs = scores.length ? scores.reduce((acc, x) => acc + x) : 0;

  return (
    <Row id={type} className="game-info">
      <Col className={`box-info-col ${type} teams`} xs={2}>
        {get(team, "abbreviation")}
      </Col>
      {map(headers, (slot, i) => {
        let scoreByInning;
        if (scores[i] >= 0) {
          scoreByInning = <Score score={scores[i]} />;
        } else {
          scoreByInning = <Score score={""} />;
        }
        return (
          <Col className="box-info-col" key={`${type}-score-${i}`}>
            {scoreByInning}
          </Col>
        );
      })}
      <Col className="box-info-col totals runs">{runs}</Col>
      <Col className="box-info-col totals">{hits}</Col>
      <Col className="box-info-col totals">{errors}</Col>
    </Row>
  );
}
