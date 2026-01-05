"use client"

import { Intro } from "./intro/intro";
import { Experiencia } from "./experience/experience";
import { Trabalhos } from "./projects/projects";
import { Testimonials } from "./testimonials/testimonials";
import { CallToAction } from "./action/action";
import { useDriveContent } from "@/app/providers/drive-content/drive.provider";

export function MainComponent() {
  return (
    <main>
      <Intro />
      <Experiencia />
      <Trabalhos />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
