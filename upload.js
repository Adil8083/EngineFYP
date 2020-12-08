require("dotenv").config();

var appName = process.env.app_name;

const { Storage } = require("@google-cloud/storage");
const path = require("path");
const apk = new Storage({
  keyFilename: path.join(__dirname, "./propane-karma-296901-ec3fe2344482.json"),
  projectId: "propane-karma-296901",
});

const bucket = apk.bucket("apk-storage-fyp");
const file = "./build/" + appName + ".apk";
async function uploadFile() {
  // Uploads a local file to the bucket
  await bucket.upload(file, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    // By setting the option `destination`, you can change the name of the
    // object you are uploading to a bucket.
    metadata: {
      // Enable long-lived HTTP caching headers
      // Use only if the contents of the file will never change
      // (If the contents will change, use cacheControl: 'no-cache')
      cacheControl: "public, max-age=31536000",
    },
  });

  console.log(`${appName} uploaded to apk-storage-fyp.`);
}

uploadFile().catch(console.error);
// [END storage_upload_file]
