var router = require("express").Router();
var db = require("../../models");

// This route renders the homepage
router.get("/", function(req, res) {
  console.log("GETTING");

  res.render("home", 
    {body: "WHAT"},
    function(err, html) {
      console.log("HERE I AM");
      console.log(err);
      console.log("page: " + html);
      res.send(html); //blank page
      // res.send("hiya"); //works if we didn't already send something
    });
    
  /*
  db.Headline.find({ saved: false })
    .sort({ date: -1 })
    .then(function(dbArticles) {
      console.log("ARTICLES: " + dbArticles);
      //res.render("home", { articles: dbArticles });
      //res.render("home", {title:"HI", body:"what?"});
      res.render("home");
    });
    */
});

// This route renders the saved handlebars page
router.get("/saved", function(req, res) {
  /*
  db.Headline.find({ saved: true })
    .sort({ date: -1 })
    .then(function(dbArticles) {
      res.render("saved", { articles: dbArticles });
    });
    */
});

module.exports = router;