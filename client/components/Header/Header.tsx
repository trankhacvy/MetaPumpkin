import React, { useEffect, useState } from "react";
import cx from "classname";
import Image from "next/image";
import Logo from "../Logo";
import Button from "../Button";
import NextLink from "../NextLink";
import { useAppContext } from "../../context/AppContext";
import truncateHash from "../../utils/truncateHash";

const navList = [
  { label: "Intro", href: "#intro" },
  { label: "Mint", href: "#mint" },
  { label: "FAQ", href: "#faq" },
  { label: "Team", href: "#team" },
];

const Header = () => {
  const { account, connect } = useAppContext();
  const [isTop, setIsTop] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleConnect = () => {
    if (!account) {
      connect();
    } else {
      const mintSection = document.getElementById("mint");
      if (mintSection) {
        mintSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handler = () => {};

    window.addEventListener("scroll", handler);

    window.onscroll = function() {
      if (typeof window === "undefined") return;
      const body = window.document.body; //IE 'quirks'
      const document = window.document.documentElement; //IE with doctype
      const appDocument = document.clientHeight ? document : body;

      if (appDocument.scrollTop > 300) {
        setIsTop(true);
      } else {
        if (!isTop) {
          setIsTop(false);
        }
      }
    };

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cx("fixed z-20 left-0 right-0 top-0", {
        "opacity-80 bg-black transition-colors transition-opacity": isTop,
      })}
    >
      <div className="max-w-screen-lg xl:max-w-screen-xl relative mx-auto">
        <div className="flex px-4 md:px-8 py-4 items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden"
              onClick={() => setMenuVisible((val) => !val)}
            >
              <Image width="36px" height="36px" src="/images/pumpkin.webp" />
            </button>
            <NextLink href="#home">
              <a>
                <Logo />
              </a>
            </NextLink>
          </div>
          <div className="flex-1 justify-center hidden md:flex">
            <nav>
              <ul className="flex space-x-12 text-white text-2xl font-bold">
                {navList.map((nav) => (
                  <li key={nav.label}>
                    <NextLink href={nav.href}>
                      <a>{nav.label}</a>
                    </NextLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <Button onClick={handleConnect}>
            {account ? `${truncateHash(account)}` : "Connect"}
          </Button>
        </div>
        <div
          style={{ top: "80px" }}
          className={cx(
            "md:hidden absolute left-0 right-0",
            menuVisible ? "block" : "hidden"
          )}
        >
          <nav>
            <ul className="text-center text-white text-2xl space-y-4 px-4">
              {navList.map((nav) => (
                <li key={nav.label}>
                  <NextLink
                    href={nav.href}
                    className="block p-4 hover:text-4xl transition-all opacity-80 bg-black rounded-xl"
                  >
                    <a>{nav.label}</a>
                  </NextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
