import React, { useState } from "react";
import cx from "classname";
import { utils } from "ethers";
import toast from "react-hot-toast";
import Image from "next/image";
import Button from "./Button";
import PumpkinImage from "./PumpkinImage";
import Slider from "./Slider";
import FoxLoading from "./FoxLoading";
import MintSuccessModal from "./MintSuccessModal";
import useDisclosure from "../hooks/useDisclosure";
import { useAppContext } from "../context/AppContext";
import { usePumbkinContract } from "../hooks/useContract";
import { useGetPrice } from "../hooks/useGetPrice";
import { useCallWithGasPrice } from "../hooks/useCallWithGasPrice";
import styles from "../styles/home.module.css";
import { fetchImageUrl } from "../utils/fetchImageUrl";

const MintSection = () => {
  const { account, connect } = useAppContext();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [tx, setTx] = useState("");
  const contract = usePumbkinContract();
  const { callWithGasPrice } = useCallWithGasPrice();
  const { price } = useGetPrice();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [images, setImages] = useState([]);

  const handleMint = async () => {
    try {
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
        const events = listingReceipt.events;
        if (events && Array.isArray(events)) {
          const tokenIds = [];
          events.forEach(async (event) => {
            if (event.event === "Transfer") {
              const args = event.args;
              if (Array.isArray(args) && args.length >= 3) {
                const address = args[1];
                let tokenId = args[2];
                tokenIds.push(tokenId);
                // console.log("index", address, tokenId);
                // if (address && tokenId && BigNumber.isBigNumber(tokenId)) {
                //   console.log("index", tokenId.toNumber());
                //   const url = await contract.tokenURI(tokenId.toNumber());
                //   console.log("url", url);
                //   // setImages()
                //   images.push(url);
                // }
              }
            }
          });
          const images = await Promise.all(
            tokenIds.map((id) => fetchImageUrl(id))
          );
          setImages(images);
        }
        onOpen();
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.message ?? "Transaction unsuccessful");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={cx(
        "flex items-center justify-center w-full bg-center bg-cover bg-no-repeat",
        styles.mintSection
      )}
      id="mint"
    >
      <div
        className="box max-w-3xl w-full px-4 md:px-8 py-6 mx-8"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="flex flex-col text-center items-center space-y-16">
          <h4 className="text-2xl md:text-4xl">
            {loading ? "Making transaction..." : "Create your awesome Pumpkin"}
          </h4>
          {loading ? (
            <MintingView />
          ) : (
            <>
              <div className="md:flex md:items-center">
                <PumpkinImage img="/images/preview.gif" />
                <span className="px-6 text-5xl">=</span>
                <div className="flex items-center">
                  <p className="text-5xl mr-4">
                    {price ? utils.formatEther(price) : "---"}
                  </p>
                  <Image
                    src="/images/icon-bnb.webp"
                    width="48px"
                    height="48px"
                  />
                </div>
              </div>
              <div className="w-full md:w-4/5">
                <Slider value={quantity} onChange={(val) => setQuantity(val)} />
              </div>
              <Button onClick={account ? handleMint : connect}>
                {account
                  ? `Create ${
                      quantity === 1 ? "one pumpkin" : `${quantity} pumpkins`
                    }`
                  : "Connect Wallet"}
              </Button>
            </>
          )}
        </div>
      </div>
      <MintSuccessModal
        isOpen={isOpen}
        onDismiss={() => {
          onClose();
          setTx("");
          setImages([]);
          setQuantity(1);
        }}
        hash={tx}
        images={images}
      />
    </section>
  );
};

const MintingView = () => {
  return (
    <div className="w-full space-y-10">
      <FoxLoading />
    </div>
  );
};

export default MintSection;
