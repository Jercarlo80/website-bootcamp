import React from 'react';
import Model from '../assets/Model.png';
import Subs1 from '../assets/Subtract-Yellow.png';
import Subs2 from '../assets/Subtract-Blue.png';
import Card from '../components/Card';

const Home = () => {
  return (
    <>
        <div className='bg-[#152A46] w-full h-fit'>
            <div className='flex'>
                <div>
                    <h1 className='w-[603px] h-[100px] text-white text-[42px] py-[174px] ml-[120px] font-bold '>
                        Jadi expert bersama edspert.id
                    </h1>
                    <p className='w-[439px] h-[48px] max-w-md mt-[27px] text-white text-[16px] ml-[120px]'>
                        Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, 
                        untuk siapkan karir impian anda.
                    </p>
                </div>
                    <img className='w-[819px] h-[546px] ml-[57px] mt-[86px] z-20' src={Model}/>
                <div>
                    <img className='w-[235px] h-[223px] absolute right-[220px] top-[200px]  ' src={Subs1}/>
                    <img className='w-[360px] h-[303px] absolute right-[350px] top-[330px]  ' src={Subs2}/>
                </div>
            </div>
        </div>
        <div className='flex gap-3'>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className='flex gap-3'>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className='flex gap-3'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </>
  )
}

export default Home