import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#b21e35',
          secondary: '#2c6e49',
          accent: '#216869',
          neutral: '#2D3430',
          'base-100': '#2C2523',
          info: '#9ba9ff',
          success: '#95d387',
          warning: '#f9b16e',
          error: '#fd7272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
export default config
