import { defineStyleConfig } from '@chakra-ui/react'

export const ButtonStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    primary: {
      bg: 'primary'
    },
    headerButton: {
      bg: 'transparent',
      w: 'auto',
      p: '0px',
      m: '0px'
    }
  },
  // The default `size` or `variant` values
  defaultProps: {},
})
