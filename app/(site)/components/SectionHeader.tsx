import { ReactNode, ComponentType } from "react";
import cx from "classnames";

type IconProps = {
  size?: number | string;
  className?: string;
};

type SectionHeaderProps = {
  icon: ComponentType<IconProps>;
  overline?: string;
  headline: string;
  className?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon: Icon,
  overline,
  headline,
  className,
}) => {
  return (
    <div
      className={cx(
        "flex",
        "items-end",
        "mb-8",
        "gap-4",
        "md:-ml-12",
        className
      )}
    >
      <Icon size={32} className="mb-0.5" />
      <div>
        {overline && (
          <span
            className={cx(
              "uppercase",
              "text-xs",
              "font-bold",
              "tracking-widest",
              "opacity-70"
            )}
          >
            {overline}
          </span>
        )}
        <h2 className="m-0">{headline}</h2>
      </div>
    </div>
  );
};

export default SectionHeader;
