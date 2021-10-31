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
      <Button style={{ zIndex: 100 }} onClick={handleConnect}>
        {account ? `${truncateHash(account)}` : "Connect"}
      </Button>
    </header>
  );
};

export default Header;
