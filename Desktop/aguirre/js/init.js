$(document).ready(function(){
	$('.carousel').carousel()


	$('.travelairlineslidercontent').slick({
	  centerMode: true,
	  centerPadding: '100px',
	  slidesToShow: 3,
	  autoplay: true,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	    $(function() {

        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 390,
        });

        $('.material-card').materialCard();

        $('.material-card').on('shown.material-card hidden.material-card', function (event) {
            $grid.masonry();
        });

    });

    var sidebar = new StickySidebar('#sidebar', {
        containerSelector: '#main-content',
        innerWrapperSelector: '.sidebar__inner',
        topSpacing: 20,
        bottomSpacing: 20
    });
    
});
