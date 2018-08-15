import * as React from "react";
import * as ReactDOM from "react-dom";

import { configure } from "mobx";
import { Provider } from "mobx-react";

import { createStores } from "./stores";

import App from "./App";

// enforce usage of mobx actions
configure({ enforceActions: true });

require("./styles/index.css");

const mount = (RootApp: any) => {
  chrome.storage.local.get("spec", ({ spec }) => {
    ReactDOM.render(
      <Provider {...createStores({ spec })}>
        <RootApp />
      </Provider>,
      document.getElementById("root")
    );
  });
};

mount(App);
