import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import toast from "react-hot-toast";
import { createContext } from "../utils/createContext";
import { injected, setupNetwork } from "../utils/connector";

const [Provider, useAppContext] = createContext();

const AppContextProvider = ({ children }) => {
  const { account, activate, deactivate } = useWeb3React();

  const connect = useCallback(() => {
    activate(injected, async (error) => {
      if (error instanceof UnsupportedChainIdError) {
        await setupNetwork();
        activate(injected, (error) => {
          console.error(error);
        });
      } else {
        console.error(error);
        toast.error(error.message);
      }
    });
  }, [account, activate]);

  const value = {
    connect,
    disconnect: deactivate,
    account,
  };

  return <Provider value={value}>{children}</Provider>;
};

export { useAppContext };
export default AppContextProvider;
