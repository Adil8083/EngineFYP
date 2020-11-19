echo "app_name="$1"">.env
echo "USER_ID=$2">./testWhiteLabel/.env
node index.js
cd testWhiteLabel
cd android
./gradlew assembleRelease