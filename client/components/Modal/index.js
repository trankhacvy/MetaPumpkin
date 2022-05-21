import React from "react";
import Image from "next/image";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { clickSound } from "../../utils/button";
import styles from "./styles.module.css";

const Modal = ({ children, ...rest }) => (
  <DialogOverlay {...rest}>
    <DialogContent aria-label="Modal" className={styles.dialogContent}>
      <button
        onClick={() => {
          clickSound();
          rest.onDismiss();
        }}
        className={styles.closeButton}
      >
        <Image layout="fill" src="/images/icon-close.webp" />
      </button>
      {children}
    </DialogContent>
  </DialogOverlay>
);

export default Modal;
