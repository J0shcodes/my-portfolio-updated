import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-6">
      <Image
        src="/assets/icons/amico.svg"
        alt="Not Found"
        width={700}
        height={600}
      />
    </div>
  );
};

export default NotFound;
