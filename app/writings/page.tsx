import HamburgerMenu from "@/components/HamburgerMenu";
import Image from "next/image";
import Link from "next/link";

const articleData = [
  {
    title: "Building React Forms Painlessly With Formik",
    description: "A guide to building forms in React using Formik.",
    link: "https://dev.to/j0shcodes/building-react-forms-painlessly-with-formik-nhj",
    imageUrl:
      "https://media2.dev.to/dynamic/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7dsu7vyevyu98hyq3uo6.png",
  },
  {
    title: "React Form Validation With Formik and Yup",
    description:
      "A tutorial on validating forms in React using Formik and Yup.",
    link: "https://dev.to/j0shcodes/react-form-validation-with-formik-and-yup-39if",
    imageUrl:
      "https://media2.dev.to/dynamic/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7dsu7vyevyu98hyq3uo6.png",
  },
  {
    title:
      "Enhancing User Experience with Performance Optimization in Frontend Web Development",
    description:
      "An article exploring technological solutions and best practices to optimizing performance in frontend web development.",
    imageUrl:
      "https://media2.dev.to/dynamic/image/width=1000,height=600,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh7a8dgzeg1gkh2w1s93a.jpg",
    link: "https://dev.to/j0shcodes/enhancing-user-experience-with-performance-optimization-in-frontend-web-development-2moo",
  },
  {
    title:
      "Ethereum’s Path to Scalability: An Inside Look at Layer 2 Technologies",
    description:
      "Confused about Ethereum scalability? Learn how Layer 2 technologies are making transactions on ETH faster and cheaper without losing security",
    imageUrl:
      "https://images.pexels.com/photos/14891535/pexels-photo-14891535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=600&dpr=2",
    link: "https://medium.com/@mosesjoshua350/ethereums-path-to-scalability-an-inside-look-at-layer-2-technologies-ad4f877f185e",
  },
];

const MyWritings = () => {
  return (
    <div className="relative bg-[#121212] flex flex-col items-center">
      <div className="pt-52 pb-44 md:w-[70%] w-[80%]">
        <header className="space-y-10">
          <h2 className="text-5xl font-spaceMono font-bold text-[#DCE3F2]">
            My Writings<span className="text-[#1E90FF]">.</span>
          </h2>
          <div className="text-lg w-[70%] space-y-4 text-[#b3b3b3]">
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
          {articleData.map((article, index) => (
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
                  <Link href={article.link} target="_blank" className="text-[#DCE3F2]">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-[#b3b3b3]">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWritings;
