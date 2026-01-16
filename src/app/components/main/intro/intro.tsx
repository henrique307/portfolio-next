"use client";

import { DownloadIcon } from "../../../utils/icons/icons";
import { ReactTyped } from "react-typed";
import "./intro.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export function Intro() {
  interface introTranslation {
    greetings: string;
    typing_values: string[];
    description: string;
    contact: string;
  }

  const { t, i18n } = useTranslation("global");
  const introTranslation = t("main.intro", {
    returnObjects: true,
  }) as introTranslation;

  const curriculo =
    i18n.language === "pt"
      ? "/curriculos/curriculo-br.pdf"
      : "/curriculos/curriculo-en.pdf";

  return (
    <div
      id="eu"
      className="pt-48 pb-28 px-8 sm:px-16 bg-base-200 w-full flex justify-center"
    >
      <div className="items-start w-[98%] relative">
        <div className="text-left">
          <h1 className="text-clamp-subtitle font-bold text-primary">
            {introTranslation.greetings}{" "}
          </h1>
          <div className="-translate-x-1 md:-translate-x-2 bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent font-mono flex sm:flex-row w-fit text-clamp-title font-bold">
            |
            <ReactTyped
              strings={introTranslation.typing_values}
              typeSpeed={40}
              backSpeed={50}
              backDelay={2000}
              showCursor={false}
              loop
              loopCount={3}
            >
              <p className="w-fit border-r border-base-content typing"></p>
            </ReactTyped>
          </div>
          <p className="text-clamp-text opacity-75 pb-4 pt-2 max-w-lg lg:max-w-3xl text-base-content">
            {introTranslation.description}
          </p>
          <div className="flex gap-4 text-base-content">
            <a
              href="#action"
              className="btn btn-sm px-5 btn-primary rounded-none"
            >
              {introTranslation.contact}
            </a>
            <Link
              download
              target="_blank"
              href={curriculo}
              className={`btn text-clamp-text btn-sm btn-slate-200 btn-outline rounded-none ${
                !curriculo && "btn-disabled"
              }`}
            >
              {curriculo ? (
                <DownloadIcon />
              ) : (
                <span className="loading loading-spinner"></span>
              )}
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
