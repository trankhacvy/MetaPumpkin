import React from "react";
import Image from "next/image";
import Modal from "../Modal";
import styles from "./ComingSoonModal.module.css";

const ComingSoonModal = (props) => {
  return (
    <Modal {...props}>
      <div className={styles.container}>
        <Image
          src="/images/sad-pumpkin.webp"
          width="160px"
          height="160px"
          priority
        />
        <p className={styles.intro}>
          Our Apologies <br />
          We are gather content for this page <br />
          so please <br />
          Come Back Soon
        </p>
        <div></div>
      </div>
    </Modal>
  );
};

export default ComingSoonModal;
