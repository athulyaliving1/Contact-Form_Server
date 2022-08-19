var express = require("express");
var router = express.Router();

router.post("/sendcontact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  var maillist = [
    "g.sathish@athulyaliving.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com"
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

module.exports = router;
