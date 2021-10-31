import React from "react";
import Image from "next/image";
import cx from "classname";
import styles from "./PumpkinImage.module.css";

const IMAGE_URL =
  "https://pbs.twimg.com/media/FCNh_HTWEAAIhn8?format=jpg&name=4096x4096";

const PumpkinImage = () => (
  <div className={styles.imageContainer}>
    <Image
      src={IMAGE_URL}
      layout="fill"
      className={cx(styles.frame, styles.image)}
    />
    <Image
      src="/images/asset-frame.webp"
      layout="fill"
      className={styles.frame}
    />
  </div>
);

export default PumpkinImage;
