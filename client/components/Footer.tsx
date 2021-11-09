import React from "react";

const Footer = () => (
  <div className="py-4 border-t border-white bg-black">
    <p className="text-lg text-white text-center">
      © copyright {new Date().getFullYear()} by{" "}
      <a href="/">https://www.metapumpkin.store</a>
    </p>
  </div>
);

export default Footer;
