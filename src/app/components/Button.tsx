import React from "react";

type ColorOption = "gray" | "orange";

interface ButtonProps {
  children: React.ReactNode;
  color?: ColorOption & string;
}

const Button = ({ children, color = "gray" }: ButtonProps) => {
  return (
    <>
      {color === "gray" && (
        <button
          className={`rounded-xl border-2 border-gray-300 bg-custom-white w-[100px] h-[50px] text-black text-md`}
        >
          {children}
        </button>
      )}
      {color === "orange" && (
        <button
          className={`rounded-xl border-2 bg-custom-orange w-[100px] h-[50px] text-custom-white text-md`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
