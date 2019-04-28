
$(document).ready(function() {
    // Sets a reference to the article-container div where all the dynamic content will go
    // Adds event listeners to any dynamically generated "save article"
    // and "scrape new article" buttons
    var articleContainer = $(".article-container");
    $(document).on("click", ".btn.save", handleArticleSave);
    $(document).on("click", ".scrape-new", handleArticleScrape);
    $(".clear").on("click", handleArticleClear);
  
    function initPage() {
      // Runs an AJAX request for any unsaved headlines
      $.get("/api/headlines?saved=false").then(function(data) {
        articleContainer.empty();
        // Renders headlines to the page if present
        if (data && data.length) {
          renderArticles(data);
        } else {
          // Otherwise, renders a message explaining we have no articles
          renderEmpty();
        }
      });
    }
  
    function renderArticles(articles) {
      // This function handles appending HTML containing our article data to the page
      // Passes an array of JSON containing all available articles in our database
      var articleCards = [];
      // Passes each article JSON object to the createCard function which returns a bootstrap
      // card with the article data inside
      for (var i = 0; i < articles.length; i++) {
        articleCards.push(createCard(articles[i]));
      }
      // Once all of the HTML for the articles is stored in our articleCards array,
      // appends them to the articleCards container
      articleContainer.append(articleCards);
    }
  
    function createCard(article) {
      // This function takes in a single JSON object for an article/headline
      // It constructs a jQuery element containing all of the formatted HTML for the
      // article card
      var card = $("<div class='card'>");
      var cardHeader = $("<div class='card-header'>").append(
        $("<h3>").append(
          $("<a class='article-link' target='_blank' rel='noopener noreferrer'>")
            .attr("href", article.url)
            .text(article.headline),
          $("<a class='btn btn-success save'>Save Article</a>")
        )
      );
  
      var cardBody = $("<div class='card-body'>").text(article.summary);
  
      card.append(cardHeader, cardBody);
      // Attaches the article's id to the jQuery element
      // Used when trying to figure out which article the user wants to save
      card.data("_id", article._id);
      // Returns the constructed card jQuery element
      return card;
    }
  
    function renderEmpty() {
      // This function renders some HTML to the page explaining that there aren't any articles to view
      // It uses a joined array of HTML string data because it's easier to read/change than a concatenated string
      var emptyAlert = $(
        [
          "<div class='alert alert-warning text-center'>",
          "<h4>No new articles at this time.</h4>",
          "</div>",
          "<div class='card'>",
          "<div class='card-header text-center'>",
          "<h3>What Would You Like To Do?</h3>",
          "</div>",
          "<div class='card-body text-center'>",
          "<h4><a class='scrape-new'>Try Scraping New Articles</a></h4>",
          "<h4><a href='/saved'>Go to Saved Articles</a></h4>",
          "</div>",
          "</div>"
        ].join("")
      );
      // Appends this data to the page
      articleContainer.append(emptyAlert);
    }
  
    function handleArticleSave() {
      // This function is triggered when the user wants to save an article
      // When we rendered the article initially, we attached a javascript object containing the headline id
      // to the element using the .data method. Here we retrieve that.
      var articleToSave = $(this)
        .parents(".card")
        .data();
      console.log(articleToSave);
      // Removes card from the page
      $(this)
        .parents(".card")
        .remove();
  
      articleToSave.saved = true;
      // Uses a patch method to be semantic because this is an update to an existing record in our collection
      $.ajax({
        method: "PUT",
        url: "/api/headlines/" + articleToSave._id,
        data: articleToSave
      }).then(function(data) {
        // If the data was saved successfully
        if (data.saved) {
          // Run the initPage function again. This will reload the entire list of articles
          initPage();
        }
      });
    }
  
    function handleArticleScrape() {
      console.log('Scraping...');
      // This function handles the user clicking any "scrape new article" buttons
      $.get("/api/fetch").then(function(data) {
        // Lets user know if Westword was successfully scraped and compares the articles to those
        // already in the collection, re-renders the articles on the page,
        // and lets the user know how many unique articles were saved
        initPage();
        bootbox.alert($("<h3 class='text-center m-top-80'>").text(data.message));
      });
    }
  
    function handleArticleClear() {
      $.get("api/clear").then(function() {
        articleContainer.empty();
        initPage();
      });
    }
  });
  