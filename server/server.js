    
// Using express to simplify node.js routing and server creation
const express = require('express');

// Adding body-parser to simplify obtaining the body of POST HTTP requests
// To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
const bodyParser = require('body-parser');

// Used to allow for Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Import the emailer
const mailgun = require("mailgun-js");
const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.DOMAIN_NAME});

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

// Constants
const emailTemplate = `
To Marcus Quettan,

From: {{Name}} - {{Email}}

Message: {{Message}}
`

async function wrappedSendMail(mailOptions, emailType) {
    return new Promise((resolve, reject)=> {
        mg.messages().send(data, function (error, body) {
            if (error) {
                console.error(error);
                reject(Error("Failed to send " + emailType + " email to " + mailOptions.to));
            } else {
                resolve("Successfully sent " + emailType + " email to " + mailOptions.to);
            }
        });
    })
}

app.post('/email', async function (req, res) {
    let returnStatus = 200;
    let returnMessage = 'OK';
    
    var emailComplete = emailTemplate;
    emailComplete = emailComplete.replace("{{Name}}", req.body.name);
    emailComplete = emailComplete.replace("{{Email}}", req.body.email);
    emailComplete = emailComplete.replace("{{Message}}", req.body.message);

    var mailOptions = {
        from: process.env.EMAIL_NAME,
        to: "mquettan@gmail.com",
        subject: 'IMPORTANT: Customer Email from ' + req.body.name,
        text: emailComplete
    };

    await wrappedSendMail(mailOptions, "Contact Me")
    .then(function(info) {
        console.log(info);
    })
    .catch(function(err){
        console.error(err);
        returnStatus = 400;
        returnMessage = 'Bad Request: Invalid Email address - Email failed to send - Contact lwalker@qm3us.com to request that the server admin verifies that the server is properly sending emails.';
    });

    // 7. Return a successful response to the client
    return res.status(returnStatus).send(returnMessage);
});

// Respond with the specified file in ../src/assets/images
app.get('/images/:fileName', function (req, res) {
    // Send the file requested from the static location
    res.sendFile(path.resolve(__dirname + '/../') + '/src/assets/images/' + path.basename(req.params.fileName), function(err) {
      if(err) {
        console.error(err);
      }
    });
  
    // Server debug print
    console.log("Sent file: " + path.resolve(__dirname + '/../') + '/src/assets/images/' + path.basename(req.params.fileName));
  });

// Serve static assets if in productions
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('../build'));
    app.use('*', express.static('../build'));

    // If we hit any paths that aren't otherwise specified - serve the index.html built by react npm build
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
    });
}
