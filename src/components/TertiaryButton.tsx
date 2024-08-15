import React, { Children, useState } from "react";

interface TertiaryButtonProps {
  children: React.ReactNode;
  handleClick?: () => void;
}

const TertiaryButton = ({ children, handleClick }: TertiaryButtonProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col font-satoshi font-bold text-zinc-50 cursor-pointer w-fit"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
    >
      <p className="select-none">{children}</p>
      <div
        className={`bg-zinc-50 transition-all duration-500 ${
          isHovering ? "w-full" : "w-0"
        } h-[2px]`}
      />
    </div>
  );
};

export default TertiaryButton;
