import React, { useState } from "react";

const TimerWidget = () => {
  const [angle, setAngle] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  return (
    <div className="flex flex-col justify-center bg-custom-white p-4 rounded-lg gap-4 font-code">
      <p>Timer</p>
      <div className="rounded-full w-[200px] h-[200px] bg-gray-300 flex justify-center items-center relative">
        <div className="rounded-full w-[200px] h-[200px] bg-custom-orange absolute z-10" />
        <div
          className={`rounded-full w-[150px] h-[150px] bg-custom-white absolute z-20 flex justify-center items-center`}
        >
          <p className="text-xl">00:00</p>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="bg-gray-300 flex-1 py-2 rounded-lg">Start</button>
        <button className="bg-gray-300 flex-1 py-2 rounded-lg">Reset</button>
      </div>
    </div>
  );
};

export default TimerWidget;
