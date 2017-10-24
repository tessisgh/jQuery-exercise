function init (){

$("#menu ul li:first").addClass("selected");

$("section article:nth-child(2)").addClass("middle");

$("#list-container .list-item:odd").addClass("highlighted");
}

$("list-container .list-item:last").css({"border": "1px solid #eee"});

$("#form-container input").focus(function(){
  $(this).css({"borderColor":"red"});
});

$("#form-container input").blur(function(){
  $(this).css({"borderColor": ""});
});

$(document).ready(function(){
  init();
});





//$(document).ready(function() {

//$("a").click(funcion(event){
  //event.preventDefault();
  //alert("Hi Jquery! I love you!");
//});

  //alert("DOM is Loaded");
//});-->//Para que la web se vaya cargando en paralelo antes de que lo fuese si hiciese todo secuencial. Lo im
