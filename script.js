var arrayTopPositions = []
var wscroll = 0
var wh = $(window).height()

function updateOffsets() {
  $('div.img').each(function() {
    var topPosition = $(this).offset().top
    arrayTopPositions.push(topPosition)
  })
}

function lazyLoad() {
  wscroll = $(window).scrollTop();

  for (i = 0; i < arrayTopPositions.length; i++) {
    if (arrayTopPositions[i] <= wscroll + (wh - 200)) {
      $('div.img').eq(i).addClass('loaded');
    }
  }
}

updateOffsets()
lazyLoad()

$(window).on('scroll', function() {
  lazyLoad()
})
