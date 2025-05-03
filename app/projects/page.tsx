import Link from "next/link";

const Projects = () => {
  return (
    <div className="relative bg-[#121212] flex flex-col items-center">
      <div className="pt-52 pb-44 md:w-[70%] w-[80%]">
        <header className="space-y-10">
          <h2 className="text-5xl font-spaceMono font-bold text-[#D6CDEA]">
            My Projects<span className="text-[#8E44AD]">.</span>
          </h2>
          <div className="text-lg w-[70%] space-y-4 text-[#a6a6a6]">
            <p>
              I like to write about the things I&apos;m learning and building —
              mostly around frontend development, Web3, and smart contracts.
              Whether it&apos;s breaking down the difference between Web2 and
              Web3 or exploring the tools that make dApp development smoother, I
              try to keep things simple, practical, and developer-friendly.
            </p>
            <p>
              You&apos;ll find my work on{" "}
              <span>
                <Link
                  href="https://medium.com/@mosesjoshua350"
                  target="_blank"
                  className="text-[#1E90FF] border-b border-solid border-[#007bff] font-semibold"
                >
                  Medium
                </Link>
              </span>{" "}
              and{" "}
              <span>
                <Link
                  href="https://dev.to/j0shcodes"
                  target="_blank"
                  className="text-[#1E90FF] border-b border-solid border-[#007bff] font-semibold"
                >
                  DEV.to
                </Link>
              </span>
              , where I share guides, personal takes, and deep dives aimed at
              helping other devs grow and stay curious.
            </p>
          </div>
        </header>
        <div className="mt-10 grid grid-cols-12 gap-6">
          {/* {articleData.map((article, index) => (
            <div
              key={index}
              className="lg:col-span-4 md:col-span-6 col-span-12 space-y-4"
            >
              <Image
                src={article.imageUrl}
                alt="Thumbnail image"
                width={300}
                height={500}
                objectFit="contain"
                layout="responsive"
              />
              <div className="space-y-2">
                <h3 className="font-spaceMono text-2xl font-bold underline">
                  <Link href={article.link} target="_blank">
                    {article.title}
                  </Link>
                </h3>
                <p>{article.description}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
