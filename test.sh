echo "app_name="$1"">.env
echo "USER_ID=$2">./testWhiteLabel/.env

node index.js

echo "BEFORE SLEEPING"
sleep 5
echo "AFTER SLEEPING"

cd testWhiteLabel
yarn build

# mv testWhiteLabel/android/app/build/outputs/apk/release/app-release.apk ./build
echo "Your build has been successfully generated!!!"
