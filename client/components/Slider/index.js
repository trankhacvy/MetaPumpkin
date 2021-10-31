import React from "react";
import Image from "next/image";
import {
  Slider,
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
  SliderMarker,
} from "@reach/slider";
import "@reach/slider/styles.css";

const MIN = 1;
const MAX = 10;
const STEP = 1;

const CustomSlider = ({ min = MIN, max = MAX, step = STEP, ...rest }) => (
  <SliderInput min={min} max={max} step={step} {...rest}>
    <SliderTrack>
      <SliderRange />
      {Array.from({ length: MAX - MIN + 1 }).map((_, index) => (
        <SliderMarker key={`marker-${index}`} value={index + 1} />
      ))}
      <SliderHandle>
        <Image src="/images/pumpkin.webp" width="48px" height="48px" />
      </SliderHandle>
    </SliderTrack>
  </SliderInput>
);

export default CustomSlider;
