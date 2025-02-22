"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    title: "Years of Experience",
  },
  {
    num: 55,
    title: "Projects Completed",
  },
  {
    num: 9,
    title: "Technologies Masterd",
  },
  {
    num: 102,
    title: "Code Commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[90vw] mx-auto xl:max-w-none">
          {stats.map((stat, i) => {
            return (
              <div
                className="flex-1 flex gap-6 justify-center items-center xl:justify-start"
                key={i}
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
