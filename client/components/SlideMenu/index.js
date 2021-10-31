import React from "react";
import Button from "../Button";
import { clickSound } from "../../utils/button";
import styles from "./SlideMenu.module.css";

const SlideMenu = ({ onInfoClick, onRoadmapClick, onFAQClick }) => (
  <div className={styles.container}>
    <div className={styles.content}>
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

export default SlideMenu;
