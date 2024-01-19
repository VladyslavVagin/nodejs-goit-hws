const nodemailer = require("nodemailer");
require("dotenv").config();

const { APP_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "devvlad1003marin@gmail.com",
    pass: APP_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);
// const email = {
//   to: "biggest5family@gmail.com",
//   from: "devvlad1003marin@gmail.com",
//   subject: "Test email",
//   html: "<p><strong>TEST EMAIL<strong> from localhost:3000<p>",
// };

  const sendEmail = async (data) => {
    const email = {...data, from: "devvlad1003marin@gmail.com"};
    await transport.sendMail(email);
    return true;
  }

  module.exports = sendEmail;