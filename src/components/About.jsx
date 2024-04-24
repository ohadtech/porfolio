import { useState, useTransition, useRef, Suspense } from "react";
import TabbedComponent from "./TabbedComponent";
import { Skills } from "../constants/Skills";
import { motion, useInView } from "framer-motion";
import Loading from "./Loading";

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent, { once: true });

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className=" sm:px-8 py-[80px] overflow-hidden" id="about">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex gap-4 items-center"
      >
        <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
          About Me
        </h3>
        <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
      </motion.div>
      <div className="py-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <motion.div
          ref={refContent}
          initial={{
            opacity: 0,
            x: -100,
            scale: 0.8,
            filter: "blur(6px)",
          }}
          animate={
            inViewContent
              ? {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }
              : { opacity: 1, x: -100, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className="flex-1 md:max-w-[40%] sm:mt-10 "
        >
          <Suspense fallback={<Loading />}>
            <img
              src="/images/about.png"
              alt="meme"
              loading="lazy"
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] "
            />
          </Suspense>
        </motion.div>
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={
            inViewContent
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 100, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-textWhite p-4 text-lg sm:text-xl sm:leading-7">
            I am a passionate MERN Stack Developer and a Problem Solver,
            dedicated to creating impactful codes that thrive on the internet.
            <br />I have experience working with React,React
            Native,JavaScript,PHP, TypeScript, HTML, CSS, Node js,Postman,MYSQL
            Express.js,Firebase,Tailwind CSS, and Git.
            <br />I am a quick learner and I am always looking to expand my
            knowledge and skill set.
          </p>

          <div className="flex flex-row justify-start gap-6 pl-4">
            <TabbedComponent
              selectTab={() => selectTab("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabbedComponent>
            <TabbedComponent
              selectTab={() => selectTab("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabbedComponent>
            <TabbedComponent
              selectTab={() => selectTab("work")}
              active={tab === "work"}
            >
              {" "}
              Work Experience{" "}
            </TabbedComponent>
          </div>
          <div className="mt-8 pl-4 max-w-[100%] min-h-[140px] flex flex-wrap gap-x-10 gap-y-8">
            {tab === "skills" ? (
              Skills?.map((skill, i) => {
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    key={i}
                    className="group relative hover:-translate-y-[4px] transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    <img src={skill.img} alt={skill.description} />
                    <span className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-textWhite rounded-md absolute left-1/2 -translate-x-1/2 translate-y-1/2 -mt-1 opacity-0 mx-auto px-2 w-max">
                      {skill.description}
                    </span>
                  </motion.div>
                );
              })
            ) : tab === "education" ? (
              <ul className="list-disc pl-2">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h5 className="text-2xl font-[600]">
                    Pakistan Air Force Karachi Institute of Economics &
                    Technology
                  </h5>
                  <div className="mt-2 flex gap-4 items-center">
                    <div className="w-[15px] h-[2px] bg-textWhite "></div>
                    <span>
                      <p>Bachelor in Computer Science</p>
                      <span>2016-2020</span>
                    </span>
                  </div>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h5 className="text-2xl font-[600]">Private</h5>
                  <div className="mt-2 flex gap-4 items-center">
                    <div className="w-[15px] h-[2px] bg-textWhite "></div>
                    <span>
                      <p> Intermediate </p>
                      <span>2013-2016</span>
                    </span>
                  </div>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h5 className="text-2xl font-[600]">Matric</h5>
                  <div className="mt-2 flex gap-4 items-center">
                    <div className="w-[15px] h-[2px] bg-textWhite "></div>
                    <span>
                      <p>Grammer High School Bin Qasim Karachi</p>
                      <span>2013</span>
                    </span>
                  </div>
                </motion.li>
              </ul>
            ) : (
              <ul className="list-disc pl-2 flex flex-col gap-4">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h5 className="text-2xl font-[600]">
                    Full Stack Engineer{" "}
                    <span className="text-base font-[500]">
                      - Innovative Widgets
                    </span>
                  </h5>
                  <div className="mt-2 flex gap-4 items-center">
                    <div className="w-[15px] h-[2px] bg-textWhite "></div>
                    <span>
                      <p>
                        As a full-stack developer, I handle a wide range of
                        responsibilities. This includes building APIs using PHP
                        or Node.js, integrating them with MySQL databases, and
                        deploying them on AWS or cPanel for live access.
                        Additionally, I develop websites using React and
                        Tailwind CSS to create dynamic user interfaces. I
                        utilize Postman for API testing to ensure functionality
                        and reliability.
                      </p>
                    </span>
                  </div>
                  <div className="ml-6 mt-1 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                    <span className="">Jan 2024 - Present</span>
                    <span className="">On Site</span>
                  </div>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h5 className="text-2xl font-[600]">
                    Associate Software Engineer{" "}
                    <span className="text-base font-[500]">- A.F Ferguson</span>
                  </h5>
                  <div className="mt-2 flex gap-4 items-center">
                    <div className="w-[15px] h-[2px] bg-textWhite "></div>
                    <span>
                      <p>
                        As a permanent frontend developer, I've expanded my
                        skill set to include React, React Native, and utilizing
                        Tailwind CSS for efficient styling. Additionally, I've
                        gained experience in making API calls using async
                        functions, testing APIs in Postman, and effectively
                        fixing bugs while enhancing UI for optimal user
                        experience.
                      </p>
                    </span>
                  </div>
                  <div className="ml-6 mt-1 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                    <span className="">Feb 2022 - Dec 2023</span>
                    <span className="">On Site</span>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h5 className="text-2xl font-[600]">
                    Frontend Developer Intern{" "}
                    <span className="text-base font-[500]">-A.F Ferguson</span>
                  </h5>
                  <div className="mt-2 flex gap-4 items-center">
                    <div className="w-[15px] h-[2px] bg-textWhite "></div>
                    <span>
                      <p>
                        As a frontend developer, my expertise includes
                        proficiency in React, HTML, Tailwind CSS, and responsive
                        design. I excel in crafting engaging user interfaces and
                        experiences while adhering to best practices. My
                        responsibilities encompass bug fixing, ensuring seamless
                        functionality, and conducting API testing to guarantee
                        smooth integration with backend services.
                      </p>
                    </span>
                  </div>
                  <div className="ml-6 mt-1 text-gray-500 font-medium flex items-center justify-between max-w-[95%]">
                    <span className="">Aug 2021 - Jan 2022</span>
                    <span className="">On site</span>
                  </div>
                </motion.li>
              </ul>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
