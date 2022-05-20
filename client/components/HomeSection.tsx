import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header/Header";
import { Box, Flex, Heading } from "@chakra-ui/react";

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
    <Box id="home" position="relative" h="100vh">
      <Box
        ref={ref}
        w="full"
        h="100vh"
        position="fixed"
        filter="auto"
        blur="sm"
      >
        <Image src="/images/bg.webp" layout="fill" priority />
      </Box>
      <Header />
      <Flex
        position="absolute"
        inset={0}
        alignItems="center"
        justifyContent="center"
      >
        <h2 className="home-typing">MetaPumpkins Is Coming</h2>
        <Box
          position="relative"
          w="20"
          h="20"
          mt="10"
          className="animate-bounce"
        >
          <Image layout="fill" src="/images/arrow-down.webp" priority />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeSection;
