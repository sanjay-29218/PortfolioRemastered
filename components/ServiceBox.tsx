import React from 'react'
import Image from 'next/image'
type Props = {
    service: string
}

const ServiceBox = ({service}: Props) => {
  return (
    <div className='w-[30vw] text-white  h-[50vh] bg-slate-600 hover:bg-slate-700 cursor-pointer  rounded-md flex flex-col items-center gap-4  p-6 '>
      {service === 'webdev'?(
        <Image src='/webdev.svg' width={100} height={100} alt='webdev' />
      ):(service === 'mobiledev')?(
        <Image src='/mobiledev.svg' width={100} height={100} alt='mobiledev' />
      ):(
        <Image src='/webdev.svg' width={100} height={100} alt='' />
      )}
        <h1 className='text-white text-3xl text-center font-serif'>{service.toUpperCase()}</h1>
        <p className='font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis earum, necessitatibus magnam illum autem debitis magni a mollitia et?</p>
    </div>
  )
}

export default ServiceBox