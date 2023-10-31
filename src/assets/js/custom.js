//****************
//*************** Preloader
import $ from 'jquery'
// import './jquery.js'
import jQuery from 'jquery';
// import swal from 'sweetalert2';
import feather from 'feather-icons'
import WOW from 'wowjs'
//Get the button
// let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 20 ||
//     document.documentElement.scrollTop > 20
//   ) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

// function backToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
	
  });	
  
//   $('.responsive').slick({
// 	dots: true,
// 	infinite: false,
// 	speed: 300,
// 	slidesToShow: 3,
// 	slidesToScroll: 3,
// 	responsive: [
// 	{
// 		breakpoint: 1024,
// 		settings: 
// 		{
// 			slidesToShow: 3,
// 			slidesToScroll: 3,
// 			infinite: true,
// 			dots: true
// 		}
// 	},
// 	{
// 		breakpoint: 900,
// 		settings: {
// 			slidesToShow: 2,
// 			slidesToScroll:2
// 		}
// 	},
// 	{
// 		breakpoint: 767,
// 		settings: {
// 		slidesToShow: 1,
// 		slidesToScroll:1
// 		}
// 	},
// 	{
// 		breakpoint: 600,
// 		settings: {
// 			slidesToShow: 1,
// 			slidesToScroll:1
// 		}
// 	},
// 	{
// 		breakpoint: 480,
// 		settings: {
// 		slidesToShow: 1,
// 		slidesToScroll: 1
// 		}
// 	}
// 	]
//   });	

//****************
// **************Range slider

( function( $ ) {
	// Variables
	const $rangeSlider = $( '#range-sliders .range-slider' );
	const $inputSlider = $( '#range-sliders .input-slider' );

	// Bg Init
	const bgInit = ( $this, val = 0, min = 0, max = 255, color = '#f00' ) => {
		// Background Change
		const valBg = ( val - min ) / ( max - min ) * 100;
		$this.css( 'background', `linear-gradient(to right, ${ color } 0%, ${ color } ${ valBg }%, #fff ${ valBg }%, white 100%)` );
	};

	// Pre Init
	const preInit = () => {
		const rangeSliders = [ 'range-slider-red', 'range-slider-green', 'range-slider-blue' ];
		rangeSliders.forEach( function( key ) {
			// Background Change
			const $this = $( `#${ key }` );
			const val = Number( $this.val() );
			const min = Number( $this.attr( 'min' ) );
			const max = Number( $this.attr( 'max' ) );
			const color = $this.data( 'color' );
			bgInit( $this, val, min, max, color );
		} );
	};

	// Toggle Class
	const init = () => {
		// Slider Range Change or Input
		$rangeSlider.off( 'change input' ).on( 'change input', function( e ) {
			// Prevent Default
			e.preventDefault();
			e.stopPropagation();

			// Background Change
			const $this = $( this );
			const val = Number( $this.val() );
			const min = Number( $this.attr( 'min' ) );
			const max = Number( $this.attr( 'max' ) );
			const color = $this.data( 'color' );
			bgInit( $this, val, min, max, color );

			// Assign value to slider input
			$this.next().val( $( this ).val() );
		} );

		// Input Slider Input
		$inputSlider.off( 'input' ).on( 'input', function( e ) {
			// Prevent Default
			e.preventDefault();
			e.stopPropagation();

			// Background Change
			const $thisInput = $( this );
			let val = Number( $thisInput.val() );
			const min = Number( $thisInput.attr( 'min' ) );
			const max = Number( $thisInput.attr( 'max' ) );
			//const color = $this.data( 'color' );

			// Max Validation
			if ( val > max ) {
				val = max;
				$thisInput.val( val );
			}

			// Min Validation
			if ( val < min ) {
				val = min;
				$thisInput.val( val );
			}

			// Background Change
			const $this = $thisInput.prev();
			const color = $this.data( 'color' );
			bgInit( $this, val, min, max, color );

			// Assign value to slider range.
			$this.val( val );
		} );
	};

	// Document Ready
	$( function() {
		preInit();
		init();
	} );
}( jQuery ) );



//****************
//*************** Select box

	
	$(".selectBox").on("click", function(e) {
  $(this).toggleClass("show");
  var dropdownItem = e.target;
  var container = $(this).find(".selectBox__value");
  container.text(dropdownItem.text);
  $(dropdownItem)
    .addClass("active")
    .siblings()
    .removeClass("active");
});





//****************
//*************** Step wizard

// ------------step-wizard-------------
// $('#smartwizard').smartWizard();






//****************
//*************** Date picker

$(function () {
  $(".datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  })
.datepicker('update', new Date());

});



//****************
//*************** Sweet alert

// document.getElementById('b2').onclick = function(){
// 	swal("", "OTP Has been sent to your registered Mobile/Email,please check and enter")
// };

// document.getElementById('b3').onclick = function(){
// 	swal("Great!", "OTP verified Successfully!", "success");
// };



//****************
//*************** File upload

// function readURL(input) {
//   if (input.files && input.files[0]) {

//     var reader = new FileReader();

//     reader.onload = function(e) {
//       $('.image-upload-wrap').hide();

//       $('.file-upload-image').attr('src', e.target.result);
//       $('.file-upload-content').show();

//       $('.image-title').html(input.files[0].name);
//     };

//     reader.readAsDataURL(input.files[0]);

//   } else {
//     removeUpload();
//   }
// }

// function removeUpload() {
//   $('.file-upload-input').replaceWith($('.file-upload-input').clone());
//   $('.file-upload-content').hide();
//   $('.image-upload-wrap').show();
// }
// $('.image-upload-wrap').bind('dragover', function () {
// 		$('.image-upload-wrap').addClass('image-dropping');
// 	});
// 	$('.image-upload-wrap').bind('dragleave', function () {
// 		$('.image-upload-wrap').removeClass('image-dropping');
// });










//****************
//*************** wow

	new WOW().init();
	$(document).ready(function(){
		// $('.responsive').slick({
		// 	dots: true,
		// 	infinite: false,
		// 	speed: 300,
		// 	slidesToShow: 3,
		// 	slidesToScroll: 3,
		// 	responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 		slidesToShow: 3,
		// 		slidesToScroll: 3,
		// 		infinite: true,
		// 		dots: true
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 600,
		// 		settings: {
		// 		slidesToShow: 2,
		// 		slidesToScroll: 2
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings: {
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1
		// 		}
		// 	}
		// 	]
		// });
	});

	feather.replace()


	// document.addEventListener("DOMContentLoaded", function(){
		
	// 	window.addEventListener('scroll', function() {
	// 		if (window.scrollY > 200) {
	// 			document.getElementById('navbar_top').classList.add('fixed-top');
	// 	   document.getElementById('DM_banner_wrap').classList.add('dm_active');
	// 			// add padding top to show content behind navbar
	// 			navbar_height = document.querySelector('.navbar').offsetHeight;
	// 			document.body.style.paddingTop = navbar_height + 'px';	 
	// 		} else {
	// 			 document.getElementById('navbar_top').classList.remove('fixed-top');
	// 	   document.getElementById('DM_banner_wrap').classList.add('dm_active');
	// 			 // remove padding top from body
	// 			document.body.style.paddingTop = '0';
	// 		} 
	// 	});
	// }); 
	// DOMContentLoaded  end

	
