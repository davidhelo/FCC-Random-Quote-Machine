$(document).ready(function () {
    const quotes = [
        {
            quote: "quote 2",
            author: "unwknown"
        },
        {
            quote: "this is a very different, cursi, lovely, stupidly large, quote to prove the machine",
            author: "Yo merengues"
        },
    ];
    
    const newQuoteClickHandler = () => {
        //generate a random number between 0 and quotes.length-1
        let index = Math.floor(Math.random() * quotes.length);
        
        //use this index for array quote
        //change #text and #author
        $("#text").text(quotes[index].quote);
        $("#author").text("- " + quotes[index].author);
    };
    
    $("#new-quote").click(newQuoteClickHandler);
  });
