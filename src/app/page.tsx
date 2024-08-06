"use client";

import MadeByImBanden from "./components/MadeByImBanden";
import Tags from "./components/Tags";
import TimerWidget from "./components/TimerWidget";
import SpinningLoader from "./components/SpinningLoader";
import ToggleButton from "./components/ToggleButton";
import ProgressBar from "./components/ProgressBar";
import PageNavigator from "./components/PageNavigator";
import Button from "./components/Button";

const page = () => {
  return (
    <div className="w-full h-screen">
      {/* header */}
      <div className="flex justify-between items-center p-4 font-code">
        <div className="text-2xl">Diem.</div>
        <div className="flex gap-4">
          <Button>Pricing</Button>
          <Button color="orange">Log in</Button>
        </div>
      </div>

      {/* Landing Title */}

      <div className="flex flex-col justify-center items-center h-[50vh]">
        <div className="flex flex-col items-start gap-2">
          <p className="font-code text-5xl text-custom-orange">
            Sieze the Interface.
          </p>
          <p className="font-code text-lg text-black bg-custom-white">
            where vintage meets vogue
          </p>
          <p className="font-code text-lg text-black bg-custom-white">
            craft your website with retro interfaces
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 justify-center items-center p-4 h-full">
        <Tags>Tech 2.0</Tags>
        <TimerWidget />
        <SpinningLoader />
        <ToggleButton />
        <ProgressBar />
        <PageNavigator currentPage={9} totalPage={16} />
        <MadeByImBanden />
      </div>
    </div>
  );
};

export default page;
