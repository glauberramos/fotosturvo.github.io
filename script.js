$(function() {
  $("nav a").click(function(event) {
    event.preventDefault(event);
    var session = $(this).attr('href');
    var sessionPosition = $(session).offset().top - 30;

    console.log(sessionPosition);

    $('body,html').animate({ scrollTop: sessionPosition }, 500, function() {
        window.location.hash = session;
    });
  });

  $("div.lazy").lazyload({
    effect : "fadeIn"
  });
});
