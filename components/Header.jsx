import Link from "next/link";

import {FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa6"

const Header = () => {
  return (
    // <div>
      <div className="text-white flex justify-between mx-20">
        <h1 className="text-lg">Joshua Moses</h1>
        <div className="flex justify-between w-24">
            <Link href="https://github.com/J0shcodes" legacyBehavior>
            <a><FaGithub size={25}/></a></Link>
            <Link href="https://twitter.com/JPhleg" legacyBehavior>
            <a><FaTwitter size={25}/></a></Link>
            <Link href="https://www.linkedin.com/in/joshua-moses-4117a7209/" legacyBehavior>
            <a><FaLinkedin size={25}/></a></Link>
        </div>
      </div>
    // </div>
  );
};

export default Header;
