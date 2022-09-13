import React, { FC } from 'react';
import { IconType } from './type';
import { getIconFont } from '../../utils/getIconFont';

export const Icon: FC<IconType> = ({ type, size, color, name, ...props }) => {
  const FontICon = getIconFont(type);

  return <FontICon size={size} color={color} name={name} {...props} />;
};
