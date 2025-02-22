"use client";

import { FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiMongodb, SiNextdotjs, SiTailwindcss, SiLaravel } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas fermentum.",
  info: [
    { fieldName: "Name", fieldValue: "Abduh Khalik" },
    { fieldName: "Phone", fieldValue: "(+62)-859-6711-8133" },
    { fieldName: "Experience", fieldValue: "12+ Years" },
    { fieldName: "Instagram", fieldValue: "@abduhkhalik" },
    { fieldName: "Nationality", fieldValue: "Indonesia" },
    { fieldName: "Email", fieldValue: "halikparestu11@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Indonesia, English" },
  ],
};

// experience data
const experince = {
  icon: "/public/assets/resume/badge.svg",
  title: "My Experience",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas fermentum.",
  items: [
    {
      company: "RS.TK.III Dr. Sindhu Trisno Palu",
      position: "Web Developer",
      duration: "2023 - present",
    },
    {
      company: "Nara Techno",
      position: "UI/UX Designer",
      duration: "Summer 2023",
    },
    {
      company: "Nara Techno",
      position: "Web Designer",
      duration: "Summer 2023",
    },
    {
      company: "PT.Telekomunikasi Indonesia",
      position: "Sales Force",
      duration: "2019 - 2023",
    },
    {
      company: "BPBD KOTA PALU",
      position: "Admin",
      duration: "2017 - 2019",
    },
  ],
};

// education data
const education = {
  icon: "/public/assets/resume/cap.svg",
  title: "My Education",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas fermentum.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Front-end developer",
      duration: "2023",
    },
    {
      institution: "Roadmap.sh",
      degree: "front-end Developer Track",
      duration: "2022",
    },
    {
      institution: "Online Course Platform",
      degree: "React.Js Course",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      degree: "UI/UX Design",
      duration: "2022",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas fermentum.",
  skillList: [
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiLaravel />,
      name: "Laravel",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experince.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experince.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experince.items.map((item, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] man-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          {/* dot. */}
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] man-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          {/* dot. */}
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.desc}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, i) => {
                    return (
                      <li key={i}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="capitalize">
                              {skill.name}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.desc}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((info, i) => {
                    return (
                      <li key={i} className="flex justify-center items-center xl:justify-start gap-4">
                        <span className="text-white/60">{info.fieldName}</span>
                        <span className="text-xl">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
