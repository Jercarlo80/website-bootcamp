import React from 'react'
import modelCard from '../assets/modelCard.png'

const Card = () => {
  return (
    <div className='w-[352px] h-[293px] rounded-[20px] bg-white mt-[89px] ml-[72px] mb-5'>
      <div className='grid grid-rows-2 h-[146.5px] bg-[#152A46] rounded-t-[20px]'>
        <img className='w-[75px] ml-[28px] pt-[16px] ' src={modelCard}/>
        <div className='ml-[120px] relative bottom-[40px]'>
          <h1 className='text-[#FFCD29] font-extrabold text-[16px]'>
            Intensive Bootcamp
          </h1>
          <h2 className='text-[#FFFF] font-normal text-[20px]'>
            Programming Laravel
          </h2>
          <p className='text-[#FFFF] font-normal text-[12px]'>
            (Getting started with Laravel 9)
          </p>
        </div>
      </div>
      <div className='ml-[24px] pt-2'>
        <h1 className='w-[314px] text-[17px] font-extrabold'>
          Programming Laravel
          Getting Started with Laravel 9
        </h1>
        <h2 className='text-[12px] text-gray-500 pt-1'>
          Batch <span className='ml-[16px] text-black'>September 2022</span>
        </h2>
        <h2 className='text-[12px] text-gray-500 relative top-1'>
          Mentor <span className='ml-[9px] text-black'>William Hartono, Farel Prayoga</span>
        </h2>
      </div>
      <h1 className='ml-[125px] pt-[8px] font-medium text-[#00000080] line-through '>
        Rp 2060.000
      </h1>
      <h1 className='ml-[225px] relative bottom-[12px] text-[20px] font-medium text-[#0ACF83]'>
        Rp 560.000
      </h1>
    </div>
  )
}

export default Card