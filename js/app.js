var screenType, 
	SCR_TYPE = {'MOBILE':'mobile', 'TABLET':'tablet', 'DESKTOP':'desktop'},
	MOBILE_SCR_IDs = [1],
	MOBILE_SCR_FIT_IDs = [1,3,4,5,6,7],
	TABLET_SCR_IDs = [3,4,9],
	DESKTOP_SCR_IDs = [1,2,3,4,5,6,7,8,9];
$( document ).ready(function() {
	// Add the 9 boxs to DOM
	for(i=0;i<DESKTOP_SCR_IDs.length;i++){
		$('#boxContainer').append('<div id="box'+(i+1)+'" class="box"><div class="boxChild" ></div></div>');
	}	
	
	/**
	 * Return the object which contains the top and left position of element.
	 * @param {number} id The target element to get the position.
	 * @return {object} pos The result of after determined.  
	 */
    function getPosition(id){
		var offset = $(id).offset();
		var height = $(id).height();
		var width = $(id).width();
		var top = offset.top + height + "px";
		var left = offset.left + width + "px";
		var pos = {'top':top, 'left':left};
		return pos;
	}
	/**
	 * Recalculate the layout upon the resizing the browser
	 * @param <NA>
	 * @return <NA>
	 */
	$( window ).resize(function() {
	  calculateScreenSize();	  
	});
	
	/**
	 * Calcuate the screen size based on size of the browser and it's called upon browser resize.
	 * @param <NA>
	 * @return <NA>
	 */
	function calculateScreenSize(){
		// window width is less than 719px
		var mobileScreen = window.matchMedia('(max-width: 719px)');
		// window width is between 720px and 959px
		var tabletScreen = window.matchMedia('(min-width: 720px) and (max-width: 959px)');
		// window width is greater than 960px
		var desktopScreen = window.matchMedia('(min-width: 960px)');
		if(mobileScreen.matches) {
			positionBoxesMobileScreen();
		}else if(tabletScreen.matches){
			positionBoxesTabletScreen();
		}else if(desktopScreen.matches){
			positionBoxesDesktopScreen();
		}
	}
	
	/**
	 * First hide all images then hide and show the target image based on the input flag
	 * @param {element} e The target element to hide / show
	 * @param {Boolean} flag The flag to hide / show
	 * @return <NA>
	 */
	function boxHideShow(e, flag){
		// Hide all the images
		$(createTarget(DESKTOP_SCR_IDs)).css({'display': 'none'});		
		(flag)?$(e).css( {'display': 'block'}): $(e).css( {'display': 'none'});
	}
	
	/**
	 * Form the target Elements by using given element in array
	 * @param {array} arr The target element to form target strings
	 * @return <String> result The combined string format of target element's IDs
	 */
	function createTarget(arr){
		if(arr.length >0){
			var	result = "";
			for(i=0;i<arr.length;i++){				
				result += '#box'+arr[i];
				if(i != (arr.length-1))
					result += ',';
			}
		}
		return result;
	}
	
	/**
	 * Specify elements to hide for mobile screen
	 * @param <NA>
	 * @return <NA>
	 */
	function positionBoxesMobileScreen(){
		screenType = SCR_TYPE.MOBILE;		
		boxHideShow(createTarget(MOBILE_SCR_IDs), true);		
	}
	
	/**
	 * Position the elements for tablet screen
	 * @param <NA>
	 * @return <NA>
	 */
	function positionBoxesTabletScreen(){
		screenType = SCR_TYPE.TABLET;
		boxHideShow(createTarget(TABLET_SCR_IDs), true);
		$('#box3').css( {
			'left': '0px'
		});
		$('#box4').css( {
			'left': getPosition('#box3').left
		});
		$('#box9').css( {
			'top': getPosition('#box4').top,
			'left': '0px'
		});		
	}
	
	/**
	 * Position the elements for Desktop screen
	 * @param <NA>
	 * @return <NA>
	 */
	function positionBoxesDesktopScreen(){
		screenType = SCR_TYPE.DESKTOP;
		boxHideShow(createTarget(DESKTOP_SCR_IDs), true);
		$('#box2').css( {
		'left': getPosition('#box1').left
		});
		$('#box3').css( {
			'left': getPosition('#box2').left
		});
		$('#box4').css( {
			'left': getPosition('#box3').left
		});
		$('#box5').css( {
			'top': getPosition('#box1').top
		});
		$('#box6').css( {
			'left': getPosition('#box5').left,
			'top': getPosition('#box2').top
		});
		$('#box7').css( {
			'top': getPosition('#box5').top,
		});
		$('#box8').css( {
			'top': getPosition('#box7').top,
		});
		$('#box9').css( {
			'left': getPosition('#box8').left,
			'top': getPosition('#box3').top
		});
	}
	$.getJSON( "data/images.json", function( data ) {
	  $.imageloader({
                    urls: data.images,

					mobileImgIDs: MOBILE_SCR_IDs,

                    onComplete: function(){
                        $('#complete-icon').animate({opacity:1}, 600);
                    },

                    onUpdate: function(ratio, image, idVal, imgRepeat){
                        if(image){
							// Always load the image in 1st box for mobile screen
							idVal = (screenType === SCR_TYPE.MOBILE) ? 1 : idVal;
							var imgExist = false;
							var id = "#box"+idVal+" div";
							var width_Height = (screenType === SCR_TYPE.MOBILE) ? "width: 100%;height: 100%" : "width: 100%;height: 100%";
							$(id).append('<img id="img'+idVal+'" style="'+width_Height+';opacity: 0;position: absolute; left: 0px;" src="' + image + '"/>');
							$(id).each(function() {
								if ($(this).find('img').length === 2) {
									imgExist = true;
								}
							});
							if(imgExist){
								$(id+' > img').animate({opacity: 1}, 2000,function() {
									$(id+' > img').prev().remove();
								  });
								}else{										
									$(id+' > img').animate({opacity: 1}, 2000);
								}													
                        }
                    },
                    onError: function(err){
                        console.log(err);
                    }
                });
	})
	.fail(function( jqxhr, textStatus, error ) {
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err )
	});
	
	 	
	calculateScreenSize();
});
