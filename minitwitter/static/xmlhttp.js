




function request(event) { // hier kann der request verarbeitet werden
  console.log(event);
  var text = document.getElementById("username");
  console.log(text.value);
  event.preventDefault();
}



document.addEventListener("DOMContentLoaded", function(event){
  document.getElementById("request").addEventListener("submit", request);
});
