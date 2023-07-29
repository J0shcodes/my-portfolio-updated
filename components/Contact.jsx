import Link from "next/link";

const ContactMeComponent = () => {
  return (
    <div id="contact" className="flex justify-between mb-[5.3125rem]">
      <div>
        <h2 className="text-5xl font-semibold">Contact</h2>
        <div className="mt-8">
          Get in touch or email me directly on{" "}
          <Link href="mailto:mosesjoshua350@gmail.com" legacyBehavior>
            <a className="border-b-2 border-solid border-[#0000ff]">
              mosesjoshua350@gmail.com
            </a>
          </Link>
        </div>
      </div>
      <div className="w-[25rem]">
        <form className="w-full">
          <div className="mb-5 w-full">
            <input
              placeholder="NAME"
              className="bg-transparent border-b border-solid border-[#e9e9e9] p-4 w-full outline-none"
            />
          </div>
          <div className="mb-5 w-full">
            <input
              placeholder="EMAIL"
              className="bg-transparent border-b border-solid border-[#e9e9e9] p-4 w-full outline-none"
            />
          </div>
          <textarea
            placeholder="MESSAGE"
            className="bg-transparent border-b border-solid border-[#e9e9e9] p-4 w-full outline-none h-28"
          />
          <div className="mt-8 text-end">
            <button className="uppercase border-b-2 border-solid border-[#0000ff] hover:bg-[#0000ff] hover:rounded hover:px-2 py-2 text-white">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMeComponent;
