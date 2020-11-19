require("dotenv").config();
const name = process.env.app_name;
const fs = require("fs");
const fse = require("fs-extra");
const xml2js = require("xml2js");
const sharp = require("sharp");
//---------------------------\\
//editing XML for App Name
fs.readFile("./res/values/strings.xml", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  xml2js.parseString(data, (err, result) => {
    if (err) {
      throw err;
    }
    result.resources.string[0]._ = name;

    const builder = new xml2js.Builder();
    const xml = builder.buildObject(result);

    fs.writeFile("./res/values/strings.xml", xml, (err) => {
      if (err) {
        throw err;
      }

      console.log(`Updated XML is written to a new file.`);
    });
  });
});

//-----------------------------------------------------------\\
//Image Resizeing
//mipmap-hdpi/
sharp("./image/test.png")
  .resize({ height: 72, width: 72 })
  .toFile("./res/mipmap-hdpi/ic_launcher.png")
  .then(function (newFileInfo) {
    console.log("Image Resized");
  })
  .catch(function (err) {
    console.log("Got Error");
  });
sharp("./image/test.png")
  .resize({ height: 72, width: 72 })
  .toFile("./res/mipmap-hdpi/ic_launcher_round.png")
  .then(function (newFileInfo) {
    console.log("Image Resized");
  })
  .catch(function (err) {
    console.log("Got Error");
  });
//mipmap-mdpi/
sharp("./image/test.png")
  .resize({ height: 48, width: 48 })
  .toFile("./res/mipmap-mdpi/ic_launcher_round.png")
  .then(function (newFileInfo) {
    console.log("Image Resized");
  })
  .catch(function (err) {
    console.log("Got Error");
  });
sharp("./image/test.png")
  .resize({ height: 48, width: 48 })
  .toFile("./res/mipmap-mdpi/ic_launcher.png")
  .then(function (newFileInfo) {
    console.log("Image Resized");
  })
  .catch(function (err) {
    console.log("Got Error");
  });

//mipmap-xhdpi/
sharp("./image/test.png")
  .resize({ height: 96, width: 96 })
  .toFile("./res/mipmap-xhdpi/ic_launcher_round.png")
  .then(function (newFileInfo) {
    console.log("Image Resized");
  })
  .catch(function (err) {
    console.log("Got Error");
  });
sharp("./image/test.png")
  .resize({ height: 96, width: 96 })
  .toFile("./res/mipmap-xhdpi/ic_launcher.png")
  .then(function (newFileInfo) {
    console.log("Image Resized");
  })
  .catch(function (err) {
    console.log("Got Error");
  });

//mipmap-xxhdpi/
sharp("./image/test.png")
  .resize({ height: 144, width: 144 })
  .toFile("./res/mipmap-xxhdpi/ic_launcher_round.png")
  .then(function (newFileInfo) {
    console.log("Image Resized");
  })
  .catch(function (err) {
    console.log("Got Error");
  });
sharp("./image/test.png")
  .resize({ height: 144, width: 144 })
  .toFile("./res/mipmap-xxhdpi/ic_launcher.png")
  .then(function (newFileInfo) {
    console.log("Image Resized");
  })
  .catch(function (err) {
    console.log("Got Error");
  });

//mipmap-xxxhdpi/
sharp("./image/test.png")
  .resize({ height: 192, width: 192 })
  .toFile("./res/mipmap-xxxhdpi/ic_launcher_round.png")
  .then(function (newFileInfo) {
    console.log("Image Resized");
  })
  .catch(function (err) {
    console.log("Got Error");
  });
sharp("./image/test.png")
  .resize({ height: 192, width: 192 })
  .toFile("./res/mipmap-xxxhdpi/ic_launcher.png")
  .then(function (newFileInfo) {
    console.log("Image Resized");
  })
  .catch(function (err) {
    console.log("Got Error");
  });

//----------------------------------------------------------------\\
//moving folder

fse.copy("./res", "./testWhiteLabel/android/app/src/main/res", function (err) {
  if (err) {
    console.log("error occured");
  }
  console.log("successfull");
});
