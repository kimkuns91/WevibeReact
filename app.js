const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const { connectToDatabase } = require('./src/mongo');

const app = express();

const PORT = 8080 

// app.use((req, res, next) => {
//   if (req.secure) {
//     next();
//   } else {
//     const httpsHost = req.headers.host.replace(/:\d+$/, "");
//     console.log(httpsHost);
//     const httpsUrl = `https://${httpsHost}${req.url}`;
//     console.log(httpsUrl);
//     res.redirect(301, httpsUrl);
//   }
// });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mainRouter = require('./src/routes/index')

app.use(express.static(path.join(__dirname, '/build')));

app.use('/api', mainRouter)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
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
});

app.enable("trust proxy");
app.use(function (req, res, next) {
  if (!req.secure) {
    res.redirect("https://" + req.headers.host + req.url);
  } else {
    next();
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening at ${PORT}`);
    }) 
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  });


module.exports = app;
