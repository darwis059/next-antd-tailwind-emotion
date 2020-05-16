module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      boxShadow: {
        "neumorphism-blue": "20px 20px 60px #1e3064, -20px -20px 60px #284088",
        "neumorphism-blue-inset":
          "inset 20px 20px 60px #1e3064, inset -20px -20px 60px #284088",
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}