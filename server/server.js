    
// Using express to simplify node.js routing and server creation
const express = require('express');

// Adding body-parser to simplify obtaining the body of POST HTTP requests
// To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
const bodyParser = require('body-parser');

// Used to allow for Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
const cors = require('cors');
const fs = require('fs');

// Import the emailer
const nodemailer = require('nodemailer');

// Unique ID Generator
const uniqid = require('uniqid');

// Define configuration variables
const PORT = process.env.PORT || 4000;
const app = express();

// Apply all middlewares to our server
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Begin listening on our chosen PORT for our server.
app.listen(PORT, function() {
    console.log('Server is running on Port: ', PORT);
});

// app.post('/requestStaff', async function (req, res) {
//     let returnStatus = 200;
//     let returnMessage = 'OK';
//     const uniqueID = uniqid();
//     var requestStaffEmailComplete = requestStaffEmailTemplate;
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{FirstName}}", req.body.firstName);
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{LastName}}", req.body.lastName);
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{Title}}", req.body.title);
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{Email}}", req.body.email);
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{PhoneNumber}}", req.body.phone);
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{ContactMethod}}", req.body.contactMethod);
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{CompanyName}}", req.body.companyName);
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{City}}", req.body.city);
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{State}}", req.body.state);
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{ZipCode}}", req.body.zip);
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{Skills}}", req.body.skillTypes.join(",  "));
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{HireTypes}}", req.body.hireTypes.join(",  "));
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{Details}}", req.body.details);
//     requestStaffEmailComplete = requestStaffEmailComplete.replace("{{RequestID}}", uniqueID);
//     console.log(requestStaffEmailComplete);

//     var confirmationEmailComplete = genericConfirmationEmailTemplate;
//     confirmationEmailComplete = confirmationEmailComplete.replace("{{FirstName}}", req.body.firstName);
//     confirmationEmailComplete = confirmationEmailComplete.replace("{{RequestType}}", "request for staff");
//     confirmationEmailComplete = confirmationEmailComplete.replace("{{RequestID}}", uniqueID);
//     console.log(confirmationEmailComplete);

//     var mailOptions = {
//         from: process.env.EMAIL_NAME,
//         to: process.env.EMAIL_NAME,
//         bcc: "",
//         subject: 'IMPORTANT: Automated Staff Request from ' + req.body.firstName.value + ' ' + req.body.lastName.value,
//         text: requestStaffEmailComplete
//     };

//     await wrappedSendMail(mailOptions, "Staff Request")
//     .then(function(info) {
//         console.log(info);
//     })
//     .catch(function(err){
//         console.error(err);
//         returnStatus = 400;
//         returnMessage = 'Bad Request: Invalid Email address - Email failed to send - Contact lwalker@qm3us.com to request that the server admin verifies that the server is properly sending emails.';
//     });
    
//     let date = new Date();
//     let htmlString = fs.readFileSync("confirmationTemplate.html", 'utf8');
//     htmlString = htmlString.replace("{{CURRENT_YEAR}}", date.getFullYear());
//     htmlString = htmlString.replace("{{EMAIL_TEXT}}", confirmationEmailComplete);

//     mailOptions = {
//         from: process.env.EMAIL_NAME,
//         to: req.body.email,
//         subject: 'QM3 Solutions: Confirmation Email',
//         html: htmlString
//     };

//     await wrappedSendMail(mailOptions, "Staff Request Confirmation")
//     .then(function(info){
//         console.log(info);
//     })
//     .catch(function(err) {
//         console.error(err);
//         returnStatus = 400;
//         returnMessage = 'Bad Request: Invalid Email address - Email failed to send - Contact lwalker@qm3us.com to request that the server admin verifies that the server is properly sending emails.';
//     });

//     // 7. Return a successful response to the client
//     return res.status(returnStatus).send(returnMessage);
// });

// Serve static assets if in productions
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('../build'));
    app.use('*', express.static('../build'));

    // If we hit any paths that aren't otherwise specified - serve the index.html built by react npm build
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
    });
}