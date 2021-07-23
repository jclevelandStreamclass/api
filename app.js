require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const seriesRouter = require("./routes/series");
const episodesRouter = require("./routes/episodes");
const categoryRouter = require("./routes/category");
const sportsPlayerRouter = require("./routes/sportsPlayer");
const videoRouter = require('./routes/videos')
const tokenValidation = require("./middlewares/tokenValidation");
const errorHandler = require("./middlewares/errorHandler");

const loadModels = require("./models/relationship");

var app = express();
loadModels();

const cors = require("cors");
app.use(cors());

app.use(tokenValidation);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/series", seriesRouter);
app.use("/episodes", episodesRouter);
app.use("/sportsPlayer", sportsPlayerRouter);
app.use("/categories", categoryRouter);
app.use("/videos", videoRouter);

app.use(errorHandler);
module.exports = app;
