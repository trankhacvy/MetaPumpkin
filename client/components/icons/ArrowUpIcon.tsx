import * as React from "react";

const SVGComponent = ({ width = 16, height = 16, ...rest }: any) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    wid
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </svg>
);

export default SVGComponent;
