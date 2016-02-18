document.addEventListener('load', imageAutoSwipe());

function imageAutoSwipe() {
  var xhttp = new XMLHttpRequest();
  // Send XMLHttpRequest
  xhttp.open("GET", 'https://api.github.com/repos/jfarmer91/test-bs-two/contents/gallery/', true);
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

        carouselInner += "<div class='item active'><img src='" + imageObject[i].name + "' alt='site-image' width='460' height='345'></div>"
      }
    }
  }



  var imgTag = document.getElementById('gallery-image-slide');

}
