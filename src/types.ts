import type { ImageMetadata } from "astro";

export type Project = {
  image: ImageMetadata;
  title: string;
  description: string;
  stack: string[];
  href: string;
};