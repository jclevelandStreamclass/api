const nodemailer = require("nodemailer");
const loadConfig = require("../config/nodemailer.js");

exports.sendConfirmationMail = async ({ email, text, subject }) => {
  if (!email || !subject || !text) {
    throw new Error("email incomplete");
  }

  const mailConfig = await loadConfig();
  const transport = nodemailer.createTransport(mailConfig);
  const message = {
    from: "stream.node@gmail.com",
    to: email,
    //should be client email
    subject,
    text,
    html: `Confirmation Email : <a href=${text}> Activate Email</a>`,
    replyTo: email,
  };
  transport.sendMail(message, (err, info) => {
    console.log(info, err);
  });
};
