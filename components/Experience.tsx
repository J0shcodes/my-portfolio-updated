import { FC } from "react"

interface ExperienceProps {
    role: string,
    duration: string,
    summary: string
}

const Experience: FC<ExperienceProps> = ({role, duration, summary}) => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">
          {role}
        </h3>
        <p className="text-josh-gray-2">{duration}</p>
      </div>
      <div className="mt-5 text-josh-gray-2">
        {summary}
      </div>
    </>
  );
};

export default Experience;
