export const fetchImageUrl = async (tokenId: number) => {
  try {
    const url = `${process.env.IPFS_GATEWAY}${process.env.NFT_BASE_URI}${tokenId}`;
    const blob = await fetch(url);
    const json = await blob.json();
    return `${process.env.IPFS_GATEWAY}${json.image.replace(
      "ipfs://",
      "ipfs/"
    )}`;
  } catch (error) {
    throw error;
  }
};
