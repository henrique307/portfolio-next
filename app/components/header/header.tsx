"use client"

import "./header.css";
import { Logo } from "../../utils/logo";
import { Settings, Themes } from "../../utils/icons/icons";
import { useTranslation } from "react-i18next";
import { useDriveContent } from "@/app/providers/drive-content/drive.provider";
import { transformDriveFiles } from "@/app/utils/transformDriveFiles";

export function HeaderComponent() {
  const { t, i18n } = useTranslation("global");
  const { data } = useDriveContent("idiomas")
  const idiomas = transformDriveFiles(data);
  const navItems = t("header.sections", { returnObjects: true }) as NavItem[];

  const langs = [
    {
      url: idiomas["espanha"]?.thumbnailLink,
      name: "es",
    },
    {
      url: idiomas["reino-unido"]?.thumbnailLink,
      name: "en",
    },
    {
      url: idiomas["brasil"]?.thumbnailLink,
      name: "pt",
    },
  ];

  function handleLanguageChange(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <section className="z-20 drawer text-base-content">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar pt-4 p-5 fixed bg-base-300">
          <div className="flex w-[90%] mx-auto justify-between items-center relative">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="lg:right-0 lg:translate-x-0 lg:relative absolute right-[50%] translate-x-[50%]">
              <Logo className="text-clamp_title" />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {navItems.map((item, i) => {
                  return (
                    <li key={i}>
                      <a className="text-clamp_subtext opacity-75" href={item.link}>
                        {item.nome}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-base-300 border-transparent"
              >
                <Settings className="bg-base-300" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content gap-2 menu bg-base-100 rounded-box z-[1] w-fit p-2 shadow"
              >
                <Themes className="w-1/2 mx-auto aspect-square" />
                <details>
                  <ul>
                    {langs.map((lang, i) => {
                      if (lang.name === i18n.language) return;
                      return (
                        <li key={i}>
                          <a
                            onClick={() => handleLanguageChange(lang.name)}
                            className="uppercase flex justify-center"
                          >
                            <img src={lang.url as string} alt={lang.name} className="rounded-full w-5" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  <summary className="btn cursor-pointer bg-base-200">
                    {langs.map(
                      (lang, i) =>
                        i18n.language === lang.name && (
                          <img src={lang.url as string} alt={lang.name} className="min-w-6 mx-auto" key={i} />
                        )
                    )}
                  </summary>
                </details>
              </ul>
            </div>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <Logo className="p-5 text-xl" />
          {navItems.map((item, i) => {
            return (
              <li key={i}>
                <a className="text-clamp_subtext opacity-75" href={item.link}>
                  {item.nome}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
