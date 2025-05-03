"use client";

import { useRef, useState, useEffect } from "react";

import Image from "next/image";

import About from "@/components/About";
import TechStack from "@/components/Stack";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function Home() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!parentRef.current || !contentRef.current) return;

  //     const bodyScroll =
  //       document.documentElement.scrollTop || document.body.scrollTop;
  //     const maxBodyScroll =
  //       document.documentElement.scrollHeight - window.innerHeight;
  //     const maxContentScroll =
  //       contentRef.current.scrollHeight - parentRef.current.clientHeight;

  //     if (maxBodyScroll > 0) {
  //       const contentScroll = (bodyScroll / maxBodyScroll) * maxContentScroll;
  //       parentRef.current.scrollTop = contentScroll;
  //     }

  //     console.log("bodyScroll:", bodyScroll);
  //     console.log("maxBodyScroll:", maxBodyScroll);
  //     console.log("maxContentScroll:", maxContentScroll);
  //     // console.log("contentScroll:", contentScroll);
  //   };

  //   document.addEventListener("scroll", handleScroll);
  //   return () => document.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <main
      className="bg-[#2E3B4E] h-screen relative"
      // ref={parentRef}
      // style={{ height: "calc(100vh - 40px)" }}
      // onScroll={(e) => e.preventDefault()}
    >
      {/* <div ref={parentRef} className="bg-green-500 box-border overflow-auto" style={{ height: "calc(100vh - 40px)" }}> */}
      {/* <div ref={contentRef} className="mt-5 mx-5"> */}
      <About />
      {/* <HamburgerMenu
      // setOpenHamburgerMenu={setOpenHamburgerMenu}
      // openHamburgerMenu={openHamburgerMenu}
      /> */}
      {/* <TechStack />
        <Projects />
        <Experiences /> */}
      {/* </div> */}
      {/* </div> */}
    </main>
  );
}
