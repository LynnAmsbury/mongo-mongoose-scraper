// Require in database for fetching
var db = require('../models');

// Pull in scraping function
var scrape = require('../scripts/scrape');

module.exports = {
    scrapeHeadlines: function(req, res) {
        return scrape()
        .then(function(articles) {
            return db.Headline.create(articles)
                .then(articles => {
                    if (articles.length === 0) {
                        res.json({message: 'Nothing new today'})
                    } else {
                        res.json({message: articles.length + ' Articles found today!'})
                    }
                })
                .catch(error => console.log("something went wrong in inserting articles from scrape: ", error))
        })
        .catch(function(error) {
            res.status(500).json({ error })
        })
    }
};