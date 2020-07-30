import React from "react"
import renderer from "react-test-renderer"

import Home from "../src/pages"

describe("Home", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Home siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})