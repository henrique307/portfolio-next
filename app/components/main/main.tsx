"use client"

import { Intro } from "./intro/intro";
import { Experiencia } from "./experience/experience";
import { Projects } from "./projects/projects";
import { Testimonials } from "./testimonials/testimonials";
import { CallToAction } from "./action/action";

export function MainComponent() {
  return (
    <main>
      <Intro />
      <Experiencia />
      <Projects />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
