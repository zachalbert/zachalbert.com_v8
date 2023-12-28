import { ReactNode, ComponentType } from "react";
import cx from "classnames";

type IconProps = {
  size?: number | string;
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
      <Icon size={24} />
      <h4 className="mt-4">{title}</h4>
      <p className="mb-0">{children}</p>
    </div>
  );
};

export default SkillCard;
