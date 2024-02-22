// "use client";
import Splash from "@/components/splash";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Arief Dan Mia",
  description: "Generated by create next app",
  icons: 'vercel.svg'
};
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


  const NoSSR = dynamic(() => import('@/components/detail'), { ssr: false })
  return (
    <div className="scroll-smooth flex justify-center flex-col xl:w-[390px] m-auto">
      <Splash />
      {/* <DetailSection/> */}
      <NoSSR />
    </div>
  );
}
