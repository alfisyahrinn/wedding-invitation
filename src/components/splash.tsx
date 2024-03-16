"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";

export default function Splash() {
  const [musik, setMusik] = useState(true);
  const [tamu, setTamu] = useState<any>(""); // State untuk menyimpan nama tamu
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    handleMusik();
    console.log({ musik });

    if (typeof window !== "undefined") {
      window.onscroll = function () {};

      const rootElement: HTMLElement | null = document.querySelector(":root");
      if (rootElement) {
        rootElement.style.scrollBehavior = "smooth";
        rootElement.style.overflowX = "hidden";
        rootElement.style.overflow = "auto";
      }
      const detailSection = document.getElementById("detail");
      if (detailSection) {
        detailSection.scrollIntoView({ behavior: "smooth" });
      }
      const MusicJalan = document.getElementById("music");
      if (MusicJalan) {
        MusicJalan.style.display = "block";
      }
    }
  };

  const handleMusik = () => {
    setMusik(!musik);
    if (audioRef.current) {
      if (musik) {
        audioRef.current.pause(); // Jeda musik jika sedang diputar
      } else {
        audioRef.current.play(); // Putar musik jika sedang dijeda
      }
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tamu = urlParams.get("name");
    setTamu(tamu); // Menyimpan nilai nama tamu ke dalam state
  }, []);

  return (
    <>
      <div className="flex flex-col relative justify-center items-center h-[100vh] text-center gap-4 ">
        <img
          className="absolute top-0 left-0  animate-fade animate-duration-1000 animate-delay-50"
          src="assets/image/banner/banner-top.png"
          alt="decoration"
        />
        <img
          className="absolute bottom-0 right-0 -z-10  animate-fade animate-duration-1000 animate-delay-50"
          src="assets/image/banner/banner-bottom.png"
          alt="decoration"
        />
        <p className="text-2xl font-dancing text-secondary animate-fade animate-once animate-duration-1000 animate-delay-100">
          Walimatul &apos;Ursy
        </p>
        <h1 className="text-8xl font-dancing text-primary animate-fade animate-once animate-duration-1000 animate-delay-200">
          Arief & Mia
        </h1>
        <p className="text-2xl font-medium text-secondary font-cormorant animate-fade animate-once animate-duration-1000 animate-delay-300">
          Kepada Bpk/Ibu/Saudara/i:
        </p>
        <p className="text-2xl text-secondary font-cormorant animate-fade animate-once animate-duration-1000 animate-delay-400">
          {tamu} {/* Menampilkan nama tamu */}
        </p>
        <button
          onClick={handleClick}
          className="animate-fade animate-once animate-duration-1000 animate-delay-500 bg-primary px-[18px] py-[8px] flex gap-2 text-white font-cormorant text-2xl"
        >
          <img src="assets/image/icon/email.svg" alt="open" />
          Buka Undangan
        </button>
        {/* {!musik && (
          <audio ref={audioRef} autoPlay loop>
            <source src="./assets/musik-arab.mp3" type="audio/mp3" />
          </audio>
        )} */}
      </div>
      {/* <div
        id="music"
        className={`fixed bottom-0 right-0 pb-6 pe-6 hidden`}
        onClick={handleMusik}
      >
        {!musik ? (
          <FaCirclePause className="h-9 w-9 text-primary" />
        ) : (
          <FaPlayCircle className="h-9 w-9 text-primary" />
        )}
      </div> */}
    </>
  );
}
