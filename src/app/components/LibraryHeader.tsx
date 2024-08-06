import React, { useEffect, useState } from "react";

interface TypingHeaderProps {
  children: React.ReactNode & String;
  delay?: number;
}

const LibraryHeader = ({ children, delay = 500 }: TypingHeaderProps) => {
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
    <div className="flex items-center">
      <p className="font-code text-5xl text-custom-white py-16">{currHeader}</p>
      <div className="h-12 w-1 bg-custom-white animate-pulse" />
    </div>
  );
};

export default LibraryHeader;
