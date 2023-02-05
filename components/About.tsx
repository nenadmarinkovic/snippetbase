import React from "react";

interface AboutProps {
  text: string;
}

const About = ({ text }: AboutProps) => (
  <h1 className="font-mono text-white text-2xl leading-[1.75]">{text}</h1>
);

export default About;
