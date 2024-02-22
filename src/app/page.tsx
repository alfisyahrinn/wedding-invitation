"use client";
import DetailSection from "@/components/detail";
import Splash from "@/components/splash";
import Countdown from "react-countdown";

export default function Home() {
  function disableScroll() {
    if (typeof window !== "undefined") {
      window.onscroll = function () {
        window.scrollTo(
          document.documentElement.scrollTop,
          document.documentElement.scrollLeft
        );
      };

      const rootElement: HTMLElement | null = document.querySelector(":root");
      if (rootElement) {
        rootElement.style.scrollBehavior = "auto";
      }
    }
  }

  disableScroll();

  return (
    <div className="scroll-smooth">
      <Splash />
      <DetailSection />
    </div>
  );
}
