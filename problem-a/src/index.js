import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App.js";

import senatorsList from "./data/senators.json";

ReactDOM.render(<App senators={senatorsList} />, document.getElementById("root"));


