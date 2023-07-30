import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[587px] bg-white '>
      <div className='pt-[171px] ml-[99px] '>
        <h1 className='text-[16px] text-[#A3A3A3] '>
            TAGLINE edspert disini
        </h1>
        <p className='w-[411px] h-[72px] text-[16px] text-[#A3A3A3] mt-[20px] '>
            Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
        </p>
        <div className='grid grid-cols-4 gap-3 ml-[659px] relative top-[-130px]'>
            <div className='pt-[12px] flex flex-col gap-3 cursor-pointer'>
                <h1 className='font-semibold'>
                    Program
                </h1>
                <p className='text-[#A3A3A3]'>
                    Online Course
                </p>
                <p className='text-[#A3A3A3]'>
                    Mini bootcamp
                </p>
                <p className='text-[#A3A3A3]'>
                    Bootcamp
                </p>
            </div>
            <div className='pt-[12px] flex flex-col gap-3 cursor-pointer'>
                <h1 className='font-semibold'>
                    Bidang ilmu
                </h1>
                <p className='text-[#A3A3A3]'>
                Digital marketing
                </p>
                <p className='text-[#A3A3A3]'>
                Product management
                </p>
                <p className='text-[#A3A3A3]'>
                English
                </p>
                <p className='text-[#A3A3A3]'>
                Programming
                </p>
            </div>
            <div className='pt-[12px] flex flex-col gap-3 cursor-pointer'>
                <h1 className='font-semibold'>
                Tentang edspert
                </h1>
                <p className='text-[#A3A3A3]'>
                Bantuan
                </p>
                <p className='text-[#A3A3A3]'>
                Kontak kami
                </p>
                <p className='text-[#A3A3A3]'>
                Media sosial
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer