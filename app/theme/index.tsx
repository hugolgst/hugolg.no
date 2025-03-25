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
          50: { value: '#fffdea' },
          100: { value: '#fffac5' },
          200: { value: '#fff586' },
          300: { value: '#ffe947' },
          400: { value: '#ffd91d' },
          500: { value: '#fdbe12' },
          600: { value: '#e08f00' },
          700: { value: '#ba6503' },
          800: { value: '#964e0a' },
          900: { value: '#7c400b' },
          950: { value: '#472001' }
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
