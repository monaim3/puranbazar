module.exports = {
    //...
    plugins: [require("daisyui")],
    content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    plugins: [
      require('tw-elements/dist/plugin')
    ]
  }