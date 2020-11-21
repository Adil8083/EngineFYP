const { upload } = require("wetransfert");
const path = require("path");

const toUpload = path.resolve(__dirname, "build/tt.txt");

const myUpload = upload(
  "",
  "",
  toUpload,
  "your app is made",
  "en",
  "adilwahed@gmail.com",
  "GOCF44utl"
)
  .on("progress", (progress) => console.log("PROGRESS", progress))
  .on("end", (end) => console.log("END", end))
  .on("error", (error) => console.error("ERROR", error));

setTimeout(function () {
  myUpload.cancel();
}, 10000);
