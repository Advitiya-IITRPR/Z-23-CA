const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const firebase = require("./config/firebase");
const shortid = require("shortid");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require('./routes/profile')
//Routes
//const authRoutes = require("./routes/auth");

const admin = require("./config/admin");
const db = admin.firestore();
const verificaton = require("./routes/verification");

// app.use(verificaton());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// app.use("/verification", verificaton);
app.use('/profile',userRoutes)


app.listen(5000, function () {
  console.log(`Server started at 5000`);
});
