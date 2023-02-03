import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  projectTitle: string;
  projectDesc: string;
  projectImg: string;
};

const ProjectBox = ({ projectTitle, projectImg, projectDesc }: Props) => {
  const primaryBtn = React.useRef<HTMLDivElement>(null);
  return (
    <div className="flex border-solid border-2 border-[#00ffc9] bg-[#3b4655] p-2   gap-4 rounded-lg flex-col items-center w-[25rem] h-[25rem] ">
      <p className='font-mono font-bold primary text-3xl '>{projectTitle.split(' ').map((item,i)=>{
        if(i<3){
          return <span key={i}>{item} </span>
        }
      })}</p>
      <Image
        src={projectImg}
        width={350}
        height={350}
        className="hover:scale-110 transition duration-500 ease-in-out"
        style={{
          objectFit: "contain",
        }}
        alt="projectimg.."
      ></Image>
      <p className="">{projectDesc}</p>
      <div className="flex gap-3">
        <div  className="w-20 bg-white  text-center  cursor-pointer  text-black ">
          <div ref={primaryBtn} className="primary-btn p-3 ">
          <Link className="" href={''}>Link</Link>
          </div>
        </div>
        <div className="w-20 bg-white cursor-pointer text-center    text-black ">
          <div className="primary-btn  p-3">
          <Link href={''}>Github</Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectBox;
