/* eslint-disable react/prop-types */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import store from "redux/store";
import reducers from "redux/store/reducers";

import i18nConfigFile from "i18n";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";
import theme from "theme";

const defaultInitialState = store.getState();

const AllTheProviders = ({
  children,
  state = defaultInitialState,
  lang = "es",
}) => {
  i18nConfigFile.changeLanguage(lang);

  return (
    <I18nextProvider i18n={i18nConfigFile}>
      <Provider store={createStore(reducers, state)}>
        <ThemeProvider theme={theme}>
          <HashRouter>{children}</HashRouter>
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, {
    wrapper: (props) => <AllTheProviders {...props} {...options?.props} />,
    ...options,
  });

export * from "@testing-library/react";

export { customRender as render };
