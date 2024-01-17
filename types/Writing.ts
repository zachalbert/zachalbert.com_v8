import { PortableTextBlock } from "sanity";

export type Writing = {
  _id: string;
  _createdAt: Date;
  title: PortableTextBlock[];
  slug: string;
  pinned: boolean;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: PortableTextBlock[];
};
