import React, { useState } from "react";

import { ModalImg } from "../ModalImg";
import { Slider } from "../Slider";

const SliderWithModal = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Slider modalIsActive={modalIsActive} setModalIsActive={setModalIsActive} setSelectedImg={setSelectedImg} />
      <ModalImg modalIsActive={modalIsActive} setModalIsActive={setModalIsActive} selectedImg={selectedImg} />
    </>
  );
};

export { SliderWithModal };
