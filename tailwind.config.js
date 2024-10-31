module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      backgroundImage: {
        'wavy-lines': "url('/src/assets/wavy-lines.svg')",
        'wavy-line-mirrored': "url('/src/assets/wavy-line-mirrored.svg')",
        'wavy-line-unmirrored': "url('/src/assets/wavy-line-unmirrored.svg')",
      },
    },
  },
  plugins: [],
};
