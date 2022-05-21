import React from "react";
import Modal from "../Modal";
import Button from "../Button";
import { WalletConnectorType } from "../../utils/connector";
import { useAppContext } from "../../context/AppContext";

const ConnectWalletModal = () => {
  const { connect, connectWalletModalVisible, closeConnectWallet } =
    useAppContext();

  const handleConnectWallet = (walletKey: WalletConnectorType) => {
    connect(walletKey);
  };

  return (
    <Modal isOpen={connectWalletModalVisible} onDismiss={closeConnectWallet}>
      <div className="text-center pb-20">
        <h2 className="text-4xl mb-10 lg:mb-24">Connect Wallet</h2>
        <div className="lg:flex justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          <Button
            className="inline-flex items-center px-8"
            style={{ minWidth: "16rem" }}
            onClick={() => handleConnectWallet("InjectedConnector")}
          >
            <img className="w-12 h-12" src="/images/ic-metamask.webp" />
            <span className="ml-4 text-primary">Metamask</span>
          </Button>
          <Button
            className="inline-flex items-center px-8"
            style={{ minWidth: "16rem" }}
            onClick={() => handleConnectWallet("WalletLinkConnector")}
          >
            <img className="w-12 h-12" src="/images/ic-coinbase.png" />
            <span className="ml-4">Coinbase Wallet</span>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConnectWalletModal;
