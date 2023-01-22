import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Layout from "../components/Layout";
const index = () => {
  return (
    <Layout>
      <div className="text-white">
        <div className=" p-10 gap-4 grid grid-cols-2 grid-rows-1">
          <div>
            <div className="py-10">
              Hello <span className="primary">I'm </span>
            </div>
            <div className="text-4xl font-bold font-mono primary">
              SANJAY POUDEL
            </div>
            <div className="text-xl py-4">Full Stack Developer</div>
            <div className="text-sm w-[40%]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam voluptates amet ipsum quis doloribus itaque id velit,
              quae eaque voluptatibus adipisci eveniet quasi quia quidem!
            </div>
            <div className="mt-24 rounded-md text-2xl bg-primary p-4 items-center inline-block text-white font-bold">
              Let's Talk
            </div>
            <div className="py-9 flex gap-4 items-center ">
              <span className=" " >Check Out my :</span>
              <div className=" small-hexagon flex items-center justify-center cursor-pointer transform   hover:scale-125 transition-transform duration-200"><FacebookIcon /></div>
              <div className=" small-hexagon flex items-center justify-center cursor-pointer transform hover:scale-125 transition-transform duration-200"><LinkedInIcon/></div>
              <div className=" small-hexagon grid items-center justify-center cursor-pointer transform hover:scale-125 transition-transform duration-200"><GitHubIcon/></div>
            </div>
          </div>
          <div>
            <div className=" hexagon "></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
