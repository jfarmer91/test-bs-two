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

      // var carouselIndicators = "<li data-target='#myCarousel' data-slide-to='0' class='active'></li>";
      var carouselIndicators = "";


      // var carouselInner = "<div class='item active'><img src='gallery/" + imageObject[0].name + "' alt='site-image' width='100%'></div>";
      var carouselInner = "";


      for ( i = 1; i < imageObject.length; i++ ) {
        carouselIndicators += "<li data-target='#myCarousel' data-slide-to='" + i + "'></li>";

        carouselInner += "<div class='item'><img src='gallery/" + imageObject[i].name + "' alt='site-image' width='100%'></div>"
      }

      document.getElementById('fb-js-carousel-indicators').innerHTML += carouselIndicators;

      document.getElementById('fb-js-carousel-inner').innerHTML += carouselInner;

      document.getElementById('myCarousel').style.display = 'block';
    }
  }



  var imgTag = document.getElementById('gallery-image-slide');

}
