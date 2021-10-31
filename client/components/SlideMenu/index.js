import React from "react";
import Button from "../Button";
import { clickSound } from "../../utils/button";
import truncateHash from "../../utils/truncateHash";
import { useAppContext } from "../../context/AppContext";
import styles from "./SlideMenu.module.css";

const SlideMenu = ({
  onInfoClick,
  onRoadmapClick,
  onFAQClick,
  onAddressClick,
}) => {
  const { account, connect } = useAppContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Button
          onClick={() => {
            clickSound();
            if (!account) {
              connect();
            } else {
              onAddressClick && onAddressClick();
            }
          }}
          className={styles.connect}
        >
          {account ? `${truncateHash(account)}` : "Connect"}
        </Button>
        <Button
          onClick={() => {
            clickSound();
            onInfoClick && onInfoClick();
          }}
          className={styles.info}
        >
          Info
        </Button>
        <Button
          onClick={() => {
            clickSound();
            onRoadmapClick && onRoadmapClick();
          }}
          className={styles.roadmap}
        >
          Roadmap
        </Button>
        <Button
          onClick={() => {
            clickSound();
            onFAQClick && onFAQClick();
          }}
          className={styles.faq}
        >
          FAQ
        </Button>
      </div>
    </div>
  );
};

export default SlideMenu;
