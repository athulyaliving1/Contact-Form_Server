var createError = require("http-errors");
var https = require("https");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const router = express.Router();
const cors = require("cors");
const request = require("request");

const nodemailer = require("nodemailer");
require("dotenv").config();

// var contactRouter = require("./routes/contact");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// app.use(
//   cors({
//     origin: "http://162.241.222.86:5000",
//     credentials: true,
//   })
// );

// const validationMiddleware = (req, res, next) => {
//   const schema = Joi.object()
//     .keys({
//       name: Joi.string().required(),
//       email: Joi.string().required(),
//       number: Joi.string().required(),
//       textarea: Joi.number().required(),
//     })
//     .unknown(false);
//   const { error } = schema.validate(req.body, { abortEarly: false });
//   if (error) {
//     res.status(200).json({ error: error });
//   } else {
//     next();
//   }
// };

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use("/", router);
app.use("/contact", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const textarea = req.body.textarea;
  const number = req.body.number;

  var maillist = [
    "g.sathish@athulyaliving.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com",
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "Chennai Submission",
    html: ` 
   <p> Hello Athulyaliving team,</p>
    <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${textarea}</p>
           <p>number: ${number}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.use("/contactrehabphysiobangalore", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const textarea = req.body.textarea;
  const number = req.body.number;

  var maillist = [
    "response@athulyahomecare.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com",
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "  Rehab & Physio care  Bangalore Submission",
    html: `<p> You have got a new message from the contact form on your website - Rehab & Physio care  Bangalore:,</p>
    <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${textarea}</p>
           <p>number: ${number}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
app.use("/contactdementiacarechennai", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const textarea = req.body.textarea;
  const number = req.body.number;

  var maillist = [
    "enquiry@athulyaliving.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com",
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "Dementia care Chennai Submission",
    html: ` 
   <p> You have got a new message from the contact form on your website - Dementia care Chennai:</p>
    <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${textarea}</p>
           <p>number: ${number}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
app.use("/contactdementiacarebangalore", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const textarea = req.body.textarea;
  const number = req.body.number;

  var maillist = [
    "enquiryblr@athulyaliving.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com",
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "Dementia care Bangalore Submission",
    html: ` 
   <p> You have got a new message from the contact form on your website - Dementia care Bangalore:</p>
    <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${textarea}</p>
           <p>number: ${number}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.use("/contactdementiacarehyderabad", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const textarea = req.body.textarea;
  const number = req.body.number;

  var maillist = [
    "enquiry@athulyaliving.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com",
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "Dementia care Hyderabad Submission",
    html: ` 
   <p> You have got a new message from the contact form on your website - Dementia care Hyderabad:</p>
    <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${textarea}</p>
           <p>number: ${number}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.use("/contactdementiacarecochin", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const textarea = req.body.textarea;
  const number = req.body.number;

  var maillist = [
    "enquiry@athulyaliving.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com",
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "Dementia care Cochin Submission",
    html: ` 
   <p> You have got a new message from the contact form on your website - Dementia care Cochin:</p>
    <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${textarea}</p>
           <p>number: ${number}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
app.use("/contactdementiacarecoimbatore", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const textarea = req.body.textarea;
  const number = req.body.number;

  var maillist = [
    "enquiry@athulyaliving.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com",
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "Dementia care Coimbatore  Submission",
    html: ` 
   <p> You have got a new message from the contact form on your website - Dementia care Coimbatore :</p>
    <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${textarea}</p>
           <p>number: ${number}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.use("/contactdoctoroncallbangalore", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const textarea = req.body.textarea;
  const number = req.body.number;

  var maillist = [
    "response@athulyahomecare.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com",
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "Doctor-on-call Bangalore Submission",
    html: ` 
   <p> You have got a new message from the contact form on your website - Doctor-on-call Bangalore:</p>
    <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${textarea}</p>
           <p>number: ${number}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.use("/contactdoctoroncallhydrabad", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const textarea = req.body.textarea;
  const number = req.body.number;

  var maillist = [
    "response@athulyahomecare.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com",
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "Doctor-on-call Hydrabad Submission",
    html: ` 
   <p> You have got a new message from the contact form on your website - Doctor-on-call Hydrabad:</p>
    <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${textarea}</p>
           <p>number: ${number}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.use("/contactdoctoroncallcochin", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const textarea = req.body.textarea;
  const number = req.body.number;

  var maillist = [
    "response@athulyahomecare.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com",
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "Doctor-on-call Cochin Submission",
    html: ` 
   <p> You have got a new message from the contact form on your website - Doctor-on-call Cochin :</p>
    <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${textarea}</p>
           <p>number: ${number}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.use("/contactdoctoroncallcoimbatore", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const textarea = req.body.textarea;
  const number = req.body.number;

  var maillist = [
    "response@athulyahomecare.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com",
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "Doctor-on-call Coimbatore Submission",
    html: ` 
   <p> You have got a new message from the contact form on your website - Doctor-on-call Coimbatore  :</p>
    <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${textarea}</p>
           <p>number: ${number}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.use("/contactmedicaleqbangalore", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const textarea = req.body.textarea;
  const number = req.body.number;

  var maillist = [
    "enquiryblr@athulyaliving.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com",
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "Medical Equipment Bangalore Submission",
    html: ` 
   <p> You have got a new message from the contact form on your website - Medical Equipment Bangalore Submission" :</p>
    <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${textarea}</p>
           <p>number: ${number}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
app.use("/contactmedicaleqchennai", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const textarea = req.body.textarea;
  const number = req.body.number;

  var maillist = [
    "response@athulyahomecare.com",
    "muthukumar@athulyaliving.com",
    "bahison@athulyaliving.com",
  ];

  const mail = {
    from: `${name}`,
    to: maillist,
    subject: "Medical Equipment Chennai Submission",
    html: ` 
   <p> You have got a new message from the contact form on your website - Medical Equipment Chennai Submission" :</p>
    <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${textarea}</p>
           <p>number: ${number}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const contactEmail = nodemailer.createTransport({
  host: "mail.athulyahomecare.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "noreply@athulyaseniorcare.com", // generated ethereal user
    pass: "Athulya@123", // generated ethereal password
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

request.get(
  "https://162.241.222.86:5000/contact",
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  }
);

console.log("Server Running");

console.log(process.env.Port);

module.exports = app;
