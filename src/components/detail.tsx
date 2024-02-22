"use client";
import { Hadish, Hero, Informasi, Tanggal } from "@/app/ui";
import React from "react";
export default function DetailSection() {
  const targetDate = new Date("2024-04-30");

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return (
        <h1 className="font-cormorant text-primary text-4xl mt-4">
          Acara Sedang Di Mulai
        </h1>
      );
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
            <h1 className="text-[48px] text-primary font-cormorant">
              {minutes}
            </h1>
            <p className="text-[18px] text-primary font-cormorant">Menit</p>
          </div>
          <div>
            <h1 className="text-[48px] text-primary font-cormorant">
              {seconds}
            </h1>
            <p className="text-[18px] text-primary font-cormorant">Detik</p>
          </div>
        </div>
      );
    }
  };
  return (
    <div id="detail" className="mb-20">
      <Hero />
      <Informasi />
      <Hadish/>
      <Tanggal renderer={renderer} targetDate={targetDate}/>
    </div>
  );
}
