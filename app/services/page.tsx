
import React from 'react';
import Image from 'next/image'

const Services = () => {
  return (
    <div className='pb-10'>
    <div className='grid grid-cols-3 pt-5'>
      <div></div>
      <h3 className='flex items-center justify-center text-4xl font-bold pt-5 text-white'>SERVICES</h3>
      <div></div>
    </div>
      <div className='grid grid-cols-7 pt-5'>
      <div></div>

      <div className='grid grid-cols-1'>
        <div className='justify-self-center'>
          <div className='text-center pb-6'>
            <Image
            className='cursor-pointer hover:bg-sky-400 rounded-3xl'
            src="/images/services1.png"
            width={350}
            height={250}
            alt="services1"
            />
          </div>
          <div className='text-center'>
            <h3 className='col-form-label text-2xl text-white pb-2'>Burial Mass</h3>
          </div>
        </div>
      </div>

      <div></div>

      <div className='grid grid-cols-1 '>
        <div className='justify-self-center'>
          <div className='text-center pb-6'>
            <Image
            className='cursor-pointer hover:bg-sky-400 rounded-3xl'
            src="/images/services2.png"
            width={350}
            height={250}
            alt="services2"
            />
          </div>
          <div className='text-center'>
            <h3 className='col-form-label text-2xl text-white pb-2'>Online Memorial</h3>
          </div>
        </div>
      </div>
      
      <div></div>

      <div className='grid grid-cols-1'>
        <div className='justify-self-center'>
          <div className='text-center pb-6'>
            <Image
            className='cursor-pointer hover:bg-sky-400 rounded-3xl'
            src="/images/services1.png"
            width={350}
            height={250}
            alt="services3"
            />
          </div>
          <div className='text-center'>
            <h3 className='col-form-label text-2xl text-white pb-2'>Cremation</h3>
          </div>
        </div>
      </div>
      
      <div></div>

    </div>
  </div>
  );
};

export default Services;