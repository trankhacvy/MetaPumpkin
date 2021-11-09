import * as React from "react";

const SVGComponent = ({ width = 16, height = 16, ...rest }: any) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);

export default SVGComponent;
