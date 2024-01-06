function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          secondary: withOpacity('--color-text-secondary'),
          color: withOpacity('--color-text-color'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'bg-primary': withOpacity('--color-bg-primary'),
          'bg-secondary': withOpacity('--color-bg-secondary'),
          'bg-tertiary': withOpacity('--color-bg-tertiary'),
          'bg-active': withOpacity('--color-bg-active'),
        },
      },      
    },
  },
  plugins: [],
}