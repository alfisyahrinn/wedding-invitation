"use client";
import Link from "next/link";
import React from "react";
import Countdown from "react-countdown";
export default function DetailSection() {
  const targetDate = new Date("2024-04-30");

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <h1 className="font-cormorant text-primary text-4xl mt-4">Acara Sedang Di Mulai</h1>;
    } else {
      return (
        <div className="flex justify-center gap-7">
          <div>
            <h1 className="text-[48px] text-primary font-cormorant">{days}</h1>
            <p className="text-[18px] text-primary font-cormorant">Hari</p>
          </div>
          <div>
            <h1 className="text-[48px] text-primary font-cormorant">{hours}</h1>
            <p className="text-[18px] text-primary font-cormorant">Jam</p>
          </div>
          <div>
            <h1 className="text-[48px] text-primary font-cormorant">{minutes}</h1>
            <p className="text-[18px] text-primary font-cormorant">Menit</p>
          </div>
          <div>
            <h1 className="text-[48px] text-primary font-cormorant">{seconds}</h1>
            <p className="text-[18px] text-primary font-cormorant">Detik</p>
          </div>
        </div>
      );
    }
  };
  return (
    <div id="detail" className="mb-20">
      <div className="flex flex-col relative items-center  text-center">
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
          <span className="text-secondary font-semibold max-w-[315px]">
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
        <div className="flex flex-col gap-2">
          <p className="text-xl font-cormorant text-primary mt-5">Resepsi</p>
          <img src="assets/image/banner/accent.png" alt="accent" />
          <p className="text-xl font-bold font-cormorant text-primary">
            Selasa, 30 April 2024
          </p>
          <img src="assets/image/banner/accent.png" alt="accent" />
        </div>
      </div>
      <div className="mt-11 text-center">
        <p className="text-xl font-cormorant font-bold text-secondary underline underline-offset-8">
          Kami Yang Berbahagia
        </p>
        <div className="flex justify-around mt-7">
          <p className="text-[15px] max-w-[159px] font-cormorant text-primary text-left">
            Kel. Bpk. Drs. M. Umar Ar (Alm) & Ibu Asnaini
          </p>
          <p className="text-[15px]  max-w-[107px] font-cormorant text-primary text-right">
            Kel. Bpk. Ifnel & Ibu Irdawati
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-[40px] font-dancing text-primary">Arief & Mia</h1>
        </div>
      </div>
      <div className="mt-7 text-center">
        <p className="text-xl font-cormorant font-bold text-secondary underline underline-offset-8">
          Turut Mengundang
        </p>
        <ul className="mt-5 ">
          <li className="text-[16px] font-cormorant text-primary">
            Munawardi (Adie)/ Rizqia Ade Ulisma (Kiki)
          </li>
          <li className="text-[16px] font-cormorant text-primary">
            Afrizal (Izal)/Rahmawati (Amah)
          </li>
          <li className="text-[16px] font-cormorant text-primary">Nikmah</li>
          <li className="text-[16px] font-cormorant text-primary">
            Alfi Syahrin
          </li>
        </ul>
      </div>
      <div className="mt-24 relative">
        <div>
          <svg
            className="-top-[50px] -z-10 absolute"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#8B7A4E"
              fill-opacity="1"
              d="M0,192L80,160C160,128,320,64,480,64C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="-top-[60px] -z-10 absolute"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#8B7A4E"
              fill-opacity="0.5"
              d="M0,192L80,160C160,128,320,64,480,64C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="-top-[50px] left-36 -z-10 absolute"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#8B7A4E"
              fill-opacity="0.6"
              d="M0,192L80,160C160,128,320,64,480,64C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="-top-[66px] left-36 -z-10 absolute"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#8B7A4E"
              fill-opacity="0.6"
              d="M0,192L80,160C160,128,320,64,480,64C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="-top-[66px] -left-28 -z-10 absolute"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#8B7A4E"
              fill-opacity="0.6"
              d="M0,192L80,160C160,128,320,64,480,64C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative">
          <img
            className="absolute bottom-0 right-0 opacity-40 -z-50"
            src="assets/image/banner/opacity-kanan.png"
            alt="flower"
          />
          <img
            className="absolute bottom-0 left-0 opacity-40 -z-50"
            src="assets/image/banner/opacity-kiri.png"
            alt="flower"
          />
        </div>
        <div className="py-3   bg-[#8B7A4E]  flex-col flex w-full justify-center items-center text-center">
          <p className="text-[15px] max-w-[345px] font-cormorant text-white">
            &quot;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepada-Nya, dan dijadikan-Nya diantaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berfikir.&quot;
          </p>
          <p className="mt-2  text-[17px] max-w-[345px] font-dancing text-white">
            Q.S. Ar-Rum : 21
          </p>
        </div>
        <div className="bg-red-500 relative">
          <img
            className="absolute -top-8 right-0  -z-50"
            src="assets/image/banner/bawah.png"
            alt="flower"
          />
        </div>
        <div>
          <svg
            className="-bottom-[73px] absolute -z-10 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#8B7A4E"
              fill-opacity="1"
              d="M0,192L80,160C160,128,320,64,480,64C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
          <svg
            className="-bottom-[83px] absolute -z-10 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#8B7A4E"
              fill-opacity="0.5"
              d="M0,192L80,160C160,128,320,64,480,64C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
          <svg
            className="-bottom-[74px] right-28 absolute -z-10 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#8B7A4E"
              fill-opacity="0.5"
              d="M0,192L80,160C160,128,320,64,480,64C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="mt-20 text-center">
        <h1 className="text-[40px] font-dancing text-primary">Coutdown</h1>
        {/* <div className="flex justify-center gap-7">
          <div>
            <h1 className="text-[48px] text-primary font-cormorant">100</h1>
            <p className="text-[18px] text-primary font-cormorant">Hari</p>
          </div>
          <div>
            <h1 className="text-[48px] text-primary font-cormorant">12 </h1>
            <p className="text-[18px] text-primary font-cormorant">Jam</p>
          </div>
          <div>
            <h1 className="text-[48px] text-primary font-cormorant">47</h1>
            <p className="text-[18px] text-primary font-cormorant">Menit</p>
          </div>
          <div>
            <h1 className="text-[48px] text-primary font-cormorant">11</h1>
            <p className="text-[18px] text-primary font-cormorant">Detik</p>
          </div>
        </div> */}
        <Countdown  date={targetDate} renderer={renderer}/>
      </div>
      <div className="mt-9 text-center">
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
      <div className="mt-9 text-center">
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
          className="h-60 absolute bottom-0 right-0 -z-10 "
          src="assets/image/banner/banner-bottom.png"
          alt="decoration"
        />
      </div>
    </div>
  );
}
