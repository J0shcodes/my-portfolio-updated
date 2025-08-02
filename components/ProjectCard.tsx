import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import ProjectData from "@/interfaces/projectData";

const ProjectCard = ({
  project,
  isRight,
}: {
  project: ProjectData;
  isRight: boolean;
}) => (
  <div
    className={`bg-[#212121] p-6 hover:bg-[#4d4d4d] h-96 transition-all duration-300 hover:scale-105 flex flex-col ${
      isRight ? "row-span-1" : ""
    }`}
  >
    <div className="mb-3">
      <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">
        {project.technologies.join(", ")}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
    </div>

    <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow h-48 overflow-y-auto">
      {project.description}
    </p>

    <div className="flex items-center justify-end">
      <div className="flex space-x-3">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={16} />
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
