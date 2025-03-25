import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    'html, body': {
      backgroundColor: 'gray.100'
    }
  },
  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: '#fffceb' },
          100: { value: '#fff6c6' },
          200: { value: '#feed89' },
          300: { value: '#fede4b' },
          400: { value: '#fdcc22' },
          500: { value: '#e9a107' },
          600: { value: '#db8204' },
          700: { value: '#b65c07' },
          800: { value: '#93470d' },
          900: { value: '#793b0e' },
          950: { value: '#461e02' }
        }
      }
    },
    semanticTokens: {
      colors: {
        primary: {
          solid: { value: '{colors.primary.500}' },
          contrast: { value: '{colors.primary.100}' },
          fg: { value: '{colors.primary.700}' },
          muted: { value: '{colors.primary.100}' },
          subtle: { value: '{colors.primary.200}' },
          emphasized: { value: '{colors.primary.300}' },
          focusRing: { value: '{colors.primary.500}' }
        },
        border: {
          blurredFlex: { value: 'rgba(200, 200, 200, 0.8)' }
        }
      }
    }
  }
})

const system = createSystem(defaultConfig, config)

export default system
