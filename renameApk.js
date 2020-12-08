var fs = require("fs");
require("dotenv").config();
var appName = process.env.app_name;

fs.rename(
  "./build/app-release.apk",
  "./build/" + appName + ".apk",
  function (err) {
    if (err) throw err;
    console.log("File Renamed.");
  }
);
