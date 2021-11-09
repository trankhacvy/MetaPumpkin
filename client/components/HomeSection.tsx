import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header/Header";

const HomeSection = () => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (ref && ref.current) {
      const animate = {
        zIndex: [1, -1],
        opacity: [1, 0],
        transform: ["none", "translateY(200px) scale(2)"],
      };

      const timeline = new window.ScrollTimeline({
        scrollSource: document.documentElement,
        timeRange: 1.2,
        fill: "both",
        scrollOffsets: [
          new window.CSSUnitValue(0, "percent"),
          new window.CSSUnitValue(20, "percent"),
        ],
      });

      const option = {
        duration: 1,
        fill: "both" as any,
        easing: "cubic-bezier(0.42, 0, 0.58, 1)",
        timeline: timeline,
      };

      ref.current.animate(animate, option);
    }
  }, []);

  return (
    <div id="home" className="relative h-screen">
      <div ref={ref} className="w-full h-screen fixed filter blur-sm">
        <Image src="/images/bg.webp" layout="fill" priority />
      </div>
      <Header />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="home-typing">MetaPumpkins Is Coming</div>
        <div className="relative animate-bounce w-20 h-20 mt-10">
          <Image layout="fill" src="/images/arrow-down.webp" priority />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
