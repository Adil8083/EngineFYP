const axios = require("axios");
const fs = require("fs");
require("dotenv").config({ path: `./email.env` });
const mail = process.env.email;
const getData = async () => {
  var userData = await axios.get(
    "http://whitelabelapp-backend.herokuapp.com/api/users/get",
    {
      params: {
        email: mail,
      },
    }
  );

  console.log(userData.data);

  let data = JSON.stringify(userData.data);
  fs.writeFileSync("../EngineFYP/testWhiteLabel/Data.json", data);
};

getData();
