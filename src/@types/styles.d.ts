import 'styled-components';
import { DefaultTheme } from '../styles/themes/default'

type ThemeType = typeof DefaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {};
};