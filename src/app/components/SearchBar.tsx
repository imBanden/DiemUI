import { useEffect, useState } from "react";
import MaterialSymbolsArrowForward from "../icons/MaterialSymbolsArrowForward";

const SearchBar = () => {
  const title: string = "Carpe Diem";
  const [currTitle, setCurrTitle] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  //   useEffect(() => {
  //     if (currentIndex < title.length) {
  //       const typingInterval = setTimeout(() => {
  //         setCurrTitle((prev) => prev + title[currentIndex]);
  //         setCurrentIndex((prev) => prev + 1);
  //       }, 200);

  //       const resetInterval = setInterval(() => {
  //         setCurrTitle("");
  //         setCurrentIndex(0);
  //       }, 5000);

  //       return () => {
  //         clearInterval(typingInterval);
  //         clearInterval(resetInterval);
  //       };
  //     }
  //   }, [currentIndex, title]);

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search here"
        className="border-2 border-r-0 border-gray-300 py-2 px-4 outline-none bg-custom-white"
      ></input>
      <button className="bg-custom-orange border border-custom-orange p-3">
        <MaterialSymbolsArrowForward className="text-custom-white text-lg" />
      </button>
    </div>
  );
};

export default SearchBar;
