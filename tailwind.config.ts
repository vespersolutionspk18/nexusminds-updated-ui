import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },

      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center 120%, #8B00FF 20%, #000000 70%)',
        'blueprint-image': "url('/assets/bpimage.png')",
        'prototyping-image': "url('/assets/protoimage.jpeg')",
        'devlopment-image': "url('/assets/coding.png')",
        'support-image': "url('/assets/support.png')",
        'aws-image': "url('/assets/awslogo.png')",
        'azure-image': "url('/assets/azureimage.jpeg')",
        'gcp-image': "url('/assets/googleimage.jpeg')",
        'heroku-image': "url('/assets/heroku.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config