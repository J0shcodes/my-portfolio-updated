"use client";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const handleContactMeClick = (e) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    href.replace(/.*\#/, "");

    const element = document.getElementById("contact");
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="w-[35rem] pt-12">
          <div>
            <div className="text-[3.5rem] leading-[3.75rem] font-semibold">
              Nice to meet you! I&apos;m{" "}
              <span className="border-b-2 border-solid border-[#0000ff]">
                Joshua Moses
              </span>
            </div>
            {/* <div className="mt-0">I&apos;m Joshua Moses</div> */}
          </div>
          <div className="mt-10">
            I am Frontend and blockchain expert with a love for cutting-edge
            digital experiences that combine technical expertise and
            originality. a track record of developing secure decentralized
            applications and appealing user interfaces. collaborative, focused
            on the details, and cross-disciplinary I work well in
            multidisciplinary teams and keep up with emerging technologies.
          </div>
        </div>
        <div>
          <Image
            src="/images/testImage.jpg"
            alt="Test"
            width={400}
            height={350}
          />
        </div>
      </div>
      <div>
        <Link href="#contact" legacyBehavior>
          <a
            className="cursor-pointer uppercase border-b-2 border-solid border-[#0000ff] hover:text-[#0000ff]"
            onClick={handleContactMeClick}
          >
            Contact Me
          </a>
        </Link>
      </div>
    </div>
  );
};

export default About;
