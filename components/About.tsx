import Image from "next/image";
import Link from "next/link";

import Header from "./Header";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center relative h-full">
      {/* <Header/> */}
      {/* <div className="">
        <div> */}
      {/* <Image
        src="/assets/images/dummyProfile.jpg"
        alt=""
        width={300}
        height={300}
        className="rounded-full aspect-square object-cover"
      /> */}
      {/* </div>
      </div> */}
      <div className="font-bold text-[#f0f2f5] w-[50rem] mt-8 text-center">
        {/* <div className="text-5xl">
          <span className="bg-gradient-to-r from-[#b16cea] to-[#ff7b56] bg-clip-text text-transparent inline-block">
            Hello, I&apos;m Joshua,
          </span>{" "}
          frontend/smart contract developer
        </div> */}
        <div className="hero">
          <h1 className="text-header-color uppercase text-5xl">Joshua Moses</h1>
          <div className="flex justify-center items-center gap-1 text-3xl mt-3 text-[#B3B3B3]">
            <div className="overflow-hidden whitespace-nowrap inline-block animate-showup">
              Frontend
            </div>
            {/* <span className="invisible text-xs">-</span> */}
            <div className="overflow-hidden whitespace-nowrap w-0 animate-reveal flex gap-1">
              <span className="-ml-[355px] animate-slidein">Developer</span>
              <div className=" overflow-hidden">
                <div className="">
                  <div>and Smart Contract Developer</div>
                  {/* <div>and Technical Writer</div>
                  <div>and Smart Contract Developer</div>{" "}
                  <div>and Technical Writer</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-[#8C8C8C] space-y-4">
          <p >
            A Software engineer who loves building clean, responsive, and
            user-friendly interfaces. I am also passionate about building
            delightful digital experiences that are fast, functional, and
            genuinely useful.
          </p>
          <p>
            Outside of coding, I’m usually learning something new, tinkering
            with side projects, or writing to share what I’ve picked up along
            the way.
          </p>
          <p>Let&apos;s build something cool together</p>
        </div>
      </div>
      {/* <div className="mt-14 flex justify-between w-[350px]">
        <button className="bg-white text-[#161513] font-bold text-lg rounded-full py-2 px-5 border border-solid border-white hover:bg-transparent hover:text-white">
          <Link href="mailto:mosesjoshua350@gmail.com">Get in Touch</Link>
        </button>
        <button className="bg-transparent border border-solid border-white text-white text-lg font-bold rounded-full py-2 px-5 hover:bg-white hover:text-[#161513]">
          Download CV
        </button>
      </div> */}
    </div>
    // </div>
  );
};

export default About;
