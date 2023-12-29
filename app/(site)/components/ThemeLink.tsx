import { ReactNode, ComponentType } from "react";
import cx from "classnames";
import Link from "next/link";

type IconProps = {
  size?: number | string;
  className?: string;
};

type ThemeLinkProps = {
  href: string;
  icon: ComponentType<IconProps>;
  theme: string;
  className?: string;
};

const ThemeLink: React.FC<ThemeLinkProps> = ({
  href,
  icon: Icon,
  theme,
  className,
}) => {
  return (
    <Link
      href={href}
      className={cx(
        "flex",
        "items-center",
        "gap-2",
        "p-4",
        "rounded-2xl",
        "hover:bg-black/5",
        "active:bg-black/10",
        "no-underline",
        className
      )}
    >
      <Icon /> {theme}
    </Link>
  );
};

export default ThemeLink;
