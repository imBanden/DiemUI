"use client";

import MadeByImBanden from "./components/MadeByImBanden";
import Tags from "./components/Tags";
import TimerWidget from "./components/TimerWidget";
import SpinningLoader from "./components/SpinningLoader";
import ToggleButton from "./components/ToggleButton";
import ProgressBar from "./components/ProgressBar";
import PageNavigator from "./components/PageNavigator";
import Button from "./components/Button";
import WidgetContainer from "./components/WidgetContainer";
import TypingHeader from "./components/TypingHeader";

const page = () => {
  return (
    <div className="w-full h-screen">
      {/* header */}
      <div className="flex justify-between items-center p-4 font-code">
        <div className="text-2xl">Diem.</div>
        <div className="flex gap-4">
          <Button>Pricing</Button>
          <Button color="orange">Library</Button>
        </div>
      </div>

      {/* Landing Title */}

      <div className="flex flex-col justify-center items-center h-[75vh] bg-[url('../../public/img/cross-background.png')] bg-opacity-10">
        <div className="flex flex-col items-start gap-2">
          <TypingHeader color={"orange"} delay={100}>
            Sieze the Interface.
          </TypingHeader>
          <p className="font-code text-lg text-black bg-custom-white">
            where vintage meets vogue
          </p>
          <p className="font-code text-lg text-black bg-custom-white">
            craft your website with retro interfaces
          </p>
        </div>
      </div>

      {/* Library */}
      <div className="flex flex-col items-center bg-custom-orange p-4 py-16">
        <div className="py-16">
          <TypingHeader delay={100}>Library.</TypingHeader>
        </div>

        <div className="flex overflow-x-auto gap-8 items-center p-4 w-full h-full no-scrollbar">
          <WidgetContainer title="Tags.">
            <Tags>Carpe Diem</Tags>
          </WidgetContainer>
          <WidgetContainer title="Stop watch.">
            <TimerWidget />
          </WidgetContainer>
          <WidgetContainer title="Loader.">
            <SpinningLoader />
          </WidgetContainer>
          <WidgetContainer title="Toggle button.">
            <ToggleButton />
          </WidgetContainer>
          <WidgetContainer title="Progress bar.">
            <ProgressBar />
          </WidgetContainer>
          <WidgetContainer title="Page navigator.">
            <PageNavigator currentPage={9} totalPage={16} />
          </WidgetContainer>
        </div>
      </div>

      {/* footer */}
      <div className="flex justify-center items-center p-4 m-4">
        <MadeByImBanden />
      </div>
    </div>
  );
};

export default page;
