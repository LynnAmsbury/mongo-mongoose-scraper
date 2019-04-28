# mongo-mongoose-scraper

## Overview
This app scrapes and displays headlines from Westword.com. Users may also save and comment on those articles. All data is stored in a Mongo database.

## Tools Used
MongoDB, Mongoose, Cheerio, Express, Handlebars, jQuery, Bootstrap

## Getting Started
Navigate to the [homepage](https://mongo-mongoose-scraper.herokuapp.com/).

![News Scraper Main](public/assets/images/main.png)

Click **Scrape New Articles** button to retrieve the current Westword headlines.

![News Scraper Articles](public/assets/gifs/scrape-new-articles.gif)

Click **Clear Articles** to clear out articles.

![Clearing News Scraper Articles](public/assets)

Add comments. Validation is in place to prevent blank fields.

![Comment Validation](./images/validation.png)

![Comment Added](./images/commented.png)

Delete comments upon confirmation.

![Confirm Comment Delete](./images/confirm-delete.png)

Additionally, articles can be added to and removed from the favorites section.