import nodemailer from 'nodemailer';
import myConfig from 'dotenv';
myConfig.config ();

function emailNewEmployee (employee) {
  let recipientEmail = employee.email;
  let employeeName = employee.firstName;
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
    subject: 'Employee Benefits',
    text: `Dear ${employeeName},
    [Company name] is pleased to introduce you to their benefits policy.
    Please,
    First read through the Terms and Conditions below.
    Then, follow the link to download the MB Pension and Benefits Group mobile application.
    Note: if you download the application this means you have agreed with the Terms and Conditions in this email.
    [Add the Terms and Conditions here]
    [Add the link to the mobile application here.]`, //TODO: Add the Registration link
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
