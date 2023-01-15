import React from "react";

interface AboutProps {
  text: string;
}

const About = ({ text }: AboutProps) => (
  <h1 className="text-2xl leading-[1.75] mt-5">{text}</h1>
);

export default About;
