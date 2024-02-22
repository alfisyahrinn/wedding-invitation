import Link from "next/link";
import React from "react";
import Countdown from "react-countdown";

function Tanggal({
  targetDate,
  renderer,
}: {
  targetDate: Date;
  renderer: any;
}) {
  return (
    <>
      <div className="mt-20 text-center" data-aos="fade-up">
        <h1 className="text-[40px] font-dancing text-primary">Coutdown</h1>
        <Countdown date={targetDate} renderer={renderer} />
      </div>
      <div className="mt-9 text-center" data-aos="fade-up">
        <h1 className="text-[40px] font-dancing text-primary">Akad Nikah</h1>
        <div className="flex justify-center mt-3 gap-10">
          <div className="max-w-[83px]">
            <img
              className="m-auto"
              src="./assets/image/icon/date.svg"
              alt="date"
            />
            <p className="text-[16px] mt-2 font-cormorant text-primary">
              Senin,29 April 2024
            </p>
          </div>
          <div className="max-w-[83px]">
            <img
              className="m-auto"
              src="./assets/image/icon/time.svg"
              alt="time"
            />
            <p className="text-[16px] mt-2 font-cormorant text-primary">
              09 : 00 wib, s.d. selesai
            </p>
          </div>
        </div>
        <p className="text-[16px] mt-2 font-cormorant text-primary">
          KUA Kec. Lut Tawar
        </p>
        <div className="flex flex-col justify-center mt-2">
          <Link
            href="https://maps.app.goo.gl/xCUoeZaCRx2gxKSF7"
            target="_blank"
            className="bg-primary m-auto text-white px-[10px] py-[5px] font-cormorant text-[16px] flex justify-center gap-2"
          >
            <img src="./assets/image/icon/map.svg" alt="map" />
            Google Maps
          </Link>
        </div>
      </div>
      <div className="mt-9 text-center" data-aos="fade-up">
        <h1 className="text-[40px] font-dancing text-primary">Resepsi</h1>
        <div className="flex justify-center mt-3 gap-10">
          <div className="max-w-[83px]">
            <img
              className="m-auto"
              src="./assets/image/icon/date.svg"
              alt="date"
            />
            <p className="text-[16px] mt-2 font-cormorant text-primary">
              Selasa,30 April 2024
            </p>
          </div>
          <div className="max-w-[83px]">
            <img
              className="m-auto"
              src="./assets/image/icon/time.svg"
              alt="time"
            />
            <p className="text-[16px] mt-2 font-cormorant text-primary">
              10 : 00 wib, s.d. selesai
            </p>
          </div>
        </div>
        <p className="text-[16px] mt-2 font-cormorant text-primary">
          Jln. Al-Fitrah, No. 128 Takengon
        </p>
        <div className="flex flex-col justify-center mt-2">
          <Link
            href="https://maps.app.goo.gl/9GTTGf9m7z73Ba5C9"
            target="_blank"
            className="bg-primary m-auto text-white px-[10px] py-[5px] font-cormorant text-[16px] flex justify-center gap-2"
          >
            <img src="./assets/image/icon/map.svg" alt="map" />
            Google Maps
          </Link>
        </div>
      </div>
      <div className="relative mt-20">
        <img
          data-aos="fade-up-left"
          className="h-60 absolute bottom-0 right-0 -z-10 "
          src="assets/image/banner/banner-bottom.png"
          alt="decoration"
        />
      </div>
    </>
  );
}

export default Tanggal;
