import React from "react";
import Modal from "../Modal";
import PumpkinImage from "../PumpkinImage";
import Button from "../Button";
import { useAppContext } from "../../context/AppContext";
import styles from "./InfoModal.module.css";
import { clickSound } from "../../utils/button";

const InfoModal = ({ onClick, ...rest }) => {
  const { account, connect } = useAppContext();

  const handleClick = () => {
    clickSound();
    if (!account) {
      connect();
    } else {
      onClick();
    }
  };

  return (
    <Modal {...rest}>
      <div className={styles.container}>
        <PumpkinImage />
        <p className={styles.intro}>
          Meta Pumpkin are a collection of {process.env.TOTAL_PUMPKINS} randomly
          generated and unique creatures living on the BSC blockchain in the
          form of ERC-721 tokens
        </p>
        <Button onClick={handleClick}>
          {!account ? "Connect wallet to create" : "Create one"}
        </Button>
      </div>
    </Modal>
  );
};

export default InfoModal;
