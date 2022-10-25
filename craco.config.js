// const CracoAlias = require("craco-alias");

module.exports = {
  style: {
    postOptions: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer")
      ],
    },
  },
};
