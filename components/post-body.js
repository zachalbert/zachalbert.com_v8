import markdownStyles from "./markdown-styles.module.css";
import { PortableText } from "@portabletext/react";
import cx from "classnames";

export default function PostBody({ content }) {
  return (
    <div
      className={cx("prose", "max-w-2xl", "mx-auto", markdownStyles.markdown)}
    >
      <PortableText value={content} />
    </div>
  );
}
