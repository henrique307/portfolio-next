"use client";

import { icons } from "../../../utils/icons/tech-icons";
import { NewWindowIcon, TopArrow } from "../../../utils/icons/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
import { Project, projectIcons } from "./utils/content";
import { CSSProperties, useState } from "react";

export function Projects() {
  interface ProjectsTranslations {
    header: {
      main_header: string;
      sub_header: string;
    };
    projects: {
      link_text: string;
      cards: Project[];
    };
  }

  const [open, setOpen] = useState(false);
  const { t } = useTranslation("global");
  const projectsTranslations = t("main.projects", {
    returnObjects: true,
  }) as ProjectsTranslations;

  for (const project in projectsTranslations.projects.cards) {
    const projects = projectsTranslations.projects.cards;
    const projectIndex = projects.indexOf(projects[project]);

    projectsTranslations.projects.cards[project].icons =
      projectIcons[projectIndex].icons;
  }

  const scrollprops: CSSProperties = {
    scrollbarWidth: "thin",
  };

  return (
    <section
      id="projects"
      className={`pb-32 pt-20 bg-base-100 w-full flex justify-center ${
        !open
          ? "max-h-[2400px] md:max-h-[1000px] xl:max-h-[800px]"
          : "max-h-fit"
      } overflow-hidden relative transition-all duration-1000 text-base-content`}
    >
      <div className="text-left flex flex-col items-center mx-auto w-[90%]">
        <div className="flex justify-between w-[90%] items-end">
          <div className="text-center sm:text-left mx-auto sm:m-0">
            <h1 className="text-accent uppercase text-clamp_text tracking-widest font-mono">
              --- {projectsTranslations.header.main_header}
            </h1>
            <h2 className="text-clamp_subtitle">
              {projectsTranslations.header.sub_header}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center lg:justify-between pt-4 w-full">
          {projectsTranslations.projects.cards.map((project, i) => {
            const youtubeVideo = project.link.includes("youtu.be/");
            const codigoYoutube = project.link.split("youtu.be/")[1];

            return (
              <div
                className="w-[80%] mx-auto py-10 inline gap-3"
                key={`trab-${i}`}
              >
                <div className="relative bg-base-300">
                  <div className="relative aspect-[16/8] z-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="cursor-pointer z-20 transition-opacity opacity-0 hover:opacity-100 absolute backdrop-brightness-[.15] w-full h-full flex justify-center items-center"
                      >
                        <icons.IconGithub className="text-5xl" />
                      </a>
                    )}
                    {!youtubeVideo && (
                      <div className="absolute w-full z-10 h-full backdrop-grayscale-[.45]"></div>
                    )}
                    {youtubeVideo ? (
                      <iframe
                        width={"100%"}
                        height={"100%"}
                        loading="lazy"
                        src={`https://www.youtube-nocookie.com/embed/${codigoYoutube}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <LazyLoadImage
                        src={project.thumbnail}
                        placeholder={
                          <div className="skeleton h-full w-full"></div>
                        }
                        width={"100%"}
                        height={"100%"}
                        alt={project.title}
                        loading="lazy"
                        className="object-cover object-center w-full h-full"
                      />
                    )}
                  </div>
                  <div className="bottom-0 w-full p-3 pt-0">
                    <h1 className="text-clamp_subtitle cursor-default mt-5">
                      {project.title}
                    </h1>
                    
                    <article
                      style={scrollprops}
                      className="text-clamp_text opacity-75 my-5 max-h-[120px] overflow-y-auto"
                    >
                      {project.description}
                    </article>

                    <div className="flex mt-2 justify-between">
                      <div className="flex items-center gap-2">
                        {project.icons?.map((Icon, i) => {
                          return (
                            <Icon
                              className="text-lg md:text-xl lg:text-xl select-none bg-gradient-to-t from-accent to-primary  text-transparent bg-clip-text"
                              key={`icon-${i}`}
                            />
                          );
                        })}
                      </div>
                      <a
                        hidden={youtubeVideo}
                        href={project.link}
                        target="_blank"
                        className="text-secondary underline cursor-pointer text-xs flex items-center gap-1"
                      >
                        <span className="hidden sm:inline-block opacity-75">
                          {projectsTranslations.projects.link_text}
                        </span>{" "}
                        <NewWindowIcon className="pt-1.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-20 w-full absolute bottom-0 flex justify-center items-center bg-gradient-to-t from-base-300 from-40%">
        <a href={!open ? `#projects` : undefined}>
          <TopArrow
            onClick={() => {
              setOpen(!open);
            }}
            className={`${!open && "rotate-180"} cursor-pointer`}
          />
        </a>
      </div>
    </section>
  );
}
