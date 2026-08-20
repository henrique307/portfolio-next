"use client";

import "./header.css";
import { Logo } from "../../utils/logo";
import { Themes } from "../../utils/icons/icons";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeaderComponent() {
  const { t, i18n } = useTranslation("global");
  const navItems = t("header.sections", { returnObjects: true }) as NavItem[];
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLLIElement>(null);



  const langs = [
    { url: "/images/languages/espanha.png", name: "es" },
    { url: "/images/languages/reino-unido.png", name: "en" },
    { url: "/images/languages/brasil.png", name: "pt" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              <li className="w-9 h-9 dropdown dropdown-bottom flex justify-center items-center">
                <button tabIndex={0} role="button" className="btn ml-1 p-0 h-9 bg-base-300 border-none">
                  {langs.map(
                    (lang, i) =>
                      i18n.language === lang.name && (
                        <Image
                          src={lang.url as string}
                          alt={lang.name}
                          className="mx-auto"
                          width={26}
                          height={26}
                          key={i}
                        />
                      ),
                  )}
                </button>
                <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 shadow-sm gap-2 before:bg-transparent" style={{marginLeft: 5}}>
                  {langs.map((lang, i) => {
                    if (lang.name === i18n.language) return;
                    return (
                      <li key={i}>
                        <a
                          href={`/${lang.name}`}
                          className="p-0"
                        >
                          <Image
                            width={24}
                            height={24}
                            src={lang.url as string}
                            alt={lang.name}
                            className="rounded-full mx-auto max-h-8 max-w-8"
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
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
