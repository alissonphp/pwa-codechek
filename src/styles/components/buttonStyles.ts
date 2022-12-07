import { defineStyleConfig } from '@chakra-ui/react'

export const ButtonStyles = defineStyleConfig({
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    primary: {
      bg: 'primary',
      color: '#FFF',
      h: "auto",
      p: "18px",
      borderRadius: "4px",
      fontWeight: "400",
      _disabled: {
        bg: '#DCDCDC',
        color: '#8E8E93',
        opacity: 1
      },
      _hover: {
        bg: 'secondary'
      }
    },
    headerButton: {
      bg: 'transparent',
      h: 'auto',
      minW: 'auto',
      w: 'auto',
      p: '0px',
      m: '0px'
    }
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: "primary"
  },
})
