import React from "react";

interface WidgetContainerProps {
  children: React.ReactNode;
  title: string;
}

const WidgetContainer = ({ children, title }: WidgetContainerProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-white p-4 font-code gap-4 min-w-[400px] border-[4px] border-gray-300">
      <p>{title}</p>
      <div className="flex justify-center items-center p-12 w-full">
        {children}
      </div>
    </div>
  );
};

export default WidgetContainer;
