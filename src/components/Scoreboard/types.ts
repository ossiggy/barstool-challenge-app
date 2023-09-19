import { ReactElement } from "react";
import { GameStatsSchemaBaseProps } from "../types";

export interface ScoreboardPropTypes {
  league: string;
  data: GameStatsSchemaBaseProps;
  children: ReactElement;
}
