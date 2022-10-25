/** @type {import('tailwindcss').Config} */

/**
 * npx tailwindcss init -p で自動生成される設定ファイル
 */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  content: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
