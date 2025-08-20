"use client";

import { useEffect, useRef } from "react";

const AnimationLottie = ({ animationPath, width = "95%" }) => {
  const animationRef = useRef(null);

  useEffect(() => {
    async function loadLottie() {
      const lottie = await import("lottie-web");

      lottie.default.loadAnimation({
        container: animationRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationPath,
      });
    }

    loadLottie();
  }, [animationPath]);

  return <div ref={animationRef} style={{ width }} />;
};

export default AnimationLottie;
