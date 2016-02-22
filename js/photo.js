document.addEventListener('load', imageAutoSwipe());

function imageAutoSwipe() {
  var numberPhotos = 18;

  var carouselIndicators = "";

  var carouselInner = "";

  for ( i = 2; i < 18; i++ ) {
    carouselIndicators += "<li data-target='#myCarousel' data-slide-to='" + i + "'></li>";

    carouselInner += "<div class='item'><img src='gallery/" + [i] + "-compressor.jpg' alt='site-image' width='100%'></div>"
  }

  document.getElementById('fb-js-carousel-indicators').innerHTML += carouselIndicators;

  document.getElementById('fb-js-carousel-inner').innerHTML += carouselInner;
}
