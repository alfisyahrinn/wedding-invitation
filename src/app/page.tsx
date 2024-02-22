"use client";
import Splash from "@/components/splash";
import Aos from "aos";
import dynamic from "next/dynamic";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  Aos.init()
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

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const NoSSR = dynamic(() => import('@/components/detail'), { ssr: false })
  return (
    <div className="scroll-smooth">
      <Splash />
      <NoSSR />
    </div>
  );
}
