import React from "react";
import Modal from "../Modal";
import styles from "./SuccessModal.module.css";

const SuccessModal = ({ hash, ...rest }) => {
  const url = `${process.env.BLOCK_EXPLORER_URL}/tx/${hash}`;

  return (
    <Modal {...rest}>
      <div className={styles.container}>
        <h4 className={styles.title}>Transaction Successful</h4>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewScan}
        >
          View on BSC scan
        </a>
      </div>
    </Modal>
  );
};

export default SuccessModal;
