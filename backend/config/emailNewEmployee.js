import nodemailer from 'nodemailer';
import myConfig from 'dotenv';
myConfig.config ();

function emailNewEmployee (employee) {
  let recipientEmail = employee.email; //TODO: How to reach the email from employees collection in MONGODB????

  let transporter = nodemailer.createTransport ({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASSWORD,
    },
  });

  let mailOptions = {
    from: 'mbgrouptest@gmail.com',
    to: recipientEmail,
    subject: 'First Registration Link',
    text: 'Click on the link to register', //TODO: Add the Registration link
  };

  transporter.sendMail (mailOptions, function (err, success) {
    if (err) {
      console.log (err);
    } else {
      console.log ('Email sent successfully!');
    }
  });
}

export default emailNewEmployee;
