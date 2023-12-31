import { client, getProject } from "@/sanity/sanity-utils";
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
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View Project
        </a>
      </header>

      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={1920}
          height={1080}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      )}

      {project.content && (
        <div className="text-lg text-gray-700 mt-5">
          <PortableText value={project.content} components={components} />
        </div>
      )}
    </div>
  );
}
