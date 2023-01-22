import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link'
const Nav = ({setLoading}) => {
  
  return (
    <div className='sticky bg-[#21272f] flex pr-10  gap-5 items-center justify-end  top-0 p-2 h-14 shadow-lg'>
        <img src="/sanjaylogo.png" className='h-[7rem] absolute -top-4 left-5' alt="" />
        <Link href={'/'}><div onClick={()=>{setLoading(true)}} className='text-white cursor-pointer hover:text-[#00ffc9]'>Home</div></Link>
        <Link href={'/about'}><div onClick={()=>{setLoading(true)}} className='text-white cursor-pointer hover:text-[#00ffc9]'>About</div></Link>
        <Link href={'/contact'}><div onClick={()=>{setLoading(true)}} className='text-white cursor-pointer hover:text-[#00ffc9]'>Contact</div></Link>
        <Link href={'/services'}><div onClick={()=>{setLoading(true)}} className='text-white cursor-pointer hover:text-[#00ffc9]'>Services</div></Link>
        <SearchIcon className='text-white'/>
        <input type="text" name="" id="" className='bg-[#21272f] focus:cursor-text w-28 text-white focus:outline-none caret-slate-100' />
        <div className='w-16 text-center text-white font-bold py-1/4   bg-[#00ffc9]'>Search</div>
        
        </div>
  )
}

export default Nav