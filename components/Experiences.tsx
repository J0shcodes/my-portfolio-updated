import Experience from "./Experience";

const experienceData = [
  {
    role: "Frontend Developer at Nebula Studios",
    duration: "Jan 2022 - Nov 2023",
    summary: `As a frontend developer at Nebula studios, 
      I worked alongside a small team of 
      frontend developers to build interfaces and 
      functionalities for multiple client applications, leveraging, 
      as Reactjs (Nextjs) and TailwindCSS.Collaborated
      cross-functionally with a team of frontend developers, backend
      engineers, and product designers to ensure cohesive product
      development. Employed best practices and continuous integration
      tools to ensure robust and efficient code deployment.`,
  },
  {
    role: "Freelance Technical Writer at Celo Foundation",
    duration: "Feb 2023 - Jun 2023",
    summary: `At Celo Foundation, I developed detailed technical content and guides focused on smart contract creation and deployment processes. Specialized in tools and languages including Javascript, Typescript, Solidity, Reactjs, hardhart, etherjs and web3js to cater to the Celo blockchain audience. Participated in the voting process for tutorial proposals.`,
  },
  {
    role: "Freelance Frontend web developer at Rubycom Services",
    duration: "Jul 2022 - Aug 2023",
    summary: `At Rubycom Services, I Developed responsive user interfaces for their offical website using NextJS, React. Collaborated with the content writer to carryout effective SEO in order to drive traffic to the company's website. Made good use of meta tags along with some NextJs features for effective SEO. Consumed RESTful APIs and integrated the website page with the backend systems.`,
  },
];

const Experiences = () => {
  return (
    <div className="py-[6.1875rem] px-[7.5625rem]">
      <h2 className="text-center text-4xl font-bold">Experience</h2>
      <div className="mt-14">
        {experienceData.map((experience, index) => (
          <div key={index} className="mt-8">
            <Experience
              role={experience.role}
              duration={experience.duration}
              summary={experience.summary}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
