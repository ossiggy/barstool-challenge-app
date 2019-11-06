import React from "react";
import { render } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import { shallow, mount } from "enzyme";
import ScoreBoard from "../../scoreboard/ScoreBoard";
import useGameFeed from "../../../hooks/useGameFeed";
import { testHook } from "../../../hooks/TestHook";

const mlbData = require("../structures/mlbData.json");
const nbaData = require("../structures/nbaData.json");

describe("ScoreBoard", () => {
  let wrapper;
  let useEffect;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  describe("MLB ScoreBoard", () => {
    beforeAll(() => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mlbData)
        })
      );
    });

    afterEach(() => {
      global.fetch.mockClear();
    });

    afterAll(() => {
      global.fetch.mockRestore();
    });

    it("renders without crashing", () => {
        shallow(<ScoreBoard url="https://foo.com" />);
    });

    it("renders the value given", () => {
      useEffect = jest.spyOn(React, "useEffect");
      mockUseEffect();
      act(() => {
        wrapper = mount(<ScoreBoard url="https://foo.com" />)
      });
      console.log(wrapper.debug());
    });
  });
});
