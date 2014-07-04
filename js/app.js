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
			'top': getPosition('#box7').top,
		});
		$('#box9').css( {
			'left': getPosition('#box9').left,
			'top': getPosition('#box3').top,
		});
	}
	
	 $.imageloader({
                    urls: [{'url':'http://rajesh-babu.github.io/ImageLoader/images/img01_1.jpg','id':1}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img02_1.jpg','id':1},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img03_2.jpg','id':2}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img04_2.jpg','id':2},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img05_2.jpg','id':2}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img06_3.jpg','id':3},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img07_3.jpg','id':3}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img08_3.jpg','id':3},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img09_3.jpg','id':3}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img10_3.jpg','id':3},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img11_3.jpg','id':3}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img12_3.jpg','id':3},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img13_3.jpg','id':3}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img14_3.jpg','id':3},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img15_3.jpg','id':3}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img16_3.jpg','id':3},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img17_4.jpg','id':4}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img18_4.jpg','id':4},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img19_4.jpg','id':4}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img20_4.jpg','id':4},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img21_4.jpg','id':4}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img22_4.jpg','id':4},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img23_4.jpg','id':4}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img24_4.jpg','id':4},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img25_5.jpg','id':5}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img26_5.jpg','id':5},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img27_5.jpg','id':5}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img28_5.jpg','id':5},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img29_6.jpg','id':6}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img30_6.jpg','id':6},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img31_6.jpg','id':6}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img32_6.jpg','id':6},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img33_6.jpg','id':6}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img34_6.jpg','id':6},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img35_6.jpg','id':6}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img36_6.jpg','id':6},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img37_6.jpg','id':6}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img38_6.jpg','id':6},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img39_6.jpg','id':6}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img40_6.jpg','id':6},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img41_6.jpg','id':6}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img42_6.jpg','id':6},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img43_8.jpg','id':8}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img44_8.jpg','id':8},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img45_9.jpg','id':9}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img46_9.jpg','id':9},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img47_9.jpg','id':9}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img48_7.jpg','id':7},
							{'url':'http://rajesh-babu.github.io/ImageLoader/images/img49_7.jpg','id':7}, {'url':'http://rajesh-babu.github.io/ImageLoader/images/img50_7.jpg','id':7},
						  {'url':'http://rajesh-babu.github.io/ImageLoader/images/img51_7.jpg','id':7}],

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