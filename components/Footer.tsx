import Link from "next/link";

import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="sm:py-[2.1875rem] py-4 px-8">
      <div className="flex justify-between">
        <div className="text-[2.8125rem] font-bold flex items-center">
          {/* <Link href="/">JM</Link> */}
        </div>
        <div className="flex justify-between items-center">
          {/* <div>mosesjoshua350@gmail.com</div> */}
          <div className="flex gap-x-10">
            <Link href="https://github.com/J0shcodes" target="_blank">
              <FaGithub size={22} />
            </Link>
            <Link href="https://x.com/JPhleg" target="_blank">
              <FaXTwitter size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/joshua-moses-4117a7209/"
              target="_blank"
            >
              <FaLinkedin size={22} />
            </Link>
            <Link href="mailto:mosesjoshua350@gmail.com" target="_blank">
              <TfiEmail size={22} />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#339DFF]/20 h-[2px] rounded-full my-8"></div>
      <div className="flex justify-between sm:flex-row flex-col sm:gap-y-0 gap-y-10">
        <ul className="flex sm:gap-x-16 justify-between">
          <li>
            <Link href="/" className="hover:text-[#4AA3FF] text-header-color">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-[#4AA3FF] text-header-color"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/writings"
              className="hover:text-[#4AA3FF] text-header-color"
            >
              Writing
            </Link>
          </li>
          <li>
            <Link
              href="/tools"
              className="hover:text-[#4AA3FF] text-header-color"
            >
              Tools
            </Link>
          </li>
          {/* <li>
            <Link
              href="contact"
              className="hover:text-[#4AA3FF] text-header-color"
            >
              Contact
            </Link>
          </li> */}
        </ul>
        <div className="sm:text-start text-center sm:text-base text-sm">J0shcodes &copy; 2025</div>
      </div>
    </div>
  );
};

export default Footer;
