
import React from 'react';
import Image from 'next/image'

const Shop = () => {
  return (
    <div className='pb-10'>
      <div className='grid grid-cols-3 pt-5'>
        <div></div>
        <h3 className='flex items-center justify-center text-4xl font-bold pt-5 text-white'>SHOP</h3>
        <div></div>
      </div>
        <div className='grid grid-cols-5 pt-5'>
        <div></div>

        <div className='grid grid-cols-1'>
          <div className='justify-self-center'>
            <div className='text-center pb-6'>
              <Image
              className='cursor-pointer hover:bg-sky-400 rounded-3xl'
              src="/images/shop1.png"
              width={350}
              height={250}
              alt="shop1"
              />
            </div>
            <div className='text-center'>
              <h3 className='col-form-label text-2xl text-white pb-2'>Memorial Candles</h3>
            </div>
          </div>
        </div>

        <div></div>

        <div className='grid grid-cols-1 '>
          <div className='justify-self-center'>
            <div className='text-center pb-6'>
              <Image
              className='cursor-pointer hover:bg-sky-400 rounded-3xl'
              src="/images/shop2.png"
              width={350}
              height={250}
              alt="shop2"
              />
            </div>
            <div className='text-center'>
              <h3 className='col-form-label text-2xl text-white pb-2'>Memorial Flowers</h3>
            </div>
          </div>
        </div>
        
        <div></div>

      </div>
    </div>
  );
};

export default Shop;