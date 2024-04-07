import Link from "next/link";

import GithubIcon from "@/public/assets/icons/githubIcon";
import TwitterIcon from "@/public/assets/icons/twitterIcon";
import LinkedinIcon from "@/public/assets/icons/linkedinIcon";

const Footer = () => {
  return (
    <div className="py-[2.1875rem] px-[7.5625rem]">
      <div className="flex justify-between">
        <div className="text-[2.8125rem] font-bold flex items-center">
          <Link href="/">JM</Link>
        </div>
        <div className="flex justify-between items-center w-[500px]">
          <div>mosesjoshua350@gmail.com</div>
          <div className="flex justify-between w-[30%]">
            <Link href="https://github.com/J0shcodes" legacyBehavior>
              <a>
                <GithubIcon />
              </a>
            </Link>
            <Link href="https://twitter.com/JPhleg" legacyBehavior>
              <a>
                <TwitterIcon />
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/joshua-moses-4117a7209/"
              legacyBehavior
            >
              <a>
                <LinkedinIcon />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#42446e] h-[0.355rem] rounded-full my-8"></div>
      <div className="flex justify-between">
        <ul className="flex justify-between w-[34.625rem]">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-lg text-josh-gray-1 hover:text-white">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="text-lg text-josh-gray-1 hover:text-white">About</a>
            </Link>
          </li>
          <li>
            <Link href="/stack" legacyBehavior>
              <a className="text-lg text-josh-gray-1 hover:text-white">
                Tech Stack
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects" legacyBehavior>
              <a className="text-lg text-josh-gray-1 hover:text-white">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="contact" legacyBehavior>
              <a className="text-lg text-josh-gray-1 hover:text-white">
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <div>J0shcodes &copy; 2024</div>
      </div>
    </div>
  );
};

export default Footer;
