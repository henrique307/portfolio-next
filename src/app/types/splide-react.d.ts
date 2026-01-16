declare module "@splidejs/react-splide" {
  import * as React from "react";
  import type { Options } from "@splidejs/splide";

  export { Options };

  export interface SplideProps {
    options?: Options;
    hasTrack?: boolean;
    tag?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
  }

  export const Splide: React.FC<SplideProps>;
  export const SplideSlide: React.FC<{ children?: React.ReactNode }>;
}
