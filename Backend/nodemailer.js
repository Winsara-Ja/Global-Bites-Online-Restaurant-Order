const nodemailer = require('nodemailer');

// Create a transporter using SMTP or other transport mechanisms
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', // Outlook SMTP server
  port: 587, // Outlook SMTP port
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'ridmachalanavip1@outlook.com', // Your Outlook email address
    pass: 'Ridma@2001' // Your Outlook email password
  }
});

// Function to send email
const sendEmail = async (recipientEmail, itemName, userRating) => {
  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: 'ridmachalanavip1@outlook.com', // Your Outlook email address
      to: recipientEmail,
      subject: 'New Rating for Item',
      text: `Thank you for rating for the item: ${itemName} ${userRating} stars.hope you enjoy our service.feel free to send your concerns for this e-mail`
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
