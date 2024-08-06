import React, { useState } from "react";

const ToggleButton = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div
      className={`rounded-full w-[100px] flex items-center p-2 cursor-pointer ${
        toggle ? "bg-custom-orange" : "bg-custom-white"
      } transition-all`}
      onClick={() => setToggle((prev) => !prev)}
    >
      <div className={`${toggle ? "flex-1" : "flex-0"} transition-all`} />
      <div
        className={`w-[40px] h-[40px] rounded-full bg-gray-300
        } transition-all`}
      />
    </div>
  );
};

export default ToggleButton;
