/**
  * Image Loader -- To load images one by one provided in input Array".      
  *   Author:  Rajesh Babu                      							   
  *                                                        					    
  *   Usage:                                               					    
  *     $.imageloader({urls: [{'url':'URL1','id':1},{'url':'URL2','id':2}],	 
  *				onComplete: function(){},									 
  *				onUpdate: function(ratio, image, id, imgRepeat){},			 
  *				onError: function(err){										 
  *					console.log(err);										 
  *				}															 
  *			});	 
 */
(function ($, window) {
 
  $.imageloader = function(userOptions) {
 
    var options = $.extend({
      urls: [],
	  mobileImgIDs: [],
      onComplete: function() {},
      onUpdate: function(ratio, image, id, imgRepeat) {},
      onError: function(err) {}
    }, userOptions);
	
	/**
	 * Shuffle the input array.
	 * @param <Array> o The input of array
	 * @return <Array> o The result of tye array after shuffle.
	 */
	function shuffle(o){ 
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
	
    var loadCount = 0,
        completedUrls = [],
        urls = shuffle(options.urls),
		mobileImgIDs = options.mobileImgIDs;
        len = urls.length;
	
	var myVar = setInterval(function(){myTimer()},3000);
	var counter = 0;
	var imgRepeat = false;
	
	/**
	 * Check the given index value value with images for mobile screen.
	 * @param <Integer> counter The index value of the current image
	 * @return <Boolean> result The result of the condition
	 */
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
	/**
	 * Check the screen type and extract & call the 'loadImg' function.
	 * @param <NA>
	 * @return <NA>
	 */
	function myTimer() {		
		if(window.screenType === window.SCR_TYPE.MOBILE){
			if(checkArrEleExistence(counter+1)){		
				loadImg(urls[counter]);	
			}else{
				counter +=1;
			}
		}else{
			loadImg(urls[counter]);	
		}
	}	
	/**
	 * Load the images using the given input object
	 * @param <Object>item The Current object 
	 * @return <NA>
	 */
     function loadImg(item) {
      var img = new Image(), error = false;
      img.src = item.url;
      img.onerror = function() {
        loadCount++;
        options.onError('Error loading image: ' + item.url);
      };	  
      $('<img/>').attr('src', item.url).load(function(res) {       		
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
 
})(jQuery, window);

