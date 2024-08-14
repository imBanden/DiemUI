import React from "react";

interface IconBadgeProps {
  children: React.ReactNode;
}

const IconBadge = ({ children }: IconBadgeProps) => {
  return (
    <div className="rounded-full bg-gradient-to-tr from-zinc-500 to-zinc-800 cursor-pointer hover:rotate-12 transition-all w-16 h-16 flex justify-center items-center shadow-[2_4px_12px_rgba(255,255,255,0.08)] hover:shadow-[2_4px_16px_rgba(255,255,255,0.16)] hover:scale-105">
      {children}
    </div>
  );
};

export default IconBadge;
