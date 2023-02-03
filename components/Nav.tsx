import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link'
import Image from 'next/image'
import {useSession,signIn,signOut} from 'next-auth/react'
import DropDown from './DropDown'
type Props={

}
const Nav = (props:Props) => {
  const {data:session, status} = useSession()

  console.log(session)
  
  return (
    <div className='sticky bg-[#21272f] flex pr-10  gap-5 items-center justify-end  top-0 p-2 h-14 shadow-lg'>
        <Image height={100} width={100} src="/sanjaylogo.png" className='h-[7rem] absolute -top-4 left-5' alt="" />
        <Link href={'/'} passHref><div  className='text-white cursor-pointer hover:text-[#00ffc9]'>Home</div></Link>
        <Link href={'/about'} passHref><div  className='text-white cursor-pointer hover:text-[#00ffc9]'>About</div></Link>
        <Link href={'/contact'} passHref><div  className='text-white cursor-pointer hover:text-[#00ffc9]'>Contact</div></Link>
        <Link href={'/services'} passHref><div  className='text-white cursor-pointer hover:text-[#00ffc9]'>Services</div></Link>
        <Link href={'/projects'} passHref><div  className='text-white cursor-pointer hover:text-[#00ffc9]'>Projects</div></Link>
        <Link href={'/blogs'} passHref><div  className='text-white cursor-pointer hover:text-[#00ffc9]'>Blogs</div></Link>
        {session?(
          <DropDown  session={session} />
        ):(
          <div className='text-white cursor-pointer hover:text-[#00ffc9]' onClick={() => signIn("google", { callbackUrl: "/" })}>Login</div>
        )}
        <SearchIcon className='text-white'/>
        <input type="text" name="" id="" className='bg-[#21272f] focus:cursor-text w-28 text-white focus:outline-none caret-slate-100' />
        <div className='w-16 text-center text-white font-bold py-1/4   bg-[#00ffc9]'>Search</div>
        </div>
  )
}

export default Nav

