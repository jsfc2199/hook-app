import ReactDOM from "react-dom/client";

import "./08-Reducer/intro-reducer";

import MainApp from "./09-useContext/Main";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
