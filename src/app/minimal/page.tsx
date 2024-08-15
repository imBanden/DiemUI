"use client";

import IconBadge from "@/components/IconBadge";
import TertiaryButton from "@/components/TertiaryButton";
import LogosInstagramIcon from "@/icons/LogosInstagramIcon";
import LogosLinkedinIcon from "@/icons/LogosLinkedinIcon";
import LogosSpotifyIcon from "@/icons/LogosSpotifyIcon";
import LogosTwitter from "@/icons/LogosTwitter";
import LogosYoutubeIcon from "@/icons/LogosYoutubeIcon";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import MadeByImBanden from "@/components/MadeByImBanden";
import Image from "next/image";

const Minimalpage = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [footerPosition, setFooterPosition] = useState<number>(0);

  // console.log(scrollPosition, footerPosition);

  // window.addEventListener("scroll", () => {

  // });

  useEffect(function mount() {
    function onScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div className="flex flex-col m-0 relative">
      {/* hero section */}
      <div className="bg-gradient-to-t from-zinc-800 to-zinc-950 h-[100vh] w-[100wh] flex">
        <div className="mx-24 w-full h-full flex justify-center items-center">
          <h1 className="font-satoshi text-zinc-50 text-[15em] font-bold">
            balance.
          </h1>
        </div>
      </div>

      {/* nav bar */}
      <nav
        className={`bg-zinc-50 flex justify-between items-center px-6 py-6 w-full ${
          footerPosition > 100 ? "sticky top-0" : "sticky"
        }`}
        style={{ top: footerPosition > 100 ? 0 : footerPosition - 100 }}
      >
        <div className="font-satoshi font-bold text-3xl">balance.</div>
        <button className="text-lg py-3 px-6 text-zinc-100 rounded-xl font-bold transition-all bg-gradient-to-t from-zinc-700 to-zinc-900 hover:from-zinc-950 hover:to-zinc-950 shadow-[2px_4px_12px_rgba(0,0,0,0.08)]">
          Buy now
        </button>
      </nav>

      {/* section 1 */}
      <div className="bg-zinc-50 h-[90vh] flex justify-center items-center">
        <div className="mx-24 w-full h-full flex flex-col items-center justify-center">
          <div className="flex">
            <div className="flex items-center gap-12">
              <div className="flex flex-1 justify-center items-center">
                <Image
                  priority={true}
                  src={"/img/minimalistic-zen-stone-background.jpg"}
                  alt="Picture of 5 stone placing on top of each other"
                  width={500}
                  height={500}
                  className="object-cover w-[500px] h-[500px] rounded-2xl object-[0%_70%]"
                />
              </div>
              <div className="flex flex-col flex-1 h-full gap-16">
                <p className="font-satoshi text-zinc-950 text-9xl font-bold">
                  calm. zen.{" "}
                  <span className="bg-gradient-to-r from-red-300 via-purple-300 to-blue-300 bg-[linear-gradient(to right, #f8ab5e 0, #f36961 20%, #a176c8 40%, #759beb 60%, #65beb3 80%, #70db96 100%);] text-transparent bg-clip-text">
                    you.
                  </span>
                </p>
                <p className="text-zinc-500 text-xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis nihil ad nam, odit animi debitis voluptate ullam
                  magnam, dolorum in qui ex cumque maiores est facilis minus
                  neque ut tempora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="bg-zinc-950 h-[90vh] flex justify-center items-center">
        <div className="mx-24 w-full h-full flex flex-col items-start justify-center gap-6">
          <p className="font-satoshi text-zinc-50 text-9xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 text-transparent bg-clip-text">
            Disconnect from the world.
          </p>
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus suscipit a atque aliquam consectetur ipsum dignissimos
            quaerat esse quibusdam, excepturi laudantium neque quae
            consequuntur! Optio esse dicta quis labore numquam nisi vitae
            adipisci veniam, praesentium beatae neque aliquid vero doloremque
            eum repellendus nam accusantium autem dignissimos magnam veritatis
            quos excepturi officiis corrupti laboriosam. Architecto, similique!
            Alias, nesciunt in. Non, tempora?
          </p>
        </div>
      </div>

      {/* footer */}
      <footer
        ref={(el) => {
          if (!el) return;
          setFooterPosition(el.getBoundingClientRect().top);
        }}
        className="bg-zinc-950 flex justify-center"
      >
        <div className="mx-24 w-full h-full flex flex-col items-center justify-end pt-24">
          <div className="flex w-full">
            <div className="flex flex-[3_1_0%] flex-col text-zinc-50 gap-6 px-8">
              <p className="font-satoshi font-bold text-5xl">
                We love to connect with you
              </p>
              <p className="text-zinc-400">
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
              <div className="flex flex-col h-full justify-between">
                <div className="flex flex-col gap-3 w-fit">
                  <TertiaryButton handleClick={() => router.push("/")}>
                    Diem.
                  </TertiaryButton>
                  <TertiaryButton>NeonCore</TertiaryButton>
                  <TertiaryButton>CyberPulse</TertiaryButton>
                  <TertiaryButton>ForrestyUI</TertiaryButton>
                </div>
                <div className="flex">
                  <MadeByImBanden color="dark" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-[200px]" />
          <div className="font-satoshi text-zinc-50 text-9xl font-bold text-[20em] pointer-events-none">
            balance.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Minimalpage;
