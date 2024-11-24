import { FC } from 'react';

interface IconProps {
  name: string;
  color?: string;
  size?: number | string;
  className?: string;
}

export const Icon: FC<IconProps> = ({
  name,
  color = 'currentColor',
  size = 24,
  className,
}) => {
  const iconSrc = `/src/assets/icons/${name}.svg`;

  return (
    <svg
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
