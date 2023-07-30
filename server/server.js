const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const scheduleEmails = require('./scripts/scheduleEmails');

const app = express();
const PORT = 5000;

//Allows reqs from any origin
app.use(cors());
app.use(bodyParser.json());

// Routes
const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  // Start scheduling emails
  scheduleEmails();
});
