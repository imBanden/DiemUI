"use client";

import IconBadge from "@/components/IconBadge";
import TertiaryButton from "@/components/TertiaryButton";
import LogosInstagramIcon from "@/icons/LogosInstagramIcon";
import LogosLinkedinIcon from "@/icons/LogosLinkedinIcon";
import LogosSpotifyIcon from "@/icons/LogosSpotifyIcon";
import LogosTwitter from "@/icons/LogosTwitter";
import LogosYoutubeIcon from "@/icons/LogosYoutubeIcon";
import React from "react";

const page = () => {
  return (
    // <div className="flex justify-center items-center h-[100vh] bg-gray-100 gap-4">
    //   <button className="text-sm py-3 px-6 text-zinc-100 rounded-xl font-bold transition-all bg-gradient-to-t from-zinc-700 to-zinc-900 hover:from-zinc-950 hover:to-zinc-950 shadow-[0_10px_15px_rgba(0,0,0,0.04),0_2px_4px_rgba(0,0,0,0.15)]">
    //     Buy now
    //   </button>
    //   <button className="text-sm py-3 px-6 bg-zinc-800 text-zinc-100 rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.04),0_2px_4px_rgba(0,0,0,0.15)] hover:bg-zinc-950 font-bold transition-all">
    //     Sign Up
    //   </button>
    //   <button className="text-sm py-3 px-6 bg-none text-zinc-800 rounded-xl border-2 border-zinc-800 font-bold hover:bg-zinc-800 hover:text-zinc-100 transition-all">
    //     learn more
    //   </button>
    //   <button className="text-sm py-3 px-6 bg-none text-blue-600 font-bold hover:underline transition-all">
    //     read more
    //   </button>
    //   <p className="font-satoshi">Hello World</p>
    // </div>
    <div className="flex flex-col">
      {/* hero section */}
      <div className="bg-gradient-to-t from-zinc-800 to-zinc-950 h-[100vh] w-[100wh] flex">
        <div className="mx-24 w-full h-full flex justify-center items-center">
          <h1 className="font-satoshi text-zinc-50 text-[15em] font-bold">
            balance.
          </h1>
        </div>
      </div>

      {/* nav bar */}
      <div className="bg-zinc-50 flex justify-between items-center px-6 py-6 sticky top-0">
        <div className="font-satoshi font-bold text-3xl">balance.</div>
        <button className="text-lg py-3 px-6 text-zinc-100 rounded-xl font-bold transition-all bg-gradient-to-t from-zinc-700 to-zinc-900 hover:from-zinc-950 hover:to-zinc-950 shadow-[2px_4px_12px_rgba(0,0,0,0.08)]">
          Buy now
        </button>
      </div>

      {/* section 1 */}
      <div className="bg-zinc-50 h-[90vh] flex justify-center items-center">
        <h1 className="font-satoshi text-zinc-950 text-9xl font-bold">calm.</h1>
      </div>

      {/* section 2 */}
      <div className="bg-zinc-950 h-[90vh] flex justify-center items-center">
        <h1 className="font-satoshi text-zinc-50 text-9xl font-bold">zen.</h1>
      </div>

      {/* footer */}
      <div className="bg-zinc-950 h-[90vh] flex justify-center py-6">
        <div className="mx-24 w-full h-full flex flex-col items-center">
          <div className="flex w-full">
            <div className="flex flex-2 flex-col text-zinc-50 gap-6 px-8">
              <p className="font-satoshi font-bold text-5xl">
                We love to connect with you
              </p>
              <p className="opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos in
                ducimus aspernatur minima, labore voluptatem molestias
                praesentium voluptate veritatis perspiciatis illo totam tempore
                a nobis illum, voluptates ratione nemo ipsum eius. Nihil quam
                neque inventore reiciendis distinctio obcaecati quia deleniti,
                temporibus esse dolores odio suscipit animi perferendis
                accusamus dolorum? Voluptatum.
              </p>
              <button className="w-fit text-lg py-3 px-6 bg-none rounded-xl border-2 border-zinc-50 text-zinc-200 font-bold hover:bg-zinc-800 hover:text-zinc-100 transition-all cursor-pointer">
                Let&apos;s connect
              </button>
            </div>
            <div className="flex flex-1  flex-col text-zinc-50 px-8 gap-6">
              <p className="font-satoshi font-bold text-5xl">Socials</p>
              <div className="flex flex-col gap-3 w-fit">
                <IconBadge>
                  <LogosYoutubeIcon className="text-2xl" />
                </IconBadge>
                <IconBadge>
                  <LogosInstagramIcon className="text-3xl" />
                </IconBadge>
                <IconBadge>
                  <LogosSpotifyIcon className="text-3xl" />
                </IconBadge>
                <IconBadge>
                  <LogosLinkedinIcon className="text-3xl" />
                </IconBadge>
                <IconBadge>
                  <LogosTwitter className="text-2xl" />
                </IconBadge>
              </div>
            </div>

            <div className="flex flex-1  flex-col text-zinc-50 px-8 gap-6">
              <p className="font-satoshi font-bold text-5xl">Others</p>
              <div className="flex flex-col gap-3 w-fit">
                <TertiaryButton>Diem.</TertiaryButton>
                <TertiaryButton>NeonCore</TertiaryButton>
                <TertiaryButton>CyberPulse</TertiaryButton>
                <TertiaryButton>ForrestyUI</TertiaryButton>
              </div>
            </div>
          </div>
          <div className="font-satoshi text-zinc-50 text-9xl font-bold text-[20em] pointer-events-none">
            balance.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
