$( document ).ready(function() {
    function getPosition(id){
		var offset = $(id).offset();
		var height = $(id).height();
		var width = $(id).width();
		var top = offset.top + height + "px";
		var left = offset.left + width + "px";
		var pos = {'top':top, 'left':left};
		return pos;
	}
	$( window ).resize(function() {
	  positionBoxes();
	});
	positionBoxes();
	function positionBoxes(){
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
			'top': getPosition('#box2').top,
		});
		$('#box7').css( {
			'top': getPosition('#box5').top,
		});
		$('#box8').css( {
			'left': getPosition('#box3').left,
			'top': getPosition('#box4').top,
		});
		$('#box9').css( {
			'top': getPosition('#box7').top,
		});
		$('#box10').css( {
			'left': getPosition('#box9').left,
			'top': getPosition('#box3').top,
		});
	}
	
	 $.imageloader({
                    urls: [{'url':'http://nick-jonas.github.io/imageloader/images/0.jpg','id':1}, {'url':'http://nick-jonas.github.io/imageloader/images/1.jpg','id':2},
						  {'url':'http://nick-jonas.github.io/imageloader/images/3.jpg','id':3},{'url':'http://nick-jonas.github.io/imageloader/images/4.jpg','id':4},
						  {'url':'http://nick-jonas.github.io/imageloader/images/5.jpg','id':5},{'url':'http://nick-jonas.github.io/imageloader/images/6.jpg','id':6},
						  {'url':'http://nick-jonas.github.io/imageloader/images/7.jpg','id':7},{'url':'http://nick-jonas.github.io/imageloader/images/8.jpg','id':8},
						  {'url':'http://nick-jonas.github.io/imageloader/images/9.jpg','id':9},{'url':'http://nick-jonas.github.io/imageloader/images/10.jpg','id':10},
						  {'url':'http://nick-jonas.github.io/imageloader/images/11.jpg','id':1},{'url':'http://nick-jonas.github.io/imageloader/images/12.jpg','id':2}],

                    smoothing: true,

                    onComplete: function(){
                        $('#complete-icon').animate({opacity:1}, 600);
                    },

                    onUpdate: function(ratio, image, id, imgRepeat){
                        if(image){
							var imgExist = false;
							var id = "#box"+id+" div";
							$(id).append('<img style="width: 100%;height: 100%;opacity: 0;position: absolute; left: 0px;" src="' + image + '"/>');
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
});