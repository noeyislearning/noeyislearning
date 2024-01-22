const config = {
  semi: true,
  trailingComma: 'none',
  singleQuote: false,
  printWidth: 120,
  tabWidth: 2,
  endOfLine: 'auto',
  plugins: [
    "prettier-plugin-tailwindcss"
  ],
  tailwindConfig: "./tailwind.config.js"
}

export default config;