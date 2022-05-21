import { useCallback, useEffect, useState } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import toast from "react-hot-toast";
import { createContext } from "../utils/createContext";
import {
  walletConnectors,
  WalletConnectorType,
  setupNetwork,
} from "../utils/connector";

export interface ContextValues {
  connect: (key: WalletConnectorType) => void;
  disconnect: () => void;
  account: string;
  connectWalletModalVisible: boolean;
  openConnectWallet: () => void;
  closeConnectWallet: () => void;
}

const [Provider, useAppContext] = createContext<ContextValues>();

const AppContextProvider = ({ children }) => {
  const [connectWalletModalVisible, setConnectWalletModalVisible] =
    useState(false);
  const { account, activate, deactivate } = useWeb3React();

  const connect = useCallback(
    (walletKey: WalletConnectorType) => {
      activate(walletConnectors[walletKey].connector, async (error) => {
        if (error instanceof UnsupportedChainIdError) {
          await setupNetwork();
          activate(walletConnectors[walletKey].connector, (error) => {
            console.error(error);
          });
        } else {
          console.error(error);
          toast.error(error.message);
        }
      });
    },
    [account, activate]
  );

  const openConnectWallet = useCallback(
    () => setConnectWalletModalVisible(true),
    [setConnectWalletModalVisible]
  );

  const closeConnectWallet = useCallback(
    () => setConnectWalletModalVisible(false),
    [setConnectWalletModalVisible]
  );

  useEffect(() => {
    if (!!account && connectWalletModalVisible) {
      closeConnectWallet();
    }
  }, [account, connectWalletModalVisible, closeConnectWallet]);

  const value = {
    connect,
    disconnect: deactivate,
    account,
    connectWalletModalVisible,
    openConnectWallet,
    closeConnectWallet,
  };

  return <Provider value={value}>{children}</Provider>;
};

export { useAppContext };
export default AppContextProvider;
