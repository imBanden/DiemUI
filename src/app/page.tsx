"use client";

import MadeByImBanden from "../components/MadeByImBanden";
import Tags from "../components/Tags";
import TimerWidget from "../components/TimerWidget";
import SpinningLoader from "../components/SpinningLoader";
import ToggleButton from "../components/ToggleButton";
import ProgressBar from "../components/ProgressBar";
import PageNavigator from "../components/PageNavigator";
import Button from "../components/Button";
import WidgetContainer from "../components/WidgetContainer";
import TypingHeader from "../components/TypingHeader";
import SearchBar from "../components/SearchBar";
import CalendarWidget from "../components/CalendarWidget";
import { useRouter } from "next/navigation";

interface NavBarProps {
  title: string;
  url: string;
}

const DiemPage = () => {
  const router = useRouter();
  const navBar: NavBarProps[] = [
    {
      title: "Pricing",
      url: "/",
    },
    {
      title: "Library",
      url: "/",
    },
    {
      title: "About",
      url: "/",
    },
    {
      title: "Balance",
      url: "/minimal",
    },
  ];
  return (
    <div className="flex w-full h-full px-[300px] flex-col gap-4 py-4">
      {/* header */}
      <div className="flex justify-between items-center font-code gap-4">
        <div className="text-2xl bg-custom-white border-2 border-gray-300 rounded-lg px-4 h-[50px] flex justify-center items-center">
          Diem.
        </div>
        <div className="flex flex-auto gap-4 text-md bg-custom-white border-2 border-gray-300 rounded-lg p-2 h-[50px] px-4">
          {navBar.map((item, index) => (
            <button
              key={index}
              className="hover:bg-custom-orange hover:text-custom-white rounded-md px-2 transition-all"
              onClick={() => router.push(item.url)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex gap-4">
          <Button>Sign in</Button>
          <Button color="orange">Install</Button>
        </div>
      </div>

      {/* Landing Title */}

      <div className="flex flex-col justify-center items-center h-[50vh] bg-[url('../../public/img/cross-background.png')] bg-opacity-10 rounded-xl border-2 border-gray-300">
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
      <div className="flex flex-col items-center bg-custom-orange p-4 py-16 rounded-xl">
        <div className="py-16">
          <TypingHeader delay={100}>Library.</TypingHeader>
        </div>

        <div className="flex overflow-x-auto gap-8 items-center p-4 w-full h-full no-scrollbar">
          <WidgetContainer title="Calander.">
            <CalendarWidget />
          </WidgetContainer>
          <WidgetContainer title="Tags.">
            <div className="flex gap-2">
              <Tags>Retro</Tags>
              <Tags>Beautiful</Tags>
              <Tags>Minimal</Tags>
            </div>
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
          <WidgetContainer title="Search bar.">
            <SearchBar />
          </WidgetContainer>
          <WidgetContainer title="Buttons.">
            <Button>Click</Button>
            <div className="w-12" />
            <Button color="orange">Us</Button>
          </WidgetContainer>
        </div>
      </div>

      {/* footer */}
      <div className="flex justify-center items-center pt-8 pb-4 bg-custom-white w-full border-gray-300 border-2 rounded-xl">
        <MadeByImBanden />
      </div>
    </div>
  );
};

export default DiemPage;
