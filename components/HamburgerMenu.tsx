"use client"

import Link from "next/link";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

import { usePortfolioGlobalContext } from "@/context/PortfolioGlobalContext";
import { GiConsoleController } from "react-icons/gi";

const hamburgerMenuData = [
  {
    name: "Home",
    description: "Back to base",
    link: "/",
  },
  {
    name: "Projects",
    description: "Cool stuff I've built",
    link: "/projects",
  },
  {
    name: "About",
    description: "Back to the home page",
    link: "/about",
  },
  {
    name: "Writings",
    description: "Thoughts, tutorials & dev notes",
    link: "/writings",
  },
];

const HamburgerMenu = () => {
  const { openHamburgerMenu, setOpenHamburgerMenu } =
    usePortfolioGlobalContext();

    console.log(openHamburgerMenu)
  return (
    <div
      className={`bg-[#0d0d0d] fixed w-full z-50 ${
        openHamburgerMenu ? "top-0" : "-top-[100%]"
      } px-8 py-4 h-screen transition-[top] ease-in-out`}
    >
      <section className="flex justify-between">
        <div className="text-[2.8125rem] font-bold flex items-center text-header-color">
          <Link href="/" className="text-header-color font-spaceMono">
            JM
          </Link>
        </div>
        <button
          onClick={() => setOpenHamburgerMenu(false)}
          className="flex flex-col justify-center space-y-1"
        >
          <div className="h-0.5 w-12 translate-y-1.5 rotate-45 rounded-full bg-[#1E90FF]"></div>
          <div className="h-0.5 w-12 rounded-full bg-[#1E90FF] opacity-0"></div>
          <div className="h-0.5 w-12 -translate-y-1.5 -rotate-45 rounded-full bg-[#1E90FF]"></div>
        </button>
      </section>
      <section className="mt-14 flex gap-6">
        <div className="h-1 w-16 bg-[#2E3B4E] flex self-center"></div>
        <div className="flex justify-between w-[12%]">
          <Link href="https://github.com/J0shcodes" target="_blank">
            <FaGithub size={22} />
          </Link>
          <Link href="https://x.com/JPhleg" target="_blank">
            <FaXTwitter size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joshua-moses-4117a7209/"
            target="_blank"
          >
            <FaLinkedin size={22} />
          </Link>
          <Link href="mailto:mosesjoshua350@gmail.com">
            <TfiEmail size={22} />
          </Link>
        </div>
      </section>
      <section className="mt-16">
        <div className="w-[35%] space-y-20">
          {hamburgerMenuData.map((item, index) => (
            <div className="grid grid-cols-6" key={index}>
              <Link
                href={item.link}
                className="text-5xl text-[#4AA3FF] hover:text-header-color col-span-3 font-spaceMono"
                onClick={() => setOpenHamburgerMenu(false)}
              >
                {item.name}
              </Link>
              <p className="flex self-center text-[#8C8C8C] col-span-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HamburgerMenu;
