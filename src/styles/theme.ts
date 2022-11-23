import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from './components/buttonStyles';
import { SelectStyles as Select } from './components/selectStyles';

export const myTheme = extendTheme({
  colors: {
    primary: '#ECAB0F',
    secondary: '#B57C00',
    textBlack: '#292D32',
    textWhite: '#FFF',
    cardPrimary: '#5A5A5A',
    cardSecondary: '#F0F0F0'
  },
  components: {
    Button,
    Select
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
});