// Require in dependencies
var axios = require('axios');
var cheerio = require('cheerio');

// 
module.exports = function() {
    return new Promise((resolve, reject) => {
        axios.get('https://www.westword.com/news')
            .then(function (response) {
                var $ = cheerio.load(response.data)
                var articles = []
                $('.headline').each(function(i, element) {
                    var url = $(this).attr('href')
                    var headline = $(this).text().trim()
                    if (url && headline) {
                        var newHeadline = {
                            headline: headline,
                            url: url
                        }
                        console.log(newHeadline);
                        articles.push(newHeadline);
                    }
                })
                return resolve(articles);
            })
            .catch(error => reject(error));
    })
}