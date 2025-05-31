import Image from "next/image";
import p1pic from "../../../public/image.png";

const projects = () => {
  return <div className="max-sm:mt-20 pt-3 pb-3 sm:mt-20 w-full min-h-screen pl-5 pr-5">
    <h1 className="font-[panchangbold] sm:text-[9vw] max-sm:text-[12vw] mb-10">Projects</h1>
    <div className="max-sm:flex max-sm:flex-col max-sm:gap-5 h-full w-full flex p-5 bg-zinc-900 text-white rounded-lg">
      <div className="flex-1 flex flex-col items-start justify-end">
        <h1 className="font-[clash] sm:text-2xl max-sm:text-md">Portfolio Website</h1>
        <div className="h-[2px] w-full bg-zinc-500"></div>
        
      </div>
      <div>
        <Image src={p1pic} alt="image" width={400} height={400} className="border border-zinc-800 rounded-lg"></Image>
      </div>
    </div>
  </div>;
};

export default projects;
