import { ArrowUpRight } from "lucide-react";
import React from "react";
import { leftLayer, rightLayer } from "../assets";
import Container from "./Container";
import SocialLinks from "./SocialLinks";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-banner-image bg-center bg-cover bg-no-repeat relative"
    >
      <Container className="text-white py-20 min-h-screen flex items-center">
        <div className="max-w-2xl flex flex-col gap-5">
          <div>
            <p className="text-lg md:text-xl font-medium text-white/90">
              Hi, I'm{" "}
              <span className="text-3xl font-semibold tracking-widest ">
                Mozammel
              </span>{" "}
              Hosen
            </p>
            <p className="text-5xl lg:text-7xl font-semibold tracking-widest">
              I'm Expert with WordPress & ReactJS
            </p>
          </div>
          <p className="text-base md:text-lg tracking-wide text-white/80">
            I'm a Developer. I'm experienced with WordPress, ReactJS,
            JavaSCript, HTML, CSS and Basic Knowledge of (NodeJS, ExpressJS,
            MongoDB)
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-10 mt-5 z-20">
            <button className="flex items-center justify-center gap-x-1 bg-white text-black w-48 h-12 text-base font-semibold relative group overflow-hidden">
              Hire Me <ArrowUpRight size={18} className="mt-1" />
              <span className="w-full h-[1px] bg-black absolute top-0 left-0 -translate-x-[110%] group-hover:-translate-x-[55%] transitionDuration" />
              <span className="w-full h-[1px] bg-black absolute top-0 left-0 translate-x-[110%] group-hover:translate-x-[55%] transitionDuration" />
              <span className="w-full h-[1px] bg-black absolute bottom-0 left-0 -translate-x-[110%] group-hover:-translate-x-[55%] transitionDuration" />
              <span className="w-full h-[1px] bg-black absolute bottom-0 left-0 translate-x-[110%] group-hover:translate-x-[55%] transitionDuration" />
              <span className="h-full w-[1px] absolute left-0 top-0 bg-black translate-y-[110%] group-hover:translate-y-[60%] transitionDuration" />
              <span className="h-full w-[1px] absolute left-0 top-0 bg-black -translate-y-[110%] group-hover:-translate-y-[60%] transitionDuration" />
              <span className="h-full w-[1px] absolute right-0 top-0 bg-black translate-y-[110%] group-hover:translate-y-[60%] transitionDuration" />
              <span className="h-full w-[1px] absolute right-0 top-0 bg-black -translate-y-[110%] group-hover:-translate-y-[60%] transitionDuration" />
            </button>
            <button className="flex items-center justify-center gap-x-1 bg-buttonBg w-48 h-12 text-base font-semibold relative group overflow-hidden">
              Explore Now <ArrowUpRight size={18} className="mt-1" />
              <span className="w-full h-[1px] bg-white absolute top-0 left-0 -translate-x-[90%] group-hover:-translate-x-[55%] transitionDuration" />
              <span className="w-full h-[1px] bg-white absolute top-0 left-0 translate-x-[90%] group-hover:translate-x-[55%] transitionDuration" />
              <span className="w-full h-[1px] bg-white absolute bottom-0 left-0 -translate-x-[90%] group-hover:-translate-x-[55%] transitionDuration" />
              <span className="w-full h-[1px] bg-white absolute bottom-0 left-0 translate-x-[90%] group-hover:translate-x-[55%] transitionDuration" />
              <span className="h-full w-[1px] absolute left-0 top-0 bg-white translate-y-[70%] group-hover:translate-y-[60%] transitionDuration" />
              <span className="h-full w-[1px] absolute left-0 top-0 bg-white -translate-y-[70%] group-hover:-translate-y-[60%] transitionDuration" />
              <span className="h-full w-[1px] absolute right-0 top-0 bg-white translate-y-[70%] group-hover:translate-y-[60%] transitionDuration" />
              <span className="h-full w-[1px] absolute right-0 top-0 bg-white -translate-y-[70%] group-hover:-translate-y-[60%] transitionDuration" />
            </button>
          </div>
        </div>
       
      </Container>
      <div className="pb-10 pl-10">
        <SocialLinks></SocialLinks>
      </div>
      <img
        src={leftLayer}
        alt="leftLayer"
        className="w-auto h-full absolute top-0 left-0 z-10"
      />
      <img
        src={rightLayer}
        alt="rightLayer"
        className="w-auto h-full absolute top-0 right-0 z-10"
      />
    </section>
  );
};

export default Banner;
