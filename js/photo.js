document.addEventListener('load', imageAutoSwipe());

function imageAutoSwipe() {
  var xhttp = new XMLHttpRequest();
  // Send XMLHttpRequest
  xhttp.open("GET", 'gallery', true);
  xhttp.send();

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(xhttp);
      console.log(xhttp.responseText);
      // var x = JSON.parse(xhttp.responseText);
      // console.log(x);
    }
  }



  var imgTag = document.getElementById('gallery-image-slide');

}
