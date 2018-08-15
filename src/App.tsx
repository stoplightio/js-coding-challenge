import * as React from "react";

import { inject, observer } from "mobx-react";

import { IAppProps, IAppState } from "./types";

const logo = require("../public/icon.png");
const appStyles = require("./styles/App.css");

@inject("appStore")
@observer
class App extends React.Component<IAppProps, IAppState> {
  public render() {
    const { appStore } = this.props;

    console.log("Here's the spec:", appStore.spec);

    return (
      <div className={appStyles.app}>
        <div className={appStyles.appHeader}>
          <img src={logo} className={appStyles.appLogo} alt="logo" />
          <h1>Stoplight Coding Challenge</h1>
        </div>

        <p className={appStyles.appIntro}>
          To get started, edit <code>src/App.tsx</code>
        </p>

        <p>
          Right click and select <strong>Inspect</strong> to open DevTools. In
          DevTools, press <code>Ctrl+R</code> to reload
        </p>
      </div>
    );
  }
}

export default App;
