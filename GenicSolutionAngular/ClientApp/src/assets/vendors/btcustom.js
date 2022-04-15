$(document).ready(function(){
    $('ul.kt-menu__subnav li').on('click', function(){
        $(this).addClass('kt-menu__item--open').siblings().removeClass('kt-menu__item--open');
    });
    $(document).ready(function(){
        $('.left_slide').click(function(){
            $(this).parent('.left-section').toggleClass('closeClass-left');
        });
    
        $('.right_slide').click(function(){
            $(this).parent('.right-section').toggleClass('closeClass-right');
        });
    })
    $('#dataTableService tfoot th:first').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search ' + title + '" />' );
    } );
 
     var table = $('#dataTableService').DataTable();
 
     // Apply the search
     table.columns().every( function () {
         var that = this;
  
         $( 'input', this.footer() ).on( 'keyup change clear', function () {
             if ( that.search() !== this.value ) {
                 that
                     .search( this.value )
                     .draw();
             }
         } );
     } );
     $(document).ready(function() {
        $("#owl-carousel").owlCarousel({
          navigation : true
        });
      });
    // $('#kt_aside_mobile_toggler').click(function(){
    //     $('#kt_aside').slideToggle();
    // });
});


