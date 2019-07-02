import "react-native";
import React from "react";
import Reset from "../screens/Reset";
import renderer from "react-test-renderer";

test("Reset Screen Snapshot", () => {
  const snap = renderer.create(<Reset />).toJSON();
  expect(snap).toMatchSnapshot();
});
