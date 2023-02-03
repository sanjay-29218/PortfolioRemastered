import React from "react";
import Layout from "../components/Layout";
import ProjectBox from "../components/ProjectBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSession } from "next-auth/react";
type Props = {};

const projects = (props: Props) => {
  const {data:session} = useSession()
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <Layout>
      <div>
      <h1 className="text-white text-4xl font-bold">
        Recent <span className="primary">Projects</span>{" "}
      </h1>
      {session && (
        
        <div className="cursor-pointer text-right  text-2xl">
          <span>New Projects</span>{" "}
          <span className="primary text-3xl">+</span>
          </div>
      )}
 

      <div className="text-white p-12 ">
        <Slider  {...settings} className="pl-16">
          <ProjectBox
            projectTitle="Daraz Clone"
            projectImg="https://www.poudelsanjay.com.np/darazclone.png"
            projectDesc="lorem lorem lorem"
            ishobby={false}
          />

          <ProjectBox
            projectTitle="LinkedIn Clone"
            projectImg="https://www.poudelsanjay.com.np/linkedin.png"
            projectDesc="lorem lorem lorem"
            ishobby={false}

          />
          <ProjectBox
            projectTitle="Spotify Clone"
            projectImg="https://www.poudelsanjay.com.np/spotify.png"
            projectDesc="lorem lorem lorem"
            ishobby={false}

          />
          <ProjectBox
            projectTitle="Music Recommendation "
            projectImg="https://www.poudelsanjay.com.np/musicrecommender.png"
            projectDesc="lorem lorem lorem"
          />
        </Slider>
      </div>
      </div>
    </Layout>
  );
};

export default projects;
