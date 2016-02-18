document.addEventListener('load', imageAutoSwipe());


function imageAutoSwipe() {
  var imageFolder = 'https://api.github.com/repos/jfarmer91/test-bs-two/contents/gallery/';

  var xhttp = new XMLHttpRequest();
  // Send XMLHttpRequest
  xhttp.open("GET", imageFolder, true);
  xhttp.send();

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(xhttp);
      var imageObject = JSON.parse(xhttp.responseText);
      console.log(imageObject);

      var carouselIndicators = '';

      var carouselInner = '';

      for ( i = 0; i < imageObject.length; i++ ) {
        carouselIndicators += "<li data-target='#myCarousel' data-slide-to='" + i + "' class='active'></li>";

        carouselInner += "<div class='item active'><img src='gallery/" + imageObject[i].name + "' alt='site-image' width='460' height='345'></div>"
      }

      document.getElementById('fb-js-carousel-indicators').innerHTML = carouselIndicators;

      document.getElementById('fb-js-carousel-inner').innerHTML = carouselInner;

      document.getElementById('myCarousel').style.display = 'block';
    }
  }



  var imgTag = document.getElementById('gallery-image-slide');

}
