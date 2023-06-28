import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { modalImgVariants, modalOverlayVariants } from "./animationModalScreenshot";

import "./modalImg.scss";

const ModalImg = ({ modalIsActive, setModalIsActive, selectedImg }) => {
  const overlayHandleClick = (e) => {
    e.stopPropagation();
    setModalIsActive(false);
  };

  //*close modal "Escape"
  useEffect(() => {
    const escCloseModal = (e) => {
      if (e.key === "Escape") {
        setModalIsActive(false);
      }
    };
    if (modalIsActive) {
      window.addEventListener("keydown", escCloseModal);
    }

    return () => {
      window.removeEventListener("keydown", escCloseModal);
    };
  }, [modalIsActive, setModalIsActive]);

  //*disable scroll
  useEffect(() => {
    if (modalIsActive) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalIsActive]);

  return (
    <>
      <AnimatePresence>
        {modalIsActive && (
          <motion.div
            className="modalimg__overlay"
            onClick={overlayHandleClick}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={modalOverlayVariants}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="modalimg__container"
              initial={"hidden"}
              animate={"visible"}
              exit={"hidden"}
              variants={modalImgVariants}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img className="modalimg__image" src={selectedImg} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { ModalImg };
