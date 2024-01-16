import { PortableTextBlock } from "sanity";

export type Writing = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  pinned: boolean;
  excerpt: string;
  image: string;
  content: PortableTextBlock[];
};
