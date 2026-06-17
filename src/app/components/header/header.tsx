"use client";

import "./header.css";
import { Logo } from "../../utils/logo";
import { Themes } from "../../utils/icons/icons";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export function HeaderComponent() {
  const { t, i18n } = useTranslation("global");
  const navItems = t("header.sections", { returnObjects: true }) as NavItem[];

  const langs = [
    { url: "/images/languages/espanha.png", name: "es" },
    { url: "/images/languages/reino-unido.png", name: "en" },
    { url: "/images/languages/brasil.png", name: "pt" },
  ];

  // restante do JSX igual, sem nenhuma alteração
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
              <Logo className="text-clamp-title" />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {navItems.map((item, i) => {
                  return (
                    <li key={i}>
                      <a
                        className="text-clamp-subtext opacity-75"
                        href={item.link}
                      >
                        {item.nome}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="menu menu-horizontal menu-lg flex-nowrap md:gap-4 gap-1 rounded-box items-center">
              <Themes className="w-1/3 mx-auto aspect-square" />

              <div className="dropdown w-[24px] h-[24px]">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost border-none p-0 min-h-fit h-fit"
                >
                  {langs.map(
                    (lang, i) =>
                      i18n.language === lang.name && (
                        <Image
                          key={i}
                          src={lang.url as string}
                          alt={lang.name}
                          width={24}
                          height={24}
                        />
                      ),
                  )}
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 gap-2 rounded-box z-10 mt-2 w-12 p-2 shadow left-[-12]"
                >
                  {langs
                    .filter((lang) => lang.name !== i18n.language)
                    .map((lang) => (
                      <li key={lang.name}>
                        <a
                          href={`/${lang.name}`}
                          className="justify-center p-1"
                        >
                          <Image
                            width={24}
                            height={24}
                            src={lang.url as string}
                            alt={lang.name}
                            className="rounded-full"
                          />
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
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
                <a className="text-clamp-subtext opacity-75" href={item.link}>
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
