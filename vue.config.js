console.log("loaded vue.config.js");
const path = require("path");
const fs = require("fs-extra");

module.exports = {
  devServer: {
    open: true,
    port: 3000,
    disableHostCheck: true,
    before: (app, server, compiler) => {
      const apiPath = path.join(__dirname, "src", "api", "api.js");
      const jsonPath = path.join(__dirname, "src", "api", "db.json");

      console.log(apiPath);
      console.log(jsonPath);
    }
  }
};
