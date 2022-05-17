import { SVGProps } from 'react';
import theme from '../theme';

export interface IconProps extends SVGProps<SVGSVGElement> {
  defaultColor?: boolean;
}

export const defaultIconColor = theme.mcmColorTheme.accentBlue;