import React from "react";
import { Slider } from "./components/Slider";
import { ModalImg } from "./components/ModalImg/ModalImg";
import { SliderWithModal } from "./components/SliderWithModal/SliderWithModal";

import "./app.scss";
import "./custom.scss";

const App = () => {
  return (
    <div className="app">
      {/* <Slider />
      <ModalImg /> */}
      <SliderWithModal />
    </div>
  );
};

export { App };
