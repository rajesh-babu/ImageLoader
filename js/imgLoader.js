/*****************************************************************************           
    * Image Loader -- To load images one by one provided in input Array".    *   
    *                                                     					 *   
    * Author:  Rajesh Babu                      							 *   
    *                                                      					 *   
    * Usage:                                               					 *   
    *   $.imageloader({urls: [{'url':'URL1','id':1},{'url':'URL2','id':2}],	 *
	*			onComplete: function(){},									 *
	*			onUpdate: function(ratio, image, id, imgRepeat){},			 *
	*			onError: function(err){										 *
	*				console.log(err);										 *
	*			}															 *
	*		});	     					 									 *   
    *************************************************************************/  
(function ($) {
 
  $.imageloader = function(userOptions) {
 
    var options = $.extend({
      urls: [],
	  isMobileScr: false,
	  mobileImgIDs: [],
      onComplete: function() {},
      onUpdate: function(ratio, image, id, imgRepeat) {},
      onError: function(err) {}
    }, userOptions);
    console.log('isMobileScreen component->'+options.isMobileScr);
	function shuffle(o){ 
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
	
    var loadCount = 0,
        completedUrls = [],
        urls = shuffle(options.urls),
		isMobileScr = options.isMobileScr;
		mobileImgIDs = options.mobileImgIDs;
        len = urls.length;
	
	var myVar = setInterval(function(){myTimer()},3000);
	var counter = 0;
	var imgRepeat = false;
	function checkArrEleExistence(counter){
		var result = false;
		for( i = 0; i < mobileImgIDs.length; i++ ){
			if(counter === mobileImgIDs[i]){
				result = true;
				break;
			}
		}
		return result;
	}
	function myTimer() {
		
		if(isMobileScr){
			if(checkArrEleExistence(counter+1)){		
				loadImg(urls[counter]);	
			}else{
				counter +=1;
			}
		}else{
			loadImg(urls[counter]);	
		}
	}	
     function loadImg(item) {
      var img = new Image(), error = false;
      img.src = item.url;
      img.onerror = function() {
        loadCount++;
        options.onError('Error loading image: ' + item.url);
      };
	  
      $('<img/>').attr('src', item.url+"1").load(function(res) {       		
        if (loadCount === len-1){			
			options.onComplete();
			counter = 0;
			loadCount = 0;
			urls = shuffle(urls);
			imgRepeat = true
		}
		options.onUpdate(loadCount/len, urls[loadCount].url, urls[loadCount].id, imgRepeat);
		loadCount++;  
		counter++;
      });
    }

  };
 
})(jQuery);

