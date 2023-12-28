import { ReactNode, ComponentType } from "react";
import cx from "classnames";
import Link from "next/link";

type IconProps = {
  size?: number | string;
  className?: string;
};

type ThemeHeaderProps = {
  icon: ComponentType<IconProps>;
  theme: string;
};

type ThemeLinkProps = {
  href: string;
  icon: ComponentType<IconProps>;
  theme: string;
  className?: string;
};

export const ThemeLink: React.FC<ThemeLinkProps> = ({
  href,
  icon: Icon,
  theme,
  className,
}) => {
  return (
    <Link href={href} className={cx(className)}>
      <Icon /> {theme}
    </Link>
  );
};

const ThemeHeader: React.FC<ThemeHeaderProps> = ({ icon: Icon, theme }) => {
  return (
    <div className={cx("flex", "items-end", "mb-8", "gap-2", "-ml-10")}>
      <Icon size={32} className="mb-0.5" />
      <div>
        <h5>Theme</h5>
        <h2 className="mb-0">{theme}</h2>
      </div>
    </div>
  );
};

export default ThemeHeader;
