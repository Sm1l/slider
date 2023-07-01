import React from "react";

import { SliderWithModal } from "./components/SliderWithModal/SliderWithModal";
import { MainPage } from "./pages/MainPage/MainPage";

import "./app.scss";
import "./custom.scss";

const App = () => {
  return (
    <div className="app">
      {/* <SliderWithModal /> */}
      <MainPage />
    </div>
  );
};

export { App };
