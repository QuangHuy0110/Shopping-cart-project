import { render, screen } from "@testing-library/react";
import Layout from "../Layout";
import { Provider } from "react-redux";
import { store } from "../../../store/index";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
test("layout should render", () => {
  render(
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  );
  // eslint-disable-next-line testing-library/no-debugging-utils
});
