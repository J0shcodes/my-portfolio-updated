import ProjectCard from "@/components/ProjectCard";
import { projects, workInProgress } from "@/data/projectData";

const Projects = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen pt-52 pb-44">
      <div className="md:w-[70%] w-[80%]">
        <div className="">
          <header className="space-y-10 animate-slideUp delay-400">
            <h2 className="sm:text-5xl text-4xl font-spaceMono font-bold text-[#D6CDEA]">
              My Projects<span className="text-[#8E44AD]">.</span>
            </h2>
            <div className="md:text-lg text-base lg:w-[70%] w-full space-y-4 text-[#a6a6a6]">
              <p>
                These are some of the things I’ve been building. Tools,
                dashboards, and ideas brought to life with code. I enjoy working
                on projects that solve real problems, scratch an itch, or just
                help me learn something new. From trading utilities to dev tools
                and weather apps, every project here taught me something and
                pushed me a bit further as a developer.
              </p>
            </div>
          </header>
          <div className="py-16 animate-slideUp delay-600">
            <div className="max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    isRight={index % 2 === 1}
                    completed={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-50">
          <header className="space-y-10 animate-slideUp delay-400">
            <h2 className="sm:text-5xl text-4xl font-spaceMono font-bold text-[##DFF6FF]">
              Work in Progress<span className="text-[#A8BEC6">.</span>
            </h2>
            <div className="md:text-lg text-base lg:w-[70%] w-full space-y-4 text-[#a6a6a6]">
              <p>
                Not everything I’m building is finished and that’s the fun part.
                This section is for projects that are still in motion: tools I’m
                refining, ideas I’m prototyping, and builds that haven’t fully
                shipped (yet). It’s a glimpse into my creative process, the
                problems I’m currently exploring, and where my focus is heading
                next.
              </p>
            </div>
          </header>
          <div className="py-16 animate-slideUp delay-600">
            <div className="max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {workInProgress.map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    isRight={index % 2 === 1}
                    completed={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
