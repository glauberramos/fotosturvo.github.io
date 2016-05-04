$(function() {
  $("nav a").click(function(event) {
    event.preventDefault(event);
    var session = $(this).attr('href');
    var sessionPosition = $(session).offset().top;

    console.log(sessionPosition);

    $('body,html').animate({ scrollTop: sessionPosition }, 500, function() {
        window.location.hash = session;
    });
  });
});
