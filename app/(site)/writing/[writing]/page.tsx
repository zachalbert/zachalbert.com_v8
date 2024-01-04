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
  return <div>asdf{props}</div>;
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
    <div>
      <header className="flex justify-between items-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
          {writing.title}
        </h1>
      </header>

      {writing.image && (
        <Image
          src={writing.image}
          alt={writing.title}
          width={1920}
          height={1080}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      )}

      {writing.content && (
        <div className="text-lg text-gray-700 mt-5">
          <PortableText value={writing.content} components={components} />
        </div>
      )}
    </div>
  );
}
