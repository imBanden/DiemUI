import React, { useEffect, useState } from "react";

type ColorOption = "gray" | "orange";

interface TypingHeaderProps {
  children: React.ReactNode & String;
  delay?: number;
  color?: ColorOption & String;
}

const TypingHeader = ({
  children,
  delay = 500,
  color = "gray",
}: TypingHeaderProps) => {
  const [currHeader, setCurrHeader] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < children.length) {
      const timeout = setTimeout(() => {
        setCurrHeader((prev) => prev + children[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, children]);

  return (
    <>
      {color === "gray" && (
        <div className="flex items-center">
          <p className={`font-code text-5xl text-custom-white`}>{currHeader}</p>
          <div className="h-12 w-1 bg-custom-white animate-pulse" />
        </div>
      )}
      {color === "orange" && (
        <div className="flex items-center">
          <p
            className={`font-code text-5xl text-custom-orange bg-custom-white`}
          >
            {currHeader}
          </p>
          <div className="h-12 w-1 bg-custom-orange animate-pulse" />
        </div>
      )}
    </>
  );
};

export default TypingHeader;
