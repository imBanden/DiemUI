import { useState } from "react";

interface MadeByImBandenProps {
  color?: string;
}

const MadeByImBanden = ({ color = "light" }: MadeByImBandenProps) => {
  const [buttonHover, setButtonHover] = useState<boolean>(false);

  const colors = {
    light: {
      text: "text-black",
      bg: "bg-white",
      bgBack: "bg-black",
      border: "border-black",
      hover: {
        text: "text-white",
        bg: "bg-black",
        bgBack: "bg-white",
        border: "border-black",
      },
    },
    dark: {
      text: "text-white",
      bg: "bg-black",
      bgBack: "bg-white",
      border: "border-white",
      hover: {
        text: "text-black",
        bg: "bg-white",
        bgBack: "bg-black",
        border: "border-white",
      },
    },
  } as Record<
    string,
    {
      text: string;
      bg: string;
      bgBack: string;
      border: string;
      hover: { text: string; bg: string; bgBack: string; border: string };
    }
  >;

  return (
    <div className="flex flex-row gap-2 items-center pb-4">
      <p className={colors[color].text}>made by</p>
      <a href="https://github.com/imBanden" target="_blank">
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          <div
            className={`w-[120px] h-[50px] border-2 ${
              colors[color].border
            } flex justify-center items-center cursor-pointer transition-all duration-300 font-bold relative z-50 text-lg ${
              buttonHover ? colors[color].hover.bg : colors[color].bg
            }`}
          >
            <p
              className={
                buttonHover ? colors[color].hover.text : colors[color].text
              }
            >
              imBanden
            </p>
          </div>
          <div
            className={`w-[120px] h-[50px] top-2 left-2 absolute z-0 border-2 ${
              colors[color].border
            } transition-all duration-300 ${
              buttonHover ? colors[color].hover.bgBack : colors[color].bgBack
            }`}
          />
        </div>
      </a>
    </div>
  );
};

export default MadeByImBanden;
