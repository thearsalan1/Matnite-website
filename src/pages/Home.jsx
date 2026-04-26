import React from "react";
import Hero from "../components/home/Hero";
import { RiRobot3Line } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";
import { IoBagCheckOutline, IoCodeSlash } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import Marquee from "../components/home/Marquee";
import Expertise from "../components/home/Expertise";
import Application from "../components/home/Application";
import Education from "../components/home/Education";
import Analytics from "../components/home/AnalyticsAndInnovation";
import WhyUs from "../components/home/WhyUs";
import Description from "../components/home/Description";

const List = [
  {
    heading: "AI solutions",
    text: "Intelligent AI products and services to transform your business operations and drive growth.",
    logo: <RiRobot3Line />,
    bg: "#1c63f6",
  },
  {
    heading: "CRM & ERP systems",
    text: "Customized CRM and ERP solutions to streamline your business processes and enhance efficiency.",
    logo: <FaChartBar />,
    bg: "#04b06e",
  },
  {
    heading: "Internships",
    text: "Hands-on internship to gain real-world experience and industry exposure.",
    logo: <IoBagCheckOutline />,
    bg: "#f86c09",
  },
  {
    heading: "DIY Tech projects",
    text: "Build real-world projects and sharpen your practical tech skills.",
    logo: <IoCodeSlash />,
    bg: "#1c63f6",
  },
  {
    heading: "Coding for coders",
    text: "Fun interactive coding classes for beginners to advanced learners.",
    logo: <GiGraduateCap />,
    bg: "#04b06e",
  },
];

const Home = () => {
  return (
    <>
      <Hero List={List} />
      <Marquee />
      <Expertise />
      <Education />
      <Application />
      <Analytics />
      <WhyUs />
      <Description />
    </>
  );
};

export default Home;
