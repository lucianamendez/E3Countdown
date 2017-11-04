
var countDownDate = new Date("Jun 16, 2018 20:00:00").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();

  
  var distance = countDownDate - now;

  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("conteo").innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

   
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("conteo").innerHTML = "EXPIRED";
  }
}, 1000);
