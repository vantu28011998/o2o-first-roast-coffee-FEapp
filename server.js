require("dotenv").config();
var express = require("express");
var app = express();
var history = require("connect-history-api-fallback");

// Synchronize vuejs history mode
app.use(
  history({
    // Enable logging
    verbose: true
  })
);

// Serve all the files in the '/dist' directory
app.use(express.static("dist"));

app.listen(process.env.PORT, "0.0.0.0", function() {
  console.log("My super vue app is listening on port 8080");
});