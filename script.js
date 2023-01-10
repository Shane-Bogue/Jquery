let clicked = "false";
const modal = document.getElementById("myModal");
const img = document.querySelectorAll("img");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

$('img').click(function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

$( function() {
    $( "#datepicker" ).datepicker();
  } );

$( function() {
    $( document ).tooltip();
  } );



//On click any <a> within the container
$('.🧭 .📍').click(function(e) {

    if (clicked == "false"){
        //Slide Burger Up
        $(e.target).css('top', function(){ return $(this).offset().bottom; })
        .animate({"top":"-100px"},  100, 'linear');

    setTimeout(
        function() {
            //Close all <div> but the <div> right after the clicked <div>
            $(e.target).next('p').siblings('p').slideUp();
            //Toggle open/close on the <div> after the <a>, opening it if not open.
            $(e.target).next('p').slideToggle();
        }, 200);
        clicked = "true";
    }
    


});