/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/components/Header.jsx',
    './src/components/Image.jsx',
    './src/components/About.jsx',
    './src/components/Group.jsx',
    './src/components/Expertise.jsx',
    './src/components/Card.jsx',
    './src/components/Project.jsx',
    './src/components/Partner.jsx',
    './src/components/Consultation.jsx',
    './src/Homepage/HomePage.jsx',
    './src/App.js',
  ],
  theme: {
    fontSize: {
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        },
      ],
      '2.5xl': [
        '1.625rem',
        {
          lineHeight: '2.125rem',
          letterSpacing: '-0.015em',
          fontWeight: '400',
        },
      ],
      '3xl': [
        '1.875rem',
        {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
    },
    screens: {
      mobile: '320px',
      // mobile
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      laptop: '1280px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
