const express = require("express");
const app = express();
const { spawn } = require("child_process");

var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/image/");
  },
  filename: function (req, file, cb) {
    cb(null, "test.png");
  },
});

var upload = multer({
  storage: storage,
  onFileUploadStart: function (file) {
    console.log(file.originalname + " is starting ...");
  },
});

const main = (appName, userId) => {
  const ls = spawn("test.sh", [appName, userId], {
    shell: true,
    detached: true,
    windowsHide: true,
  });
  ls.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
    return data;
  });
  ls.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
    return data;
  });
  ls.on("error", (error) => {
    console.error(`stderr: ${error}`);
    return error;
  });
  ls.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
    return code;
  });
};

app.post("/", upload.single("appIcon"), async (req, res) => {
  let request = await main(req.body.name, req.body.userId);
  console.log(req.body);
  console.log(req.file);
  res.status(200).send({
    success: true,
    message:
      "Your app is under construciton, you will receive the url to download your app in a while",
  });
});

const port = 8000;
app.listen(port, () => {
  console.log("running server at port ", port);
});
