import { type NextPage } from "next";
import Link from "next/link";
import { GlobeSvg } from "@/components/Svgs";
import React from "react";
import { LanguageHeader } from "@/components/LanguageHeader";
import { useLoginScreen, LoginScreen } from "@/components/LoginScreen";

import { LanguageCarousel } from "@/components/LanguageCarousel";



const Home: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-[#88038F] text-white"
     
    >
      <LanguageHeader />
      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
        <GlobeSvg/>
        <div>
          <p className="mb-6 max-w-[600px] text-center text-3xl font-bold md:mb-12">
            The free, fun, and effective way to learn a language!
          </p>
          <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
            <Link
              href="/register"
              className="w-full rounded-2xl border-4 bg-[#88038f] border-[#401044] px-10 py-3 text-center font-bold uppercase transition hover:bg-[#f4eaf4] hover:text-[#88038F]  hover:border-[#f4eaf4] md:min-w-[320px]"
            >
              Get started
            </Link>
            <button
              className="w-full rounded-2xl border-2 border-b-4 border-[#88038F] bg-[#88038F] px-8 py-3 font-bold uppercase transition hover:bg-[#f4eaf4] hover:text-[#88038F]  md:min-w-[320px]"
              onClick={() => setLoginScreenState("LOGIN")}
            >
              I already have an account
            </button>
          </div>
        </div>
      </div>
      <LanguageCarousel />
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </main>
  );
};

export default Home;
