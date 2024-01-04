import { PortableTextBlock } from "sanity";

export type Writing = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  content: PortableTextBlock[];
};
