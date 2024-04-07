import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center py-[6.1875rem] px-[7.5625rem]">
      {/* <div className="">
        <div> */}
      <Image
        src="/assets/images/dummyProfile.jpg"
        alt=""
        width={300}
        height={300}
        className="rounded-full aspect-square object-cover"
      />
      {/* </div>
      </div> */}
      <div className="font-bold text-[#f0f2f5] w-[50rem] mt-8 text-center">
        <div className="text-5xl">
          <span className="bg-gradient-to-r from-[#b16cea] to-[#ff7b56] bg-clip-text text-transparent inline-block">
            Hello, I&apos;m Joshua,
          </span>{" "}
          frontend/smart contract developer
        </div>
        <p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          voluptatibus distinctio veritatis unde corporis laboriosam quidem, quo
          quasi non totam maiores quod? Cupiditate deserunt adipisci aliquid
          veritatis beatae quae ut.
        </p>
      </div>
      <div className="mt-14 flex justify-between w-[350px]">
        <button className="bg-white text-[#161513] font-bold text-lg rounded-full py-2 px-5 border border-solid border-white hover:bg-transparent hover:text-white">
          Get in Touch
        </button>
        <button className="bg-transparent border border-solid border-white text-white text-lg font-bold rounded-full py-2 px-5 hover:bg-white hover:text-[#161513]">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default About;
