import React from "react";

import { SliderVideo } from "../SliderVideo";

import { videoList } from "./videoList";

const SliderVideoComponent = () => {
  return <SliderVideo videoList={videoList} />;
};

export { SliderVideoComponent };
