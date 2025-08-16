import Link from "next/link";
import { LuCookingPot } from "react-icons/lu";
import { Mail } from "lucide-react";

const About = () => {
  return (

    <div className="min-h-scree flex flex-col items-center justify-center relative h-full overflow-hidden pt-52 pb-22">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="hero mb-16">
            <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#f0f2f5] via-[#339DFF] to-[#f0f2f5] bg-clip-text text-transparent mb-6 animate-slideUp">
              JOSHUA MOSES
            </h1>

            <div className="text-2xl lg:text-3xl text-[#B3B3B3] mb-4 animate-slideUp delay-200">
              <div className="inline-flex items-center flex-wrap justify-center">
                <span className="bg-gradient-to-r from-[#339DFF] to-[#0099FF] bg-clip-text text-transparent font-semibold">
                  Frontend Developer
                </span>
                <span className="text-[#666] hidden md:block">•</span>
                <span className="bg-gradient-to-r from-[#339DFF] to-[#0099FF] bg-clip-text text-transparent font-semibold hidden md:block">
                  Smart Contract Developer
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 animate-slideUp delay-400">
            <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#339DFF]/20 rounded-2xl p-8 hover:border-[#339DFF]/40 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[#f0f2f5] mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#339DFF] rounded-full"></div>
                Experience & Passion
              </h3>
              <p className="text-[#8C8C8C] leading-relaxed">
                Frontend developer with 4+ years of experience building
                performant, scalable digital interfaces. I specialize in React,
                Next.js, and TypeScript, creating seamless user experiences that
                solve real problems.
              </p>
            </div>

            <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#339DFF]/20 rounded-2xl p-8 hover:border-[#339DFF]/40 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[#f0f2f5] mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#339DFF] rounded-full"></div>
                Frontend & Web3 Focus
              </h3>
              <p className="text-[#8C8C8C] leading-relaxed">
                Specializing in frontend development with extensive experience
                in blockchain technologies. I create intuitive user interfaces
                while also developing and integrating smart contracts,
                especially in crypto and financial technology spaces.
              </p>
            </div>
          </div>

          <div className="mb-16 animate-slideUp delay-500">
            <h3 className="text-lg font-semibold text-[#f0f2f5] mb-6">
              Tech Stack & Interests
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Web3",
                "Smart Contracts",
                "Real-time Systems",
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="bg-[#2A2A2A]/80 border border-[#339DFF]/30 text-[#f0f2f5] px-4 py-2 rounded-full text-sm hover:bg-[#339DFF]/20 transition-all duration-300 hover:border-[#339DFF]/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 animate-slideUp delay-600">
            <Link
              href="/projects"
              className="group bg-gradient-to-r from-[#339DFF] to-[#0099FF] hover:from-[#0099FF] hover:to-[#339DFF] text-white py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#339DFF]/25"
            >
              <span className="font-semibold">View Projects</span>
              <LuCookingPot
                size={20}
                className="group-hover:-rotate-12 transition-transform duration-300"
              />
            </Link>

            <Link
              href="mailto:mosesjoshua350@gmail.com"
              className="group bg-[#2A2A2A] hover:bg-[#339DFF] border border-[#339DFF]/30 hover:border-[#339DFF] text-white py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:transform hover:scale-105"
            >
              <span className="font-semibold">Contact Me</span>
              <Mail
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
            </Link>
          </div>

          <div className="flex justify-center gap-6 animate-slideUp delay-700">
            <Link
              href="#"
              className="text-[#8C8C8C] hover:text-[#339DFF] transition-colors duration-300 hover:transform hover:scale-110"
            >
            </Link>
            <Link
              href="#"
              className="text-[#8C8C8C] hover:text-[#339DFF] transition-colors duration-300 hover:transform hover:scale-110"
            >
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
