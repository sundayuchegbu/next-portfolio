import React from "react";
import { Spotlight } from "./ui/Spotlight-new";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MaggicButton from "./ui/MaggicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full  h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80  h-[80vh] w-[50vh]" fill="blue" />
      </div>

      <div className="flex h-[50rem] w-full items-center justify-center bg-black-100  absolute top-0 left-0 ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            // "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.2)_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black-100"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 ">
            Dynamic Prtfolio with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-blue-100"
            words="Transforming Concept into Seamless User Experiences"
          />
          <p className="md:tracking-wider mb-4 text-sm md:text-[15px] lg:text-[15px] text-justify">
            Hi, I’m Chizoba, a fullstack developer based in Nigeria, passionate
            about building beautiful, high-performing web experiences.
          </p>
          <p className="md:tracking-wider mb-4 text-sm md:text-[15px] lg:text-[15px] text-justify">
            With a strong eye for design and a love for clean, efficient code, I
            specialize in turning ideas into interactive, user-friendly
            applications that not only look great but also deliver seamless
            functionality across devices. Whether it's crafting responsive
            layouts, optimizing performance, or collaborating closely with
            designers and backend teams, I take pride in bringing digital
            visions to life with precision and creativity.
          </p>
          <p className="md:tracking-wider mb-4 text-sm md:text-[15px] lg:text-[15px] text-justify">
            I'm especially drawn to projects that focus on intuitive user
            experiences, accessibility, and elegant design systems. Beyond just
            writing code, I enjoy solving problems, staying current with modern
            frontend trends, and constantly pushing the boundaries of what the
            web can do.
          </p>
          <p className="text-justify md:tracking-wider mb-4 text-sm md:text-[15px] lg:text-[15px]">
            Let’s create something amazing together!
          </p>
          <a href="#about">
            <MaggicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
