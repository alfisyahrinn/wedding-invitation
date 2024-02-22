"use client";
import React from "react";

export default function Splash() {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.onscroll = function () {};

      const rootElement: HTMLElement | null = document.querySelector(":root");
      if (rootElement) {
        rootElement.style.scrollBehavior = "smooth";
        rootElement.style.overflow = 'auto'
      }
      const detailSection = document.getElementById("detail");
      if (detailSection) {
        detailSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div className="flex flex-col relative justify-center items-center h-[100vh] text-center gap-4 ">
      <img
        className="absolute top-0 left-0  animate-fade-right animate-duration-1000 animate-delay-50"
        src="assets/image/banner/banner-top.png"
        alt="decoration"
      />
      <img
        className="absolute bottom-0 right-0 -z-10  animate-fade-left animate-duration-1000 animate-delay-50"
        src="assets/image/banner/banner-bottom.png"
        alt="decoration"
      />
      <p className="text-2xl font-dancing text-secondary animate-fade animate-once animate-duration-1000 animate-delay-100">
        The Wedding of
      </p>
      <h1 className="text-8xl font-dancing text-primary animate-fade animate-once animate-duration-1000 animate-delay-200">
        Arief & Mia
      </h1>
      <p className="text-2xl font-medium text-secondary font-cormorant animate-fade animate-once animate-duration-1000 animate-delay-300">
        Kepada Bpk/Ibu/Saudara/i:
      </p>
      <p className="text-2xl text-secondary font-cormorant animate-fade animate-once animate-duration-1000 animate-delay-400">
        Hafshah dan Meriam
      </p>
      <button
        onClick={handleClick}
        className="animate-fade animate-once animate-duration-1000 animate-delay-500 bg-primary px-[18px] py-[8px] flex gap-2 text-white font-cormorant text-2xl"
      >
        <img src="assets/image/icon/email.svg" alt="open" />
        Buka Undangan
      </button>
    </div>
  );
}
