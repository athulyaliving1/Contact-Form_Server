var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const router = express.Router();
const cors = require("cors");
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
//     origin: "https://www.athulyahomecare.com/lp/doctor-on-call/enquiryform",
//     credentials: true,
//   })
// );
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
app.use("/contact", (req, res) => {
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
    html: `<p>Name: ${name}</p>
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
    user: "muthukumar@athulyaliving.com", // generated ethereal user
    pass: "seniorcare@123", // generated ethereal password
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

console.log("Server Running");

module.exports = app;
