import "../styles/index.css";
import "normalize.css";
import Head from "next/head";
import { Web3ReactProvider } from "@web3-react/core";
import { Toaster } from "react-hot-toast";
import AppContextProvider from "../context/AppContext";
import { useEagerConnect, useInactiveListener } from "../hooks/useEagerConnect";
import { getLibrary } from "../utils/connector";

const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

const AppWrapper = ({ children }) => {
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  return <div>{children}</div>;
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pumpkin | Collect and bread digital pumpkins</title>
        <meta name="theme-color" content="#462D17" />
        <meta name="viewport" content="width=device-width" />
        <link rel="shortcut icon" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap"
          rel="stylesheet"
        />

        {GA_TRACKING_ID && (
          <>
            <script async src="https://www.google-analytics.com/analytics.js" />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                  ga('create', '${GA_TRACKING_ID}', 'auto');
                  ga('send', 'pageview');
                  `,
              }}
            />
          </>
        )}
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AppContextProvider>
          <AppWrapper>
            <Toaster
              toastOptions={{
                className: "",
                duration: 4000,
                style: {
                  backgroundColor: "#c57c5c",
                  color: "black",
                  fontSize: "18px",
                  padding: "16px 24px",
                  borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                  boxShadow: "0 0 0 5px #e1d8b7",
                },
              }}
            />
            <Component {...pageProps} />
          </AppWrapper>
        </AppContextProvider>
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
