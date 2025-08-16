import SolidityOriginal from "react-devicons/solidity/original";
import TypescriptOriginal from "react-devicons/typescript/original";
import JavascriptOriginal from "react-devicons/javascript/original";
import ReactOriginal from "react-devicons/react/original";
import NextjsOriginal from "react-devicons/nextjs/original";
import PythonOriginal from "react-devicons/python/original";
import NodejsOriginal from "react-devicons/nodejs/original";
import ReduxOriginal from "react-devicons/redux/original";
import JestPlain from "react-devicons/jest/plain";
import NodejsPlain from "react-devicons/nodejs/plain";

import TailwindcssOriginalWordmark from "react-devicons/tailwindcss/original-wordmark";

export const techStack = [
    {
      name: "React",
      category: "Frontend",
      level: 95,
      icon: <ReactOriginal />,
      color: "#61DAFB",
      dnaCode: "ATCG-REACT-CGTA",
      matrixCode: "function Component() { return <div>Hello</div>; }",
      hologramLayer: 1,
      neuronType: "frontend",
      connections: ["TypeScript", "Next.js"],
    },
    {
      name: "TypeScript",
      category: "Language",
      level: 88,
      icon: <TypescriptOriginal />,
      color: "#3178C6",
      dnaCode: "GCTA-TYPE-ATCG",
      matrixCode: "interface Props { name: string; }",
      hologramLayer: 2,
      neuronType: "language",
      connections: ["React", "Node.js"],
    },
    {
      name: "JavaScript",
      category: "Language",
      level: 88,
      icon: <JavascriptOriginal />,
      color: "#3178C6",
      dnaCode: "GCTA-TYPE-ATCG",
      matrixCode: "interface Props { name: string; }",
      hologramLayer: 2,
      neuronType: "language",
      connections: ["React", "Node.js"],
    },
    {
      name: "Next.js",
      category: "Framework",
      level: 90,
      icon: <NextjsOriginal />,
      color: "#ffffff",
      dnaCode: "TACG-NEXT-CGAT",
      matrixCode: "export default function Page() { }",
      hologramLayer: 1,
      neuronType: "framework",
      connections: ["React", "Vercel"],
    },
    {
      name: "TailwindCSS",
      category: "Styling",
      level: 92,
      icon: <TailwindcssOriginalWordmark />,
      color: "#06B6D4",
      dnaCode: "CGAT-TAIL-ATGC",
      matrixCode: 'className="flex items-center justify-center"',
      hologramLayer: 3,
      neuronType: "styling",
      connections: ["CSS", "React"],
    },
    {
      name: "Vite",
      category: "Build tool",
      level: 82,
      icon: (
        <img
          alt=""
          height="32"
          width="32"
          src="https://cdn.simpleicons.org/vite"
        />
      ),
      color: "#8a74ff",
      dnaCode: "ATGC-NODE-TACG",
      matrixCode: `const App = () => <h1>Hello Vite + React!</h1>;`,
      hologramLayer: 2,
      neuronType: "",
      connections: ["React"],
    },
    {
      name: "Remix",
      category: "Framework",
      level: 68,
      icon: (
        <img
          alt=""
          height="32"
          width="32"
          src="https://cdn.simpleicons.org/remix"
        />
      ),
      color: "#FF9900",
      dnaCode: "ATCG-AWS-TACG",
      matrixCode: `export async function loader({ request }) {return getProjects();}`,
      hologramLayer: 4,
      neuronType: "framework",
      connections: ["Docker", "Lambda"],
    },
    {
      name: "Solidity",
      category: "Language",
      level: 75,
      icon: <SolidityOriginal />,
      color: "#47A248",
      dnaCode: "GCTA-MONGO-ATCG",
      matrixCode: "uint256 tokenAmount = 1e18;",
      hologramLayer: 4,
      neuronType: "language",
      connections: ["Node.js", "Mongoose"],
    },
    {
      name: "Python",
      category: "Language",
      level: 68,
      icon: <PythonOriginal />,
      color: "#FF9900",
      dnaCode: "ATCG-AWS-TACG",
      matrixCode: "print([x**2 for x in range(1, 6)])",
      hologramLayer: 4,
      neuronType: "language",
      connections: ["Javascript", "Typescript", "Solidity"],
    },
    {
      name: "Nodejs",
      category: "Backend",
      level: 68,
      icon: <NodejsPlain />,
      color: "#FF9900",
      dnaCode: "ATCG-AWS-TACG",
      matrixCode:
        "require('http').createServer((_, res) => res.end('Hello Node.js')).listen(3000);",
      hologramLayer: 4,
      neuronType: "backend",
      connections: ["Typescript", "Javascript"],
    },
    {
      name: "Web3.js",
      category: "Library",
      level: 68,
      icon: (
        <img
          alt=""
          height="32"
          width="32"
          src="https://cdn.simpleicons.org/web3.js"
        />
      ),
      color: "#FF9900",
      dnaCode: "ATCG-AWS-TACG",
      matrixCode: "aws.lambda.invoke(params)",
      hologramLayer: 4,
      neuronType: "cloud",
      connections: ["Solidity"],
    },
    {
      name: "Ethers",
      category: "Library",
      level: 68,
      icon: (
        <img
          alt=""
          height="32"
          width="32"
          src="https://cdn.simpleicons.org/ethers"
        />
      ),
      color: "#FF9900",
      dnaCode: "ATCG-AWS-TACG",
      matrixCode: "aws.lambda.invoke(params)",
      hologramLayer: 4,
      neuronType: "cloud",
      connections: ["Solidity"],
    },
    {
      name: "Redux Toolkit",
      category: "Library",
      level: 68,
      icon: <ReduxOriginal />,
      color: "#FF9900",
      dnaCode: "ATCG-AWS-TACG",
      matrixCode:
        "const store = Redux.createStore((state = 0, action) => action.type === 'INCREMENT' ? state + 1 : state);",
      hologramLayer: 4,
      neuronType: "backend",
      connections: ["Typescript", "Javascript"],
    },
    {
      name: "Jest",
      category: "Library",
      level: 68,
      icon: <JestPlain />,
      color: "#FF9900",
      dnaCode: "ATCG-AWS-TACG",
      matrixCode:
        "test('adds numbers', () => expect(2 + 2).toBe(4));",
      hologramLayer: 4,
      neuronType: "backend",
      connections: ["Typescript", "Javascript"],
    },
  ];