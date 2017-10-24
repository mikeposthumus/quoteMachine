var forismatic = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
var curQuote= "";
var curAuth= "";

$.getJSON(forismatic, function (data) {
        $('.quote').html("<h2>" + data.quoteText +"</h2>");
        $('.author').html("<h4>-" + data.quoteAuthor +"</h4>")
      });

$("#newQuote").on("click", function (){
            $('.quote, .author').fadeTo("slow", 0.001, function (load) {
              var forismatic = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
              $.getJSON(forismatic, function (data) {
                curQuote=data.quoteText;
                curAuth=data.quoteAuthor;
                      $('.quote').fadeTo("slow", 1).html("<h2>" + data.quoteText +"</h2>");
                      $('.author').fadeTo("slow", 1).html("<h4>-" + data.quoteAuthor +"</h4>")
                    })
            });

            });

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
};

$("#tweetButton").on('click', function tweet () {
  window.location = 'https://twitter.com/intent/tweet?text=' + curQuote + ' -' + curAuth;


});
