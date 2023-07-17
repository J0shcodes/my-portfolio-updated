import Image from "next/image";

const About = () => {
    return (
        <div className="bg-red-500 flex justify-between">
            <div className="bg-blue-500 w-[35rem]">
                <div>
                    <div className="text-[3rem] font-semibold mb-0">Nice to meet you!</div>
                    <div className="mt-0">I&apos;m Joshua Moses</div>
                </div>
                <div className="text-[1.125rem]">I am Frontend and blockchain expert with a love for cutting-edge digital experiences that combine technical expertise and originality. a track record of developing secure decentralized applications and appealing user interfaces. collaborative, focused on the details, and cross-disciplinary I work well in multidisciplinary teams and keep up with emerging technologies.</div>                
            </div>
            <div>
                <Image src="/images/testImage.jpg" alt="Test" width={300} height={300}/>
            </div>
        </div>
    )
}

export default About;