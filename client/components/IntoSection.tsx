import React from "react";
import cx from "classname";
import Button from "./Button";
import PumpkinImage from "./PumpkinImage";
import { useAppContext } from "../context/AppContext";
import styles from "../styles/home.module.css";

const IntroSection = () => {
  const { account, openConnectWallet } = useAppContext();

  const handleClick = () => {
    if (!account) {
      openConnectWallet();
    } else {
      document.getElementById("mint").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <section
      className={cx(
        "flex items-center justify-center w-full bg-center bg-cover bg-no-repeat",
        styles.into
      )}
      id="intro"
    >
      <div
        className="box max-w-3xl px-4 md:px-8 py-6 mx-8"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="flex flex-col text-center items-center">
          <PumpkinImage img="/images/preview.gif" />
          <p className="text-lg md:text-2xl font-bold my-6 tracking-wider md:tracking-widest">
            MetaPumpkins are a collection of {process.env.TOTAL_PUMPKINS}{" "}
            randomly generated and unique creatures living on the BSC blockchain
            in the form of ERC-721 tokens
          </p>
          <Button onClick={handleClick}>
            {!account ? "Connect wallet to create" : "Create one"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
