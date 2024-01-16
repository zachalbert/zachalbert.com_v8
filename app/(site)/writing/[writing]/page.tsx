import cx from "classnames";
import { client, getWriting } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Refractor from "react-refractor";
// Load any languages you want to use from `refractor`
import js from "refractor/lang/javascript";
import typescript from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import "../../prism-solarized-dark-atom.css";

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

type Props = {
  params: { writing: string };
};

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
                alt={writing.title}
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
            {writing.title}
          </h1>
        </div>
        <div className="max-w-prose mx-auto">
          <h1 className="md:hidden">{writing.title}</h1>
          {writing.content && (
            <PortableText value={writing.content} components={components} />
          )}
        </div>
      </section>
    </article>
  );
}
