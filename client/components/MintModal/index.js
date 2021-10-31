import React, { useState } from "react";
import { utils } from "ethers";
import toast from "react-hot-toast";
import Image from "next/image";
import Modal from "../Modal";
import Button from "../Button";
import Slider from "../Slider";
import FoxLoading from "../FoxLoading";
import { useAppContext } from "../../context/AppContext";
import { usePumbkinContract } from "../../hooks/useContract";
import { useGetPrice } from "../../hooks/useGetPrice";
import { useCallWithGasPrice } from "../../hooks/useCallWithGasPrice";
import styles from "./MintModal.module.css";
import { clickSound } from "../../utils/button";

const IMAGE_URL =
  "https://pbs.twimg.com/media/FCNh_HTWEAAIhn8?format=jpg&name=4096x4096";

const MintModal = ({ onSuccess, ...rest }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [tx, setTx] = useState("");
  const contract = usePumbkinContract();
  const { callWithGasPrice } = useCallWithGasPrice();
  const { price } = useGetPrice();
  const { account, connect } = useAppContext();

  const handleMint = async () => {
    try {
      clickSound();
      setLoading(true);
      const price = await contract.price();
      const mintTx = await callWithGasPrice(
        contract,
        "mintPumpkin",
        [quantity],
        {
          value: price.mul(quantity).toString(),
        }
      );
      setTx(mintTx.hash);
      const listingReceipt = await mintTx.wait();
      if (listingReceipt.status) {
        rest.onDismiss();
        onSuccess(mintTx.hash);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.message ?? "Transaction unsuccessful");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal {...rest}>
      <div className={styles.container}>
        <h4 className={styles.title}>
          {loading ? "Making transaction..." : "Create your awesome Pumpkin"}
        </h4>

        {loading ? (
          <MintingView hash={tx} />
        ) : (
          <>
            <div className={styles.priceInfo}>
              <Image
                src="/images/gif.png"
                width="160px"
                objectFit="cover"
                height="160px"
              />
              <span className={styles.equal}>=</span>
              <div className={styles.priceWrap}>
                <p className={styles.price}>
                  {price ? utils.formatEther(price) : "---"}
                </p>
                <Image src="/images/icon-bnb.webp" width="48px" height="48px" />
              </div>
            </div>
            <div className={styles.slider}>
              <Slider value={quantity} onChange={(val) => setQuantity(val)} />
            </div>
            <div className={styles.actions}>
              {account ? (
                <>
                  <Button
                    onClick={() => handleMint()}
                    className={styles.button}
                  >
                    {`Create ${
                      quantity === 1 ? "one pumpkin" : `${quantity} pumpkins`
                    }`}
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => {
                    clickSound();
                    connect();
                  }}
                >
                  Connect Wallet{" "}
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

const MintingView = ({ hash }) => {
  const url = `${process.env.BLOCK_EXPLORER_URL}/tx/${hash}`;
  return (
    <div className={styles.mintingContainer}>
      <FoxLoading />
      {hash && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewScan}
        >
          View on BSC scan
        </a>
      )}
    </div>
  );
};

export default MintModal;
