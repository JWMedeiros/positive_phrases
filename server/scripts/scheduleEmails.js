const sendEmail = require('../controllers/emailController');

const scheduleEmails = () => {
  // Schedule the email to be sent every minute
  setInterval(() => {
    sendEmail();
  }, 60000);
};

module.exports = scheduleEmails;
