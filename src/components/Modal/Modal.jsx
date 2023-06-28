import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Modal = ({ photo, onClose }) => {
  const [scrollLocked, setScrollLocked] = useState(true);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleModalClose = () => {
    setScrollLocked(false);
    onClose();
  };

  const handleModalOpen = () => {
    setScrollLocked(true);
  };

  // Заблокировать скролл страницы при открытии модального окна
  if (scrollLocked) {
    disableBodyScroll();
  } else {
    enableBodyScroll();
  }

  return (
    <div className="modal__overlay" onClick={handleOverlayClick}>
      <div className="modal__content" onClick={handleModalClick}>
        <img src={photo} alt="фотография" onClick={handleModalClose} />
      </div>
    </div>
  );
};

export { Modal };
