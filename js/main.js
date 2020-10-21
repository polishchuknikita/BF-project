$(document).ready(function(){
	// input range 

	$('.chance-form__input-range').change( function () {
   		if($(this).val() < 1) {
   			$('.input-thumb img').css(['left', '1%']);
   		} else if ($(this).val() == 1) {
			$('.input-thumb img').css('left', '18%');
   		} else if ($(this).val() == 2) {
			$('.input-thumb img').css('left', '36%');
   		} else if ($(this).val() == 3) {
			$('.input-thumb img').css('left', '54%');
   		} else if ($(this).val() == 4) {
			$('.input-thumb img').css('left', '74%');
   		} else if ($(this).val() == 5) {
			$('.input-thumb img').css('left', '95%');
   		}
	});


	const positionInputHeart = (input, img) => {
		$(input).change( function () {
			let maxWidth = Number($(input).attr('max')),
				nowValue = Number($(input).val());
			let newposition = (((nowValue / maxWidth).toFixed(2)* 100) - 4).toFixed();
			$(img).css('left', `${newposition}%`);
		});

	}

	const howMuchNeedSpacesFoo = span => {
		let howMuchNeedSpaces = span.map((item, index) => {
			if(index == span.length-4 || index == span.length-7) {
				item += ' ';
			}
			return item;
		});
		return howMuchNeedSpaces;
	}

	$('.child-card-info__input').change( function () {
		let maxWidth = Number($('.child-card-info__input').attr('max')),
			nowValue = Number($('.child-card-info__input').val());
		let newposition = (((nowValue / maxWidth).toFixed(2)* 100) - 4).toFixed();
		$('.input-thumb-card img').css('left', `${newposition}%`);
		let howMuchNeed = Number($('.child-card-info__input').attr('max')) - Number($('.child-card-info__input').val());

		let howMuchNeedStr = String(howMuchNeed).split('').map(item => item);

		$('.child-card-info__how-much span').html(howMuchNeedSpacesFoo(howMuchNeedStr));

	});

	//Dynamic span value

	const dynamicAdminSpanValue = (adminValue, adminSpanFirst, adminSpanSecond, adminSpanThird, adminSpanForth, adminSpanFifth, span) => {
		if (adminValue.val() == 1) {
			span.html(adminSpanFirst.text());
		} else if (adminValue.val() == 2) {
			span.html(adminSpanSecond.text());
		} else if (adminValue.val() == 3) {
			span.html(adminSpanThird.text());
		} else if (adminValue.val() == 4) {
			span.html(adminSpanForth.text());
		} else if (adminValue.val() == 5) {
			span.html(adminSpanFifth.text());
		}
	}

	//Dynamic click span 

	const clickOnSpanValue = (first, second, third, fourth, fifth, input, img, spanSum, heartBg) => {
		first.click(()=> {
			input.val(1);
			img.css('left', '18%');
			spanSum.html(first.text());
			heartBg.css('background', 'url("img/heart-bg.png") no-repeat center bottom');
		});
		second.click(()=> {
			input.val(2);
			img.css('left', '36%');
			spanSum.html(second.text());
			heartBg.css('background', 'url("img/heart-bg3.png") no-repeat center bottom');
		});
		third.click(()=> {
			input.val(3);
			img.css('left', '54%');
			spanSum.html(third.text());
			heartBg.css('background', 'url("img/heart-bg3.png") no-repeat center bottom');
		});
		fourth.click(()=> {
			input.val(4);
			img.css('left', '74%');
			spanSum.html(fourth.text());
			heartBg.css('background', 'url("img/heart-bg3.png") no-repeat center bottom');
		});
		fifth.click(()=> {
			input.val(5);
			img.css('left', '95%');
			spanSum.html(fifth.text());
			heartBg.css('background', 'url("img/heart-bg4.png") no-repeat center bottom');	
		});
	}

	clickOnSpanValue(
		$('.chance-form_landing .chance-form__value_first'),
		$('.chance-form_landing .chance-form__value_second'),
		$('.chance-form_landing .chance-form__value_third'),
		$('.chance-form_landing .chance-form__value_fourth'),
		$('.chance-form_landing .chance-form__value_fifth'),
		$('.chance-form_landing .chance-form__input-range'),
		$('.chance-form__input-wrap .input-thumb img'),
		$('.chance-form_landing .chance-form__heart-sum'),
		$('.chance-form__heart img')
	)

	// Landing page 

	dynamicAdminSpanValue(
		$('.chance-form_landing .chance-form__input-range'),
		$('.chance-form_landing .chance-form__value_first'),
		$('.chance-form_landing .chance-form__value_second'),
		$('.chance-form_landing .chance-form__value_third'),
		$('.chance-form_landing .chance-form__value_fourth'),
		$('.chance-form_landing .chance-form__value_fifth'),
		$('.chance-form_landing .chance-form__heart-sum')
	);

	$('.chance-form_landing .chance-form__input-range').on('change', function(){
		dynamicAdminSpanValue(
			$('.chance-form_landing .chance-form__input-range'),
			$('.chance-form_landing .chance-form__value_first'),
			$('.chance-form_landing .chance-form__value_second'),
			$('.chance-form_landing .chance-form__value_third'),
			$('.chance-form_landing .chance-form__value_fourth'),
			$('.chance-form_landing .chance-form__value_fifth'),
			$('.chance-form_landing .chance-form__heart-sum')
		);
	if($('.chance-form__input-range').val() > 1 && $('.chance-form__input-range').val() <= 3 ) {
		$('.chance-form__heart img').css('transition', 'all .4s ease');
		$('.chance-form__heart img').css('background', 'url("img/heart-bg3.png") no-repeat center bottom');
	} else if ($('.chance-form__input-range').val() > 3) {
		$('.chance-form__heart img').css('transition', 'all .4s ease');
		$('.chance-form__heart img').css('background', 'url("img/heart-bg4.png") no-repeat center bottom');
	}
	});

	$('.chance-form_landing .chance-form__input').on('change', function(){
    	$('.chance-form_landing .chance-form__heart-sum').html($('.chance-form_landing .chance-form__input').val());
    	if($('.chance-form_landing .chance-form__input').val() > 0 && $('.chance-form_landing .chance-form__input').val() <= 1500) {
			$('.chance-form__heart img').css('transition', 'all .4s ease');
			$('.chance-form__heart img').css('background', 'url("img/heart-bg3.png") no-repeat center bottom');
    	} else if ($('.chance-form_landing .chance-form__input').val() > 1500) {
			$('.chance-form__heart img').css('transition', 'all .4s ease');
			$('.chance-form__heart img').css('background', 'url("img/heart-bg4.png") no-repeat center bottom');	
    	} else {
    		$('.chance-form__heart img').css('transition', 'all .4s ease');
			$('.chance-form__heart img').css('background', 'url("img/heart-bg.png") no-repeat center bottom');	
    	}
	});

	if($('.partners-list__item').length > 4) {
		$('.partners-list').slick({
		   slidesToShow: 4,
		   slidesToScroll: 1,
		   arrows: false,
		   dots: false,
		   infinite: true,
		   autoplay: true,
		   autoplaySpeed: 1000,
		   responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			      }
			    },
			    {
			      breakpoint: 575,
			      settings: {
			        slidesToShow: 1,
			      }
			    }
		  ]
		 });
		}


	//Donations page

	if($('.child-list_slider').length) {
		$('.child-list_slider').slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: '<button type="button" class="child-list-btn child-list-btn_prev"><i class="fas fa-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="child-list-btn child-list-btn_next"><i class="fas fa-arrow-right"></i></button>',
			responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 1,
			      }
			    }
		  ]
		});
	}

	// Get help page

	// let dynamicValue = document.querySelector('.help-needed-form__file-text span');

	$('.help-needed-form__file-input').on('change', function(){
		if (this.files.length == 1) {
			$('.help-needed-form__file-text span').html(
			`${this.files.length} файл`
		);} else if (this.files.length > 1 && this.files.length < 5) {
			$('.help-needed-form__file-text span').html(
			`${this.files.length} файла`
		);} else if(this.files.length == 0 || (this.files.length >= 5 && this.files.length <=10)) {
			$('.help-needed-form__file-text span').html(
			`${this.files.length} файлов`
		);}
    
	});

	//Child card page

	if($('.child-card-slider-for').length) {
		$('.child-card-slider-for').slick({
		   slidesToShow: 1,
		   slidesToScroll: 1,
		   arrows: false,
		   fade: true,
		   asNavFor: '.child-card-slider-nav'
		 });
		}

	if($('.child-card-slider-nav').length) {
		$('.child-card-slider-nav').slick({
		   slidesToShow: 3,
		   slidesToScroll: 1,
		   asNavFor: '.child-card-slider-for',
		   dots: false,
		   prevArrow: '<button type="button" class="child-card-slider-nav-btn child-card-slider-nav-btn_prev"><i class="fas fa-arrow-left"></i></button>',
		   nextArrow: '<button type="button" class="child-card-slider-nav-btn child-card-slider-nav-btn_next"><i class="fas fa-arrow-right"></i></button>',
		   focusOnSelect: true,
		   centerPadding: '0px',
		   centerMode: true,
		   responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        centerPadding: '10px'
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        centerPadding: '0px'
			      }
			    },
			    {
			      breakpoint: 575,
			      settings: {
			        centerPadding: '0px'
			      }
			    }
		  ]
		 });

		$('a[data-slide]').click(function(e) {
		   e.preventDefault();
		   var slideno = $(this).data('slide');
		   $('.child-card-slider-nav').slick('slickGoTo', slideno - 1);
		});
	}

	if($('.history-child-details__solo-img').length) {
		lightGallery(document.querySelector('.history-child-details__solo-img'));
	}

	if($('.history-child-details__docs-wrap-img').length) {
		lightGallery(document.querySelector('.history-child-details__docs-wrap-img'));
	}

	if($('.about-section-help__count').length) {
		$('.about-section-help__count').countTo({
			from: 0,
			to: 2770,
			speed: 3000,
			refreshInterval: 200
		});
	}

	const spaceSpanValue = () => {
		$('.about-section-help__count').html(`2 845`);
	}

	setTimeout(spaceSpanValue, 3200);

	let howMuchNedd =  String(Number($('.child-card-info__input').attr('max')) - Number($('.child-card-info__input').val()))
	.split('').map(item => item);
	$('.child-card-info__how-much span').html(howMuchNeedSpacesFoo(howMuchNedd));

	// Who help page 

	positionInputHeart('.card-list_who-help .card-list__input', '.input-thumb-who-help img');


	// About page
	if($('.principle-work__img-list').length) {
		lightGallery(document.querySelector('.principle-work__img-list'));
	}

	$('.chance-form__heart img').css('background', 'url("img/heart-bg.png") no-repeat center bottom');


	// Hamburger

	$('.hamburger').click(function(e) {
		$('.hamburger').toggleClass('active');
		$('.nav').toggleClass('active');
		$('.header .container').toggleClass('hamburger-wrap');
		e.preventDefault();
	})
	
});


	
