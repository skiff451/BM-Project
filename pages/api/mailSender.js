import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, tel, email, comment } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.meta.ua",
    port: 465,
    secureConnection: "false",
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: "metalcut-client@meta.ua",
      pass: process.env.MAIL_PASS,
    },
  });

//   transporter.verify(function (error, success) {
//     if (error) {
//       console.log("Some problem.....!", error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

  let info = await transporter.sendMail({
    from: "metalcut-client@meta.ua",
    to: "samsonskiff@gmail.com",
    subject: `New message from customer`,
    text: `клиент: ${name}`,
    html: `<h1>${name}</h1>
                <h2>${tel}</h2>
                <p>${comment}
                <br/>
                ${email}
                </p>`,
  });
  if (info.response.split(" ")[0] === "250") {
    res.status(200).send("ok");
  } else {
    res.status(400).send("failed");
  }
};
