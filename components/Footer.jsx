import ContactMeComponent from "./Contact";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <div className="bg-[#242424] mt-16 pt-10 pb-8 px-14 text-white">
      <ContactMeComponent />
      <hr />
      <div className="mt-10 text-center text-sm">
        <p>
          &copy;copyright 2023. Made by{" "}
          <Link href="https://github.com/J0shcodes" legacyBehavior>
            <a className="border-b-2 border-solid border-[#0000ff]" target="_blank">Joshua Moses</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
