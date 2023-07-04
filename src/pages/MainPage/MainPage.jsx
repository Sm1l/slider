import React from "react";
import { SliderWithModal } from "../../components/SliderWithModal";
import { SliderVideoComponent } from "../../components/SliderVideoFolder/SliderVideoComponent";

import "./mainpage.scss";

const MainPage = () => {
  return (
    <div className="mainpage">
      <SliderWithModal />
      <SliderVideoComponent />
    </div>
  );
};

export { MainPage };
