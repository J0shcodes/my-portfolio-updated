import Image from "next/image";

import About from "@/components/About";
import TechStack from "@/components/Stack";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="">
      <About/>
      <TechStack/>
      <Projects/>
      <Experiences/>
    </main>
  );
}
