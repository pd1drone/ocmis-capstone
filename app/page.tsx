
'use client';

import EmblaCarousel from './components/carousel';
import './components/carousel/embla.css';
import './components/carousel/sandbox.css';

import { EmblaOptionsType } from 'embla-carousel-react'

const OPTIONS: EmblaOptionsType = { loop: true}
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-5">

      <div>
        <h3 className='flex items-center justify-center text-4xl font-bold	pb-5 text-white'>OCMIS: ONLINE COLUMBARY</h3>
        <h3 className='flex items-center justify-center text-4xl font-bold	pb-5 text-white'>MANAGEMENT</h3>
        <h3 className='flex items-center justify-center text-4xl font-bold	pb-5 text-white'>AND INFORMATION SYSTYEM</h3>
      </div>
      <div className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
      </div>

    </main>
  )
}
