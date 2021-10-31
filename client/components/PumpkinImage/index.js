import React from "react";
import Image from "next/image";
import cx from "classname";
import styles from "./PumpkinImage.module.css";

const PumpkinImage = ({ img }) => (
  <div className={styles.imageContainer}>
    <Image
      priority
      src={img}
      layout="fill"
      className={cx(styles.frame, styles.image)}
    />
    <Image
      src="/images/asset-frame.webp"
      layout="fill"
      className={styles.frame}
      priority
    />
  </div>
);

export default PumpkinImage;
