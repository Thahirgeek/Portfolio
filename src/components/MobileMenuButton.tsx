import { Dispatch, SetStateAction } from "react";
import gsap from "gsap";

interface Prop {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}
const MobileMenuButton: React.FC<Prop> = ({ isActive, setIsActive }) => {
  return (
    <div>
      <button
        onClick={() => setIsActive(!isActive)}
        onMouseEnter={() => gsap.to("#cursor", {scale: 1.5, duration: 0.2})}
        onMouseLeave={() => gsap.to("#cursor", {scale: 1, duration: 0.2})}
        className="absolute bg-zinc-800 font-[clash] h-full w-full text-xl sm:hover:text-3xl transition:all duration-200 hover:cursor-none leading-none rounded-lg"
      >
        <p className="flex items-center justify-center">
          {isActive ? <span className="text-center text-lg">✕</span> : "≡"}
        </p>
      </button>
    </div>
  );
};

export default MobileMenuButton;
