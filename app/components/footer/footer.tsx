"use client"

import { useTranslation } from "react-i18next";
import { Logo } from "../../utils/logo";

export function FooterComponent() {
  interface FooterTranslation {
    henridev: {
      title: string;
      rights: string;
    };
    columns: {
      title: string;
      links: { nome: string; link: string }[];
    }[];
  }

  const { t } = useTranslation("global");
  const footerTranslation = t("footer", {
    returnObjects: true,
  }) as FooterTranslation;

  return (
    <section>
      <footer className="flex flex-col">
        <div className="footer p-10">
          <div className="flex flex-col h-full justify-between w-full">
            <aside className="flex flex-col gap-1">
              <div>
                <Logo className="text-clamp_subtitle" displayVersion hideBaseColorContent/>
              </div>
              <p className="text-clamp_text">
                {footerTranslation.henridev.title}
              </p>
              <p className="text-clamp_text">henrique.florencio307@gmail.com</p>
              <p className="text-clamp_text">
                Copyright © 2024 - {footerTranslation.henridev.rights}
              </p>
            </aside>
            <nav className="flex gap-4 pt-3">
              <a
                href="https://www.linkedin.com/in/henrique-florencio-dev"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 28 28"
                  className="fill-current cursor-pointer hover:fill-accent transition"
                >
                  <path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"></path>
                </svg>
              </a>
              <a href="https://wa.me/5521990868835" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 50 45"
                  className="fill-current cursor-pointer hover:fill-accent transition"
                >
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
              </a>
            </nav>
          </div>
          {footerTranslation.columns.map((coluna, i) => {
            return (
              <nav key={i}>
                <h6 className="footer-title">{coluna.title}</h6>
                {coluna.links.map((link, i) => {
                  return (
                    <a
                      href={link.link}
                      target={coluna.title !== "Mapa" ? "_blank" : "_self"}
                      key={i}
                      className="link link-hover"
                    >
                      {link.nome}
                    </a>
                  );
                })}
              </nav>
            );
          })}
        </div>
      </footer>
    </section>
  );
}
