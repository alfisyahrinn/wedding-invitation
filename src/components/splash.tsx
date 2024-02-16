import React from 'react'

export default function Splash() {
  return (
    <div className='flex flex-col relative justify-center items-center h-[100vh] text-center gap-4 '>
      <img className='absolute top-0 left-0' src="assets/image/banner/banner-top.png" alt="decoration" />
      <img className='absolute bottom-0 right-0' src="assets/image/banner/banner-bottom.png" alt="decoration" />
      <p className='text-2xl font-dancing text-secondary'>The Wedding of</p>
      <h1 className='text-8xl font-dancing text-primary'>Arief & Mia</h1>
      <p className='text-2xl font-medium text-secondary font-cormorant'>Kepada Bpk/Ibu/Saudara/i:</p>
      <p className='text-2xl text-secondary font-cormorant'>Hafshah dan Meriam</p>
      <button className='bg-primary px-[18px] py-[8px] flex gap-2 text-white font-cormorant text-2xl'><img src="assets/image/icon/email.svg" alt="open" />Buka Undangan</button>
    </div>
  )
}
