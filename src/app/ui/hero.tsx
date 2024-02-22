import React from "react";

function Hero() {
  return (
    <div className="flex flex-col relative items-center  text-center">
      <img
        className="absolute top-0 left-0 animate-fade-right animate-duration-1000 animate-delay-50"
        src="assets/image/banner/main-kiri.png"
        alt="decoration"
      />
      <img
        className="absolute top-0 right-0 "
        src="assets/image/banner/main-kanan.png"
        alt="decoration"
      />
      <p
        className="text-xl font-cormorant text-primary mt-[89px]"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <span className="text-secondary font-semibold max-w-[315px]">
          Assalamualaikum Wr. Wb.
        </span>{" "}
        <br />
        Tanpa mengurangi rasa hormat.Kami mengundang Bapak/Ibu/Saudara/iuntuk
        menghadiri acara pernikahan kami:
      </p>
      <div className="mt-7" data-aos="fade-up">
        <h1 className="text-6xl font-felipa text-primary mt-7">Arifuddin</h1>
        <p className="text-lg max-w-[294px] text-center font-cormorant text-primary mt-2">
          Putra dari bapak Drs. M. Umar Ar (Rahimahullah) & Ibu Asnaini
        </p>
      </div>
      <h1
        data-aos="zoom-in"
        data-aos-delay="50"
        className="text-6xl font-dancing text-primary mt-7"
      >
        &
      </h1>
      <div className="mt-7" data-aos="fade-up" data-aos-delay="50">
        <h1 className="text-6xl font-felipa text-primary">Mia Audina</h1>
        <p className="text-lg max-w-[294px] text-center font-cormorant text-primary mt-2">
          Putri dari Bapak Ifnel & Ibu Irdawati
        </p>
      </div>
      <div className="flex flex-col gap-2" data-aos="fade-up">
        <p className="text-xl font-cormorant text-primary mt-5">Resepsi</p>
        <img src="assets/image/banner/accent.png" alt="accent" />
        <p className="text-xl font-bold font-cormorant text-primary">
          Selasa, 30 April 2024
        </p>
        <img src="assets/image/banner/accent.png" alt="accent" />
      </div>
    </div>
  );
}

export default Hero;
