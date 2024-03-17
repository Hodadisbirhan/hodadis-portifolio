import nodemailer from "nodemailer";

const transfer = nodemailer.createTransport({
  host: "smtp.gmail.com",
  // secure: false,
  service: "gmail",
  secure: true,
  logger: true,
  debug: true,
  ignoreTLS: true,
  auth: {
    user: "hodadisbirhan80@gmail.com",
    pass: "dvnrpkfcjiekaqgi",
  },
});

export default defineEventHandler(async (event) => {
  const { from, name, phone, text } = await readBody(event);
  const mailOption = {
    from,
    to: "hodadisbirhan80@gmail.com",
    subject:
      "From  " +
      name +
      " with Phone: " +
      phone +
      " about " +
      "Personal Portifolio",
    text,
  };
  console.log(mailOption);

  return new Promise((resolve, reject) => {
    transfer.sendMail(mailOption, (error, info) => {
      if (error) {
        return reject({ status: 400, data: error });
      } else {
        return resolve({ status: 200, data: info.response });
      }
    });
  });
});
