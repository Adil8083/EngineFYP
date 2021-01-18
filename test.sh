echo "app_name="$1"">.env
echo "email="$2"">email.env
echo "USER_ID=$3">./testWhiteLabel/.env

node index.js

echo "BEFORE SLEEPING"
sleep 5
echo "AFTER SLEEPING"


echo Getting Data
node GetData.js

sleep 3
echo got data

cd testWhiteLabel
yarn build

sleep 2
echo "moving"

mv ./android/app/build/outputs/apk/release/app-release.apk ../build
echo "Your build has been successfully generated!!!"
sleep 2
cd ..

sleep 2
echo renaming apk
node renameApk.js
sleep 2
echo apk renamed

sleep 2
echo uploading apk
node upload.js
sleep 2
echo apk uploaded


sleep 2
echo sending apk to user
node mailer.js
sleep 2
echo apk sended

sleep 10