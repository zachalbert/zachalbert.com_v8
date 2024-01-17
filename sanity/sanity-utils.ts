import { Project } from "@/types/Projects";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Writing } from "@/types/Writing";

export const client = createClient(clientConfig);

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        excerpt,
        "image": image.asset->url,
        url,
        content
    }`,
    { slug }
  );
}

export async function getWritings(): Promise<Writing[]> {
  return client.fetch(
    groq`*[_type == "writing"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        pinned,
        excerpt,
        "image": image.asset->url,
        "imageAlt": image.alt,
        content
    } | order(_createdAt desc) | order(pinned asc)`
  );
}

export async function getWriting(slug: string): Promise<Writing> {
  return client.fetch(
    groq`*[_type == "writing" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        pinned,
        "image": image.asset->url,
        "imageAlt": image.alt,
        content
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return client.fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}
