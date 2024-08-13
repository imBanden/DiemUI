import React from "react";

const SpinningLoader = () => {
  return (
    <div className="w-[100px] h-[100px] flex justify-center items-center">
      <div className="w-[80px] h-[80px] rounded-full border-[12px] border-solid border-custom-white border-t-custom-orange animate-spin"></div>
    </div>
  );
};

export default SpinningLoader;
