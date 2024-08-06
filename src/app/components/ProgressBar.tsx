import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState<number>(1000);

  return (
    <div className="border-gray-300 w-[200px] h-[10px] bg-custom-white flex items-center">
      <div className="progress-animate bg-custom-orange h-full" />
      {/* <div className={`flex-grow-[100] h-full`} /> */}
    </div>
  );
};

export default ProgressBar;
