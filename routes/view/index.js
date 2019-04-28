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

router.get("/news/*", function(req, res) {
  console.log(req.params[0]);
  console.log("HI");


  res.send("Requesting: " + req.params[0] );
});

// This route renders the saved handlebars page
router.get("/saved", function(req, res) {
  
  db.Headline.find({ saved: true })
    .sort({ date: -1 })
    .then(function(dbArticles) {
      res.render("saved", { articles: dbArticles });
    });
    

  //res.send("How do i do it?");
});

module.exports = router;