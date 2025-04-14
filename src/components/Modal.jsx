import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <div className="fixed top-0 w-full h-full flex justify-center items-center">
      <div className="absolute inset-0 bg-gray-900 opacity-50 "></div>
      <div className="relative inset-0">{children}</div>
    </div>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
