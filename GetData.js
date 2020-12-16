const axios = require("axios");
const fs = require("fs");
require("dotenv").config({ path: `./email.env` });
const mail = process.env.email;
const getData = async () => {
  var userData = await axios.get("http://192.168.0.101:3000/api/users/get", {
    params: {
      email: mail,
    },
  });

  console.log(userData.data);

  let data = JSON.stringify(userData.data);
  fs.writeFileSync("../EngineFYP/testWhiteLabel/Data.json", data);
};

getData();
