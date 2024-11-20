import jwt from "jsonwebtoken";
import twilio from "twilio";
import nodemailer from "nodemailer";
export const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.MAXAGE,
  });
};
// export default createToken;

export const sendSMS = (userMobileNo, code) => {
  console.log(1, process.env.ACCOUNT_SSID);
  console.log(0, process.env.AUT_TOKEN);
  const accountssid = process.env.ACCOUNT_SSID;
  const autToken = process.env.AUT_TOKEN;

  const client = new twilio(accountssid, autToken);

  const fromNumber = "+15177934255";
  const receipentNumber = "+2349060834999";
  client.messages
    .create({
      body: `verification code ${code}`,
      from: fromNumber,
      to: userMobileNo,
    })
    .then((message) => {
      console.log("message sent succesfully" + message);
      return { message: message };
    })
    .catch((error) => {
      console.log("error sending message ", error);
      return error;
    });
};
export const sendMail = async (verifycode, email, firstname, lastname) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amadifaraday@gmail.com",
      pass: "foympeqrkqmkukac",
    },
  });

  var message = `Dear ${firstname} ${lastname} welcome, klndly verify Your Account using this Passcode`;
  const sendCode = sendMail(verifyLink, author.email, message);
  var mailOptions = {
    from: "amadifaraday@gmail.com",
    to: `${email}`,
    subject: "Account password reset",
    // text: "you have a new request for backend task ",
    // html: `<p> Dear Amadi Patrick, this is  your rest code ${verifycode}</p>`,
    html: `<p> ${message} ${verifycode}</p>`,
  };

  const sendMail = transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return {
        error,
        message: "email not sent",
      };
    } else {
      console.log("Email sent: " + info.response);
      return true;
    }
  });
};
