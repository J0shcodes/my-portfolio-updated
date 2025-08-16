"use client";

import { useEffect, useRef, useState } from "react";

import { techStack } from "@/data/techStack";
import TechStack from "@/components/Stack";

const ToolsPage = () => {
  const [codeLines, setCodeLines] = useState<
    {
      id: number;
      code: string;
      color: string;
      speed: number;
      x: number;
      y: number;
    }[]
  >([]);

  const matrixRef = useRef(null);

  useEffect(() => {
    const generateMatrixCode = () => {
      const newLines: {
        id: number;
        code: string;
        color: string;
        speed: number;
        x: number;
        y: number;
      }[] = [];
      for (let i = 0; i < 50; i++) {
        const tech = techStack[Math.floor(Math.random() * techStack.length)];
        newLines.push({
          id: Math.random(),
          code: tech.matrixCode,
          color: tech.color,
          speed: Math.random() * 2 + 1,
          x: Math.random() * 100,
          y: -10,
        });
      }
      setCodeLines(newLines);
    };

    generateMatrixCode();
    const interval = setInterval(() => {
      setCodeLines((prev) =>
        prev
          .map((line) => ({
            ...line,
            y: line.y + line.speed,
          }))
          .filter((line) => line.y < 110)
      );

      if (Math.random() < 0.3) {
        const tech = techStack[Math.floor(Math.random() * techStack.length)];
        setCodeLines((prev) => [
          ...prev,
          {
            id: Math.random(),
            code: tech.matrixCode,
            color: tech.color,
            speed: Math.random() * 2 + 1,
            x: Math.random() * 100,
            y: -10,
          },
        ]);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={matrixRef}
      className="relative min-h-screen overflow-hidden font-mono pb-44 flex items-center justify-center"
    >
      <div className="absolute inset-0">
        {codeLines.map((line) => (
          <div
            key={line.id}
            className="absolute text-xs font-mono opacity-80 animate-pulse whitespace-nowrap"
            style={{
              left: `${line.x}%`,
              top: `${line.y}%`,
              color: line.color,
              textShadow: `0 0 10px ${line.color}`,
              transform: "translateX(-50%)",
            }}
          >
            {line.code}
          </div>
        ))}
      </div>

      <div className="relative z-10 pt-52 md:w-[70%] w-[80%]">
        <header className="space-y-10 animate-slideUp delay-400">
          <h2 className="sm:text-5xl text-4xl font-spaceMono font-bold text-[#DCE3F2]">
            Tools & Tech I Work With
            <span className="text-[#1E90FF]">.</span>
          </h2>
          <p className="md:text-lg text-base lg:w-[70%] w-full">
            These are the languages, tools, and frameworks I reach for when
            building. From shipping slick UIs to deploying web3 apps and
            experimenting with new ideas. It&apos;s a mix of what I enjoy
            working with and what helps me move fast and build right.
          </p>
        </header>

        <div className="pt-8 animate-slideUp delay-600">
          <TechStack/>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
