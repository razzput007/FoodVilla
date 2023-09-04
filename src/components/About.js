import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import PathContext from "../utils/PathContext";
import { GITHUB_LINK, GMAIL_LINK, LINKEDIN_LINK } from "../constants";
import { SiGithub, SiLinkedin, SiGoogle } from "react-icons/si";
import RajaAvatar from '../../assests/RajaAvatar.jpeg'

const About = () => {
  const {setCurrentPath} = useContext(PathContext);
  const {pathname} = useLocation();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [])
  
  return (
    <>
      <div className="p-20 bg-orange-300 text-2xl font-Arvo">
        ″Our mission is to elevate the quality of life for the urban consumer
        with unparalleled convenience. Convenience is what makes us tick. It's
        what makes us get out of bed and say, "Let's do this."
      </div>

      <div className="flex-1 flex justify-center items-center font-poppins bg-slate-50">
      <div className="flex flex-col justify-center items-center mt-4 gap-5 shadow-lg border w-fit max-w-xs">
        <p className="font-medium text-xl w-full text-center py-2">About Me</p>
        <img
          className="rounded-full w-[150px] h-[150px] border-none align-middle"
          src={RajaAvatar}
          alt="user photo"
        />
        <div className="bg-slate-900 text-white p-4 rounded-sm">
          <p className="pb-4 text-lg font-normal text-slate-300 text-center">
            ReactJs | JavaScript | HTML5 | CSS3 | Tailwind CSS | Front End
            Developer
          </p>
          <div className=" text-[2em] text-center w-full flex items-center justify-center mt-2">
            <a
              href={GITHUB_LINK}
              className="mb-2 pr-4 hover:scale-105"
              target="_blank"
            >
              <i className="bg-[#333] icon--i">
                <SiGithub className="m-auto" />
              </i>
            </a>
            <a
              href={LINKEDIN_LINK}
              className="mb-2 pr-4 hover:scale-105"
              target="_blank"
            >
              <i className="bg-[#0e76a8] icon--i">
                <SiLinkedin className="m-auto" />
              </i>
            </a>
            <a href={GMAIL_LINK} className="mb-2 hover:scale-105">
              <i className="bg-[#ea4335] icon--i">
                <SiGoogle className="m-auto" />
              </i>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>

      <h1 className="text-center my-9 text-5xl">What’s In Store For The Future?</h1>

      <h4 className="text-center text-xl mx-20 my-10">Food Studio has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings.</h4>

      <div className="flex justify-between m-10">
          <h2 className="text-6xl w-3/4">Changing <b>the Game</b></h2>
          <div className="flex">
              <span className="border rounded border-orange-600 text-center text-xl mx-2 px-1">
                  <p className="my-6"><b>150000+</b> Restaurant Partners Countrywide</p></span>
              <span className="border rounded border-orange-600 text-center text-xl mx-2 px-1">
                  <p className="my-6"><b>260000+</b> Delivery Executives</p></span>
              <span className="border rounded border-orange-600 text-center text-xl mx-2 px-1">
                  <p className="my-6"><b>5000+</b> Employees across the Country</p></span>
              <span className="border rounded border-orange-600 text-center text-xl mx-2 px-1">
                  <p className="my-6"><b>500+</b> Cites PAN India</p></span>
              
          </div>
      </div>
    </>
  );
};

export default About;
