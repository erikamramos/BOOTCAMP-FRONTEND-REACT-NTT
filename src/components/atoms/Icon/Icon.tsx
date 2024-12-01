import { FC } from 'react';
import { IconConfig } from '../../../config/constants/config';

interface IconProps {
  name: string;
  color?: string;
  size?: number | string;
  className?: string;
}

export const Icon: FC<IconProps> = ({
  name,
  color = IconConfig.DEFAULT_COLOR,
  size = IconConfig.DEFAULT_SIZE,
  className,
}) => {
  const iconSrc = `/src/assets/icons/${name}.svg`;

  return (
    <svg
      aria-label={`icon-${name}`}
      className={className}
      width={size}
      height={size}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={`${iconSrc}#icon`} />
    </svg>
  );
};
