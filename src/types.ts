import type { ImageMetadata } from "astro";

export type StackGroup = {
  frontend: string[];
  backend: string[];
  other: string[];
};

export type Project = {
  image: ImageMetadata;
  stack: StackGroup;
  href: string;
};
