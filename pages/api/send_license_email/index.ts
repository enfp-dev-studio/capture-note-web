import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ResponseData = {
  message: string;
};

const licenseKeyEmailHTML = `<!DOCTYPE html>
<html>
  <head>
    <title>Your Capture Note License Key</title>
    <style>
      /* Add any CSS styles here */
    </style>
  </head>
  <body>
    <h1>Your Capture Note License Key</h1>
    <p>Dear [User],</p>
    <p>Thank you for purchasing a Capture Note license key! Your license key is <strong>[KEY]</strong>.</p>
    <p>Please keep this email safe as it contains important information that you will need to activate your license.</p>
    <p>To activate your license, please follow these steps:</p>
    <ol>
      <li>Open Capture Note</li>
      <li>Go to the "Settings" menu</li>
      <li>Select "Activate License"</li>
      <li>Enter the license key <strong>[KEY]</strong></li>
      <li>Click "Activate"</li>
    </ol>
    <p>Your license is now activated and you can enjoy all the features of Capture Note.</p>
    <p>If you have any problems activating your license, please contact our support team at <a href="mailto:support@capturenote.com">support@capturenote.com</a> and we'll be happy to assist you.</p>
    <p>Thank you for choosing Capture Note. We hope you enjoy using it!</p>
    <p>Best,</p>
    <p>The Capture Note Team</p>
  </body>
</html>
`;

const transporter = nodemailer.createTransport({
  service: "daum",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const mailOption = {
    from: `${"contact@enfpdev.com"}`,
    to: `${"enfpdev@gmail.com"}`,
    subject: `New mail`,
    html: licenseKeyEmailHTML,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail send");
    }
  });
  res.status(200).json({ message: "Hello from Next.js!" });
}
