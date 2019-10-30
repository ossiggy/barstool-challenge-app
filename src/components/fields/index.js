import { batterFields, batterKeys } from "./batters";
import { pitcherFields, pitcherKeys } from "./pitchers";

const pitching = {
  fields: pitcherFields,
  playerKeys: pitcherKeys
};

const batting = {
  fields: batterFields,
  playerKeys: batterKeys
};

export { batting, pitching };
