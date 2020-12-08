const nodemailer = require("nodemailer");
require("dotenv").config({ path: `./email.env` });
require("dotenv").config();
var appName = process.env.app_name;
const mail = process.env.email;
async function main() {
  //   let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "mail.hybridsquares.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "mailer@hybridsquares.com", // generated ethereal user
      pass: "BY*Jm9R~+7wD", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "mailer@hybridsquares.com", // sender address
    to: mail, // list of receivers
    subject: "Criacio", // Subject line
    html:
      '<p>your app link for download <a href="https://storage.googleapis.com/apk-storage-fyp/' +
      appName +
      '.apk">here</a></p>',
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
