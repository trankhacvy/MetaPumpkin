import { useEffect, useState } from "react";
import { Zero } from "@ethersproject/constants";
import { usePumbkinContract } from "./useContract";

export const FetchStatus = {
  NOT_FETCHED: "not-fetched",
  SUCCESS: "success",
  FAILED: "failed",
};

export const useGetPrice = () => {
  const [fetchStatus, setFetchStatus] = useState(FetchStatus.NOT_FETCHED);
  const [price, setPrice] = useState(Zero);

  const contract = usePumbkinContract();

  useEffect(() => {
    const fetchPrice = async (contract) => {
      try {
        const price = await contract?.price();
        setPrice(price);
        setFetchStatus(FetchStatus.SUCCESS);
      } catch (e) {
        console.error(e);
        setFetchStatus(FetchStatus.FAILED);
      }
    };

    if (contract) {
      fetchPrice(contract);
    }
  }, [contract, setPrice, setFetchStatus]);

  return { price, fetchStatus };
};
