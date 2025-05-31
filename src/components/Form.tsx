import { Dispatch, SetStateAction } from "react";
import gsap from "gsap";

const Form = ({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form
      onMouseEnter={() => setIsActive(true)}
      className="lg:text-3xl md:text-3xl sm:text-2xl max-sm:text-2xl font-[clash] flex flex-col sm:gap-10 max-sm:gap-3 sm:ml-3"
    >
      <label className="flex flex-col gap-2">
        Your name
        <input
          readOnly
          type="text"
          placeholder="Name"
          required
          className="outline-none border-b border-b-zinc-400 transition-colors duration-300 hover:border-b-zinc-800 lg:text-2xl md:text-xl sm:text-sm max-sm:text-lg text-zinc-800"
        ></input>
      </label>
      <label className="flex flex-col gap-2">
        Your email<br></br>
        <input
          readOnly
          type="email"
          placeholder="Email"
          required
          className="outline-none border-b border-b-zinc-400 transition-colors duration-300 hover:border-b-zinc-800 lg:text-2xl md:text-xl sm:text-sm max-sm:text-lg text-zinc-800"
        ></input>
      </label>
      <label className="flex flex-col gap-2">
        Message<br></br>
        <textarea
          readOnly
          rows={3}
          placeholder="I'm Listening"
          required
          className="resize-none outline-none border-b border-b-zinc-400 transition-colors duration-300 hover:border-b-zinc-800 lg:text-2xl md:text-xl sm:text-sm max-sm:text-lg text-zinc-800"
        ></textarea>
      </label>
      <div
        onMouseEnter={() => {
          gsap.to("#cursor", { scale: 1.4, duration: 0.25 });
        }}
        onMouseLeave={() => {
          gsap.to("#cursor", {
            scale: 1,
            duration: 0.25,
          });
        }}
        
        className="bg-zinc-950 hover:bg-zinc-900 text-white text-center p-1 rounded-lg"
      >
        Send
      </div>
    </form>
  );
};

export default Form;
