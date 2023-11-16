
import React from 'react';
import Image from 'next/image'

const Niche = () => {
  return (
    <div className='pb-10'>
      <div className='grid grid-cols-3 pt-5'>
        <div></div>
        <h3 className='flex items-center justify-center text-4xl font-bold pt-5 text-white'>BROWSE NICHE</h3>
        <input
          className="px-2 py-2 rounded-md mt-5 flex justify-center w-2/3"
          type="text"
          name="searchbox"
          id="searchbox"
          placeholder="Search"
          />
      </div>
        <div className='grid grid-cols-3 pt-5'>
          
        <div className='grid grid-cols-2'>
          <h3 className='col-form-label pr-2 self-center justify-self-end text-2xl text-white transform -rotate-90'>Garden 1</h3>
          <Image
            className='cursor-pointer hover:bg-sky-200'
            src="/images/garden_1.png"
            width={250}
            height={250}
            alt="garden_1"
          />
        </div>

        <div className='grid grid-cols-1 '>
          <div className='justify-self-center'>
            <div className='text-center pb-6'>
              <h3 className='col-form-label text-2xl text-white pb-2'>Building 1</h3>
              <Image
              className='cursor-pointer hover:bg-sky-200'
              src="/images/building_1.png"
              width={350}
              height={250}
              alt="building_1"
              />
            </div>
            <div className='text-center'>
              <h3 className='col-form-label text-2xl text-white pb-2'>Main Building</h3>
              <Image
              className='cursor-pointer hover:bg-sky-200'
              src="/images/main_building.png"
              width={350}
              height={100}
              alt="main_building"
              />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2'>
          <Image
            className='cursor-pointer hover:bg-sky-200'
            src="/images/garden_2.png"
            width={250}
            height={250}
            alt="garden_2"
          />
          <h3 className='col-form-label self-center justify-self-start text-2xl text-white transform -rotate-90'>Garden 2</h3>
        </div>
        
      </div>
    </div>
  );
};

export default Niche;