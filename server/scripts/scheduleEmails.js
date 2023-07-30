const sendEmail = require('../controllers/emailController');

const scheduleEmails = async () => {
  try {
    await sendEmail();
  } catch (error) {
    console.error('Error scheduling and sending emails:', error);
  } finally {
    // Schedule the next round of emails after a delay of 1 minute
    setTimeout(scheduleEmails, 60000);
  }
};

module.exports = scheduleEmails;
