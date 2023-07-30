const { User } = require('../models');
const nodemailer = require('nodemailer');
require('dotenv').config();

const messages = [
  'You’re braver than you believe, and stronger than you seem, and smarter than you think.',
  'Optimism is a happiness magnet. If you stay positive good things and good people will be drawn to you.',
  'Keep your face to the sunshine and you cannot see a shadow.',
  'The more you praise and celebrate your life, the more there is in life to celebrate.',
  'A truly happy person is one who can enjoy the scenery while on a detour.',
  'Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.',
  'Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude.',
  'You are never too old to set another goal or dream a new dream.',
  'The difference between ordinary and extraordinary is that little extra.',
  'No one is perfect – that’s why pencils have erasers.',
];

//Uses Yahoo Service as of right now
const sendEmail = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'yahoo',
      auth: {
        user: process.env.EMAIL_USERNAME,
        //One Time password
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const users = await User.findAll();

    for (const user of users) {
      console.log(user.username);
      console.log(user.email);
      console.log(user.messageIndex);
      if (user.messageIndex >= messages.length) {
        // If the user has received all 10 messages, skip sending further emails
        continue;
      }

      const randomMessage = messages[user.messageIndex];
      user.messageIndex += 1;
      await user.save();

      const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: user.email,
        subject: 'A Positive Thought',
        text: randomMessage,
      };

      // Add this line to enable debugging
      // transporter.on('debug', (info) => {
      //   console.log('Nodemailer debug info:', info);
      // });

      // Retry the email sending up to 3 times
      let attempts = 0;
      while (attempts < 3) {
        try {
          // Send the email
          const info = await transporter.sendMail(mailOptions);
          console.log('Email sent:', info.response);
          break; // If the email sending succeeds, exit the retry loop
        } catch (error) {
          console.error('Error sending email:', error);
          attempts++;
        }
      }
    }
  } catch (error) {
    console.error('Error sending emails:', error);
  }
};

module.exports = sendEmail;
