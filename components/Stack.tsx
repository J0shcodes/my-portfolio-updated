import { techStack } from "@/data/techStack";

const TechStack = () => {
  return (
    <>
      <div className="bg-gray-900/90 border border-emerald-500/60 rounded-lg md:p-6 p-3 backdrop-blur-sm shadow-lg shadow-emerald-500/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-gray-800/80 border border-emerald-400/40 rounded p-4 hover:border-emerald-400/80 hover:bg-gray-800/90 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-400 opacity-0 group-hover:opacity-100 animate-pulse" />

              <div className="flex items-center space-x-4 mb-3">
                <div
                  className="text-3xl"
                  style={{
                    color: tech.color,
                    textShadow: `0 0 10px ${tech.color}`,
                  }}
                >
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-emerald-300 font-bold text-lg">
                    {tech.name}
                  </h3>
                  <p className="text-emerald-200/80 text-sm">{tech.category}</p>
                </div>
              </div>

              <div className="bg-gray-950/80 rounded p-3 mb-3 border border-gray-600/50">
                <code className="text-emerald-300/90 text-xs">
                  {tech.matrixCode}
                </code>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-emerald-400/20 rounded transition-opacity duration-200" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
