<!-- Add Google Maps 
$('#popover').popover(); 
<!-- Footer -->
<footer class="text-center">
  <a class="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </a><br><br>
  <p>Greather Thomas-Nuba</p> 
</footer>

$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar-nav > li").on('click', function(event) {

    // Prevent default anchor click behavior
    //event.preventDefault();

    // Store hash
    var target = $(this).find("a>").prop("hash");

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash; 
    });
  });
})
