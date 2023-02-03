import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import ProjectBox from "../components/ProjectBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import SanjayCV from '../public/SanjayCV.pdf'
const AboutScreen = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <Layout>
      <div className="text-white">
        <h1>
          About<span className="primary text-2xl ml-1">Me</span>
        </h1>
        <div className="grid grid-cols-[60%,400px] grid-rows-1">
          <div className="w-[20vw]   h-[70vh] relative left-8   ">
            <Image
              className="z-10 rounded-lg "
              priority
              src="/me.jpg"
              fill
              objectFit="contain"
              alt=""
            />
            <div id="box" className="gradient-border"></div>
          </div>
          <div className="flex flex-col font-extralight gap-[6rem]">
            <h1 className="text-2xl text-slate-200 flex items-center gap-3 font-extralight italic text-end">
              <HiLocationMarker />
              Nakhipot ,Lalitpur
            </h1>
            <p>
              I am a Full Stack Developer with a passion for building scalable
              and responsive web applications. I have a strong background in
              JavaScript and TypeScript, and I am proficient in React, Next.js,
              Node.js, Express, MongoDB, and PostgreSQL.I am a fast learner and
              I am always looking for new opportunities to learn and grow.
            </p>

            {/* <div className="grid grid-cols-2 grid-rows-1"> */}
            {/* <div className='justify-self-start cursor-pointer self-start p-4 rounded-lg text-black font-semibold bg-primary'>Let's Chat</div> */}
            {/* <a download={SanjayCV} className='justify-self-start cursor-pointer self-start p-4 rounded-lg text-black font-semibold bg-primary'>Resume</a> */}
            {/* </div> */}
            {/* Hobby section */}
            <div></div>
          </div>
        </div>
        <h1 className="text-2xl text- slate-200 flex items-center justify-center gap-3 font-extrabold  ">
          My Hobbies
        </h1>
        <div className="text-white p-12 ">
        <Slider  {...settings} className="pl-16">
          <ProjectBox
            projectTitle="Cricket"
            projectImg="https://static6.depositphotos.com/1157310/657/v/950/depositphotos_6576571-stock-illustration-illustration-of-cricketer.jpg"
            projectDesc="I have always been passionate about cricket since childhood."
            ishobby={true}

          />
          <ProjectBox
            projectTitle="Reading science fiction books"
            projectImg="https://preview.redd.it/realms-a-sci-fi-fantasy-anthology-magazine-created-with-v0-id0gmkqzmnn91.jpg?auto=webp&s=19c33d7bd46bab8f95530ebf0a95b7ec4fd1ee03"
            projectDesc="I love reading science fiction books like hitchhikers guide to the galaxy, superintelligence, foundation series, etc."
            ishobby={true}
          />
          <ProjectBox
            projectTitle="Watching Anime"
            projectImg="https://i.redd.it/death-note-as-a-studio-ghibli-anime-v0-zylcs9u5tf9a1.png?width=1024&format=png&auto=webp&s=56ff4443312d5dbee0254e33459d92a7779b7bc2"
            projectDesc="Watching anime is one of my favorite hobbies.It gives you a different perspective on life and helps you to think out of the box."
            ishobby={true}
          />
          
        </Slider>
      </div>
      </div>
    </Layout>
  );
};

export default AboutScreen;
