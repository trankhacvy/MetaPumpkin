import React from "react";
import Logo from "../Logo";
import Button from "../Button";
import { useAppContext } from "../../context/AppContext";
import truncateHash from "../../utils/truncateHash";
import { clickSound } from "../../utils/button";
import styles from "./Header.module.css";

const Header = ({ onClick }) => {
  const { account, connect } = useAppContext();

  const handleConnect = () => {
    clickSound();
    if (!account) {
      connect();
    } else {
      onClick && onClick();
    }
  };

  return (
    <header className={styles.container}>
      <Logo />
    </header>
  );
};

export default Header;
