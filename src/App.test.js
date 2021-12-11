import "../src/__mocks__/jestSetup";

import { render, screen } from "@testing-library/react";

import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

describe("App should", () => {
  test("renders learn react link", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
