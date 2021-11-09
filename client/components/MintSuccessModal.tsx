import React from "react";
import Image from "next/image";
import { DialogOverlayProps } from "@reach/dialog";
import Modal from "./Modal";

interface MintSuccessModalProps extends DialogOverlayProps {
  hash?: string;
  images?: string[];
}

const MintSuccessModal = ({ hash, images, ...rest }: MintSuccessModalProps) => {
  const clazz =
    images.length === 1
      ? "w-full flex items-center justify-center mt-10"
      : "w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 overflow-y-auto";

  const url = `${process.env.BLOCK_EXPLORER_URL}/tx/${hash}`;

  return (
    <Modal {...rest}>
      <h2 className="text-2xl md:text-4xl text-center">Created successfully</h2>
      <div className={clazz}>
        {images.map((image) => (
          <div key={image}>
            <Image width="500px" height="500px" src={image} objectFit="cover" />
          </div>
        ))}
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-lg md:text-2xl text-center text-black mt-8"
      >
        View on BSC scan
      </a>
    </Modal>
  );
};

export default MintSuccessModal;
