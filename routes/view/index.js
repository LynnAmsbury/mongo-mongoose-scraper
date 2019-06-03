// Require in dependencies
var router = require("express").Router();
var db = require("../../models");

// This route renders the homepage
router.get("/", function(req, res) {
  console.log("GETTING");

  res.render("home", 
    {thing: "WHAT"},
    function(err, html) {
      res.send(html); //blank page
      // res.send("hiya"); //works if we didn't already send something
    });
});

router.get("/news/*", function(req, res) {

  let news_url = 'https://www.westword.com/news/' + req.params[0];
  res.send("<meta http-equiv=\"refresh\" content=\"0; URL='"+news_url+"'\" />");

});

// This route renders the saved handlebars page
router.get("/saved", function(req, res) {
  console.log(req);
  db.Headline.find({ saved: true })
    .sort({ date: -1 })
    .then(function(dbArticles) {
      console.log(dbArticles);
      res.render("saved", { articles: dbArticles, headline:req.headline });
    });
});

module.exports = router;