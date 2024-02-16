import React from "react";
export default function MainSection() {
  return (
    <div>
      <div className="flex flex-col relative items-center h-[100vh] text-center gap-4 ">
        <img
          className="absolute top-0 left-0"
          src="assets/image/banner/main-kiri.png"
          alt="decoration"
        />
        <img
          className="absolute top-0 right-0"
          src="assets/image/banner/main-kanan.png"
          alt="decoration"
        />
        <p className="text-xl font-cormorant text-primary mt-[89px]">
          <span className="text-secondary font-semibold">
            Assalamualaikum Wr. Wb.
          </span>{" "}
          <br />
          Tanpa mengurangi rasa hormat.Kami mengundang Bapak/Ibu/Saudara/iuntuk
          menghadiri acara pernikahan kami:
        </p>
        <div className="mt-7">
          <h1 className="text-6xl font-felipa text-primary mt-7">Arifuddin</h1>
          <p className="text-lg max-w-[294px] text-center font-cormorant text-primary mt-2">
            Putra dari bapak Drs. M. Umar Ar (Rahimahullah) & Ibu Asnaini
          </p>
        </div>
        <h1 className="text-6xl font-dancing text-primary mt-7">&</h1>
        <div className="mt-7">
          <h1 className="text-6xl font-felipa text-primary">Mia Audina</h1>
          <p className="text-lg max-w-[294px] text-center font-cormorant text-primary mt-2">
            Putri dari Bapak Ifnel & Ibu Irdawati
          </p>
        </div>
      </div>
    </div>
  );
}
