const expres = require("expres");
const app = expres();

const { spawn } = require("child_process");

const main = () => {
  const ls = spawn("./test.sh", ["hello123", "sedxed3"]);
  ls.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });
  ls.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });
  ls.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

main();
const port = 3000;
app.listen(port, () => {
  console.log("running server at port ", 3000);
});
