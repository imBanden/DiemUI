import { useState } from "react";
import MaterialSymbolsCheck from "../icons/MaterialSymbolsCheck";
// import MaterialSymbolsCheckCircle from "../icons/MaterialSymbolsCheckCircle";

interface TagsProps {
  children?: React.ReactNode;
  onToggle?: () => void;
}

const Tags = ({ children, onToggle }: TagsProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => {
    setToggle(!toggle);
    // onToggle();
  };
  return (
    <div
      className={`flex border rounded-lg h-8 px-2 py-4 items-center ${
        toggle ? "bg-custom-orange gap-2" : "bg-custom-white"
      } transition-all cursor-pointer`}
      onClick={() => handleClick()}
    >
      {/* <div
        className={`overflow-hidden transition-all ${
          toggle ? "custom-animate" : "custom-animate-2"
        }`}
      >
        <MaterialSymbolsCheck
          className={`text-custom-white ${
            toggle ? "scale-100 custom-animate-3" : "scale-0 custom-animate-4"
          } transition-all`}
        />
      </div> */}
      <MaterialSymbolsCheck
        className={`text-xl text-custom-white ${
          toggle ? "scale-100 w-6" : "scale-0 w-0"
        } transition-all`}
      />
      <p
        className={`leading-none h-5 flex items-center font-code select-none ${
          !toggle ? "text-black" : "text-custom-white"
        } transition-all`}
      >
        {children}
      </p>
    </div>
  );
};

export default Tags;
