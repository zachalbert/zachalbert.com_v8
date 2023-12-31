import { ReactNode, ComponentType } from "react";
import cx from "classnames";

type IconProps = {
  size?: number | string;
  className?: string;
};

type SkillCardProps = {
  icon: ComponentType<IconProps>;
  title: string;
  children: ReactNode;
};

const SkillCard: React.FC<SkillCardProps> = ({
  icon: Icon,
  title,
  children,
}) => {
  return (
    <div className={cx("p-6", "border", "rounded-lg")}>
      <div className="flex gap-3">
        <Icon size={24} className="mt-0.5 shrink-0" />
        <span
          className={cx(
            "text-md",
            "leading-7",
            "font-medium",
            "text-gray-600",
            "dark:text-gray-400"
          )}
        >
          {title}
        </span>
      </div>
      <p className="mt-2 mb-0">{children}</p>
    </div>
  );
};

export default SkillCard;
