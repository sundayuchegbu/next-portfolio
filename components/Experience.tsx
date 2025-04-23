import React from "react";
import { Button } from "./ui/MovingBorders";
import { workExperience } from "../data";

const Experience = () => {
  return (
    <div id="testimonials" className="py-20">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        My <span className="text-[#25aae1]">Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            duration={Math.floor(Math.random() * 10000 + 10000)}
            key={card.id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-b-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
