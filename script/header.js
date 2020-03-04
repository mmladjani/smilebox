<script>
jQuery(function($){
    var $navbar = $('#main-nav');
    $(window).scroll(function(event) {
    var $current = $(this).scrollTop();
         if( $current > 100 ){
              $navbar.addClass('scrolled');
         } else {
              $navbar.removeClass('scrolled');
         }
    });
 });

 </script>
