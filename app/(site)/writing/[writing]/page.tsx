import cx from "classnames";
import { client, getWriting } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import typescript from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import "../../prism-solarized-dark-atom.css";
import type { Metadata, ResolvingMetadata } from "next";
import { PortableTextBlock } from "sanity";

Refractor.registerLanguage(js);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(tsx);

const builder = urlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const ImageComponent = ({
  value,
  isInline,
}: {
  value: any;
  isInline: boolean;
}) => {
  const { width, height } = getImageDimensions(value);
  return (
    <Image
      src={urlFor(value)
        .width(isInline ? 100 : 3840)
        .width(isInline ? 80 : 2160)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || ""}
      width={width}
      height={height}
      loading="lazy"
      style={{
        display: isInline ? "inline-block" : "block",
        aspectRatio: width / height,
      }}
    />
  );
};

const Code = ({ props }: any) => {
  return <div>{props}</div>;
};

type MarkProps = {
  href?: string;
};

const components = {
  types: {
    image: ImageComponent,
    myCodeField: ({ value }: any) => {
      return <Refractor language={value.language} value={value.code} />;
    },
  },
};

const titleComponents = {
  block: ({ children }: any) => <>{children}</>,
};

type Props = {
  params: { writing: string };
};

type Span = {
  _type: "span";
  text: string;
};

function toPlainText(blocks: PortableTextBlock[] = []) {
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }

      const children = block.children as Span[];
      return children.map((child) => child.text).join("");
    })
    .join("\n\n");
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.writing;
  const data = await getWriting(slug);

  return {
    title: toPlainText(data.title) + " | Zac Halbert",
    description: data.excerpt,
  };
}

export default async function Writing({ params }: Props) {
  const slug = params.writing;
  const writing = await getWriting(slug);

  if (!writing) {
    return (
      <article className="max-w-prose mx-auto">
        <h3 className="text-center my-24">Post not found</h3>
      </article>
    );
  }

  return (
    <article>
      <section className="container">
        <div
          className={cx(
            "flex",
            "justify-center",
            "items-center",
            "relative",
            "mb-12"
          )}
        >
          {writing.image && (
            <>
              <Image
                src={writing.image}
                alt={writing.imageAlt}
                width={1920}
                height={1080}
                className="m-0"
              />
              <div
                className={cx(
                  "bg-gradient-to-b",
                  "from-black/10",
                  "via-black/50",
                  "to-black/90",
                  "absolute",
                  "w-full",
                  "h-full",
                  "left-0",
                  "top-0",
                  "z-10",
                  "rounded-xl",
                  "hidden",
                  "md:block"
                )}
              />
            </>
          )}
          <h1
            className={cx(
              "absolute",
              "!text-white",
              "z-20",
              "bottom-0",
              "mb-24",
              "hidden",
              "md:block"
            )}
          >
            <PortableText value={writing.title} components={titleComponents} />
          </h1>
        </div>
        <div className="max-w-prose mx-auto">
          <h1 className="md:hidden">
            <PortableText value={writing.title} />
          </h1>
          {writing.content && (
            <PortableText value={writing.content} components={components} />
          )}
        </div>
      </section>
    </article>
  );
}
