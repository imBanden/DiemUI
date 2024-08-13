import React, { useState } from "react";
import MaterialSymbolsArrowForward from "../icons/MaterialSymbolsArrowForward";
import MaterialSymbolsArrowBack from "../icons/MaterialSymbolsArrowBack";

interface PageNavigatorProps {
  currentPage: number;
  totalPage: number;
}

const PageNavigator = ({ currentPage, totalPage }: PageNavigatorProps) => {
  const [current, setCurrent] = useState<number>(currentPage);

  const handleBackwardClick = () => {
    setCurrent((prev) => --prev);
  };

  const handleForwardClick = () => {
    setCurrent((prev) => ++prev);
  };
  return (
    <div
      className={`flex items-center p-2 ${
        current === 1 || current === totalPage ? "w-[238px]" : "w-[300px]"
      } rounded-full bg-custom-white font-code transition-all border-2 border-gray-300`}
    >
      <div
        className={`flex flex-1 justify-center items-center rounded-full h-[60px] w-[60px] bg-gray-300 cursor-pointer ${
          current === 1 ? "pointer-events-none scale-0 flex-grow-0" : ""
        } transition-all`}
        onClick={handleBackwardClick}
      >
        {current != 1 && (
          <MaterialSymbolsArrowBack
            className={`text-xl text-custom-black ${
              current === 1 ? "text-gray-300" : "text-black"
            } transition-all`}
          />
        )}
      </div>
      <p className="flex justify-center items-center text-xl select-none w-[164px]">
        {current} of {totalPage}
      </p>
      <div
        className={`flex flex-1 justify-center items-center rounded-full h-[60px] w-[60px] bg-custom-orange cursor-pointer ${
          current === totalPage ? "pointer-events-none scale-0 flex-grow-0" : ""
        } transition-all`}
        onClick={handleForwardClick}
      >
        {current != totalPage && (
          <MaterialSymbolsArrowForward
            className={`text-xl ${
              current === totalPage ? "text-custom-orange" : "text-custom-white"
            } transition-all`}
          />
        )}
      </div>
    </div>
  );
};

export default PageNavigator;
