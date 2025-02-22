"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas fermentum.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas fermentum.",
    href: "",
  },
  {
    num: "03",
    title: "Content Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas fermentum.",
    href: "",
  },
  {
    num: "04",
    title: "SEO Optimization",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas fermentum.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duratian: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service, i) => {
            return (
              <div
                key={i}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* desc */}
                <p className="text-white/60">{service.desc}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
