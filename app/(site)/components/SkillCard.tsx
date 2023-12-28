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
        <Icon size={24} className="mt-1 shrink-0" />
        <h4 className="m-0">{title}</h4>
      </div>
      <p className="mt-2 mb-0">{children}</p>
    </div>
  );
};

export default SkillCard;
