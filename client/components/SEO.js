import Head from "next/head";
import { useRouter } from "next/router";

const description =
  "MetaPumpkins are a collection of 147 randomly generated and unique creatures living on the BSC blockchain in the form of ERC-721 tokens";

const CommonSEO = () => {
  const router = useRouter();
  return (
    <Head>
      <title>MetaPumpkins | Awesome Pumpkin NFT Collection</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${process.env.APP_URL}${router.asPath}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MetaPumpkins" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content="MetaPumpkins" />
      <meta
        property="og:image"
        content={`${process.env.APP_URL}/twitter-card.png`}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://twitter.com/trankhac_vy" />
      <meta name="twitter:title" content="MetaPumpkins" />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${process.env.APP_URL}/twitter-card.png`}
      />
    </Head>
  );
};

export default CommonSEO;
