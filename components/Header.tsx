import GithubIcon from "@/public/assets/icons/githubIcon";
import LinkedinIcon from "@/public/assets/icons/linkedinIcon";
import TwitterIcon from "@/public/assets/icons/twitterIcon";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center absolute px-8 py-4 w-full">
      <div className="text-[2.8125rem] font-bold flex items-center text-header-color"><Link href="/">JM</Link></div>
      {/* <div className="flex justify-between items-center w-[60.0625rem]">
        <ul className="flex justify-between w-[65%]">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-xl text-josh-gray-1 hover:text-white">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="text-xl text-josh-gray-1 hover:text-white">About</a>
            </Link>
          </li>
          <li>
            <Link href="/stack" legacyBehavior>
              <a className="text-xl text-josh-gray-1 hover:text-white">Tech Stack</a>
            </Link>
          </li>
          <li>
            <Link href="/projects" legacyBehavior>
              <a className="text-xl text-josh-gray-1 hover:text-white">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="contact" legacyBehavior>
              <a className="text-xl text-josh-gray-1 hover:text-white">Contact</a>
            </Link>
          </li>
        </ul>
        <div className="flex justify-between w-[20%]">
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
          <Link href="https://www.linkedin.com/in/joshua-moses-4117a7209/" legacyBehavior>
            <a>
              <LinkedinIcon />
            </a>
          </Link>
        </div>
      </div> */}
      <div className="space-y-1.5 cursor-pointer">
        <div className="h-0.5 w-12 bg-header-color"></div>
        <div className="h-0.5 w-10 bg-header-color"></div>
      </div>
    </div>
  );
};

export default Header;
