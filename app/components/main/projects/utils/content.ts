import { TechIconInterface, icons } from "../../../../utils/icons/tech-icons";

export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  github: string;
  icons?: ((props: TechIconInterface) => JSX.Element)[];
}

export const trabalhoIcons = [
  {
    icons: [
      icons.IconReact,
      icons.IconRedux,
      icons.IconTailwindcss,
      icons.IconStripe,
    ],
  },
  {
    icons: [icons.IconJavascript, icons.IconHtml5, icons.IconSass],
  },
  {
    icons: [icons.IconTypescript, icons.IconReact],
  },
  {
    icons: [icons.IconTypescript, icons.IconReact],
  },
  {
    icons: [
      icons.IconGoogle,
      icons.IconNestjs,
      icons.IconExpress,
      icons.IconSwagger,
    ],
  },
  {
    icons: [
      icons.IconNestjs,
      icons.IconMongodb,
      icons.IconExpress,
      icons.IconSwagger,
    ],
  },
  {
    icons: [icons.IconReact, icons.IconTailwindcss, icons.IconNestjs],
  },
  {
    icons: [
      icons.IconAPI,
      icons.IconExpress,
      icons.IconNode,
      icons.IconTypescript,
    ],
  },
  {
    icons: [icons.IconNode, icons.IconTypescript, icons.IconAPI],
  },
  {
    icons: [icons.IconNode, icons.IconAPI, icons.IconExpress],
  },
  {
    icons: [icons.IconAPI, icons.IconExpress, icons.IconNode],
  },
  {
    icons: [
      icons.IconNode,
      icons.IconAPI,
      icons.IconSelenium,
      icons.IconNestjs,
    ],
  },
];
