var path = require("path");

module.exports = function (app) {
// Basic route that sends the user survey page, or if anything other than that, to the home page
app.get("/survey.html", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.use( function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});
}