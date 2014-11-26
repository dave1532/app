$(document).ready(function(){
	
	$(document).keydown(function(event){
		var choice = $("input[name=foodChoice]").val();
		// get the value of the Search the user submitted
		if (event.which == 13){
    		event.preventDefault();
			getResolution(choice);
			$('form').find('input[type=text]').val('');
		}
	});
	
});
var getImage = function(result){
	var $imgOne = $('.imageOne'),
		$imgTwo = $('.imageTwo'),
		$imgThree = $('.imageThree'),
		$imgFour = $('.imageFour'),
		$imgFive = $('.imageFive'),
		$imgSix = $('.imageSix'),
		$imgSeven = $('.imageSeven'),
		$imgEight = $('.imageEight'),
		$imgNine = $('.imageNine'),
		$imgTen = $('.imageTen'),
		$imgEleven = $('.imageEleven'),
		$imgTwelve = $('.imageTwelve'),
		$imgThirteen = $('.imageThirteen'),
		$imgFourteen = $('.imageFourteen'),
		$imgFifteen = $('.imageFifteen'),
		$imgSixteen = $('.imageSixteen'),
		$imgSeventeen = $('.imageSeventeen'),
		$imgEighteen = $('.imageEighteen'),
		$imageNineteen = $('.imageNineteen'),
		$imageTwenty = $(".imageTwenty"),
		$imgTwentyone = $('.imageTwentyone'),
		$imgTwentytwo = $('.imageTwentytwo'),
		$imgTwentythree = $('.imageTwentythree'),
		$imgTwentyfour = $('.imageTwentyfour'),
		$imgTwentyfive = $('.imageTwentyfive'),
		$imgTwentysix = $('.imageTwentysix'),
		$imgTwentyseven = $('.imageTwentyseven'),
		$imgTwentyeight = $('.imageTwentyeight'),
		$imgTwentynine = $('.imageTwentynine')
		
// Array for Result Images	
	var $images = [$imgOne,$imgTwo,$imgThree,$imgFour,$imgFive,$imgSix,$imgSeven,$imgEight,$imgNine,$imgTen,$imgEleven,$imgTwelve,$imgThirteen,$imgFourteen,$imgFifteen,$imgSixteen,$imgSeventeen,$imgEighteen,$imageNineteen,$imageTwenty,$imgTwentyone,$imgTwentytwo,$imgTwentythree,$imgTwentyfour,$imgTwentyfive,$imgTwentysix,$imgTwentyseven,$imgTwentyeight,$imgTwentynine];
		
		for (var i = 0, j=result.matches.length-1; i < j; i++){
			$images[i].attr('src', result.matches[i].smallImageUrls[0]);
		}

};
var getLabel= function(result){
	var	$txtOne = $('.textOne'),
		$txtTwo = $('.textTwo'),
		$txtThree = $('.textThree'),
		$txtFour = $('.textFour'),
		$txtFive = $('.textFive'),
		$txtSix = $('.textSix'),
		$txtSeven = $('.textSeven'),
		$txtEight = $('.textEight'),
		$txtNine = $('.textNine'),
		$textTen = $('.textTen'),
		$txtEleven= $('.textEleven'),
		$txtTwelve=$('.textTwelve'),
		$txtThirteen = $('.textThirteen'),
		$txtFourteen = $('.textFourteen'),
		$txtFifteen = $('.textFifteen'),
		$txtSixteen = $('.textSixteen'),
		$txtSeventeen = $('.textSeventeen'),
		$txtEighteen = $('.textEighteen'),
		$txtNineteen = $('.textNineteen'),
		$txtTwenty = $('.textTwenty'),
		$txtTwentyone = $('.textTwentyone'),
		$txtTwentytwo = $('.textTwentytwo'),
		$txtTwentythree = $('.textTwentythree'),
		$txtTwentyfour = $('.textTwentyfour'),
		$txtTwentyfive = $('.textTwentyfive'),
		$txtTwentysix = $('.textTwentysix'),
		$txtTwentyseven = $('.textTwentyseven'),
		$txtTwentyeight = $('.textTwentyeight'),
		$txtTwentynine = $('.textTwentynine')
		

	var $texts = [$txtOne,$txtTwo,$txtThree,$txtFour,$txtFive,$txtSix,$txtSeven,$txtEight,$txtNine,$textTen,$txtEleven,$txtTwelve,$txtThirteen,$txtFourteen,$txtFifteen,$txtSixteen,$txtSeventeen,$txtEighteen,$txtNineteen,$txtTwenty,$txtTwentyone,$txtTwentytwo,$txtTwentythree,$txtTwentyfive,$txtTwentysix,$txtTwentyseven,$txtTwentyeight,$txtTwentynine];
for (var i = 0, j=result.matches.length-1; i < j; i++){
			$texts[i].text(result.matches[i].recipeName);
			 
		}

};
var getResolution = function(choice) {

	var result = $.ajax({
		url: "http://api.yummly.com/v1/api/recipes?_app_id=6b86089b&_app_key=9abbe4dc697a30da00779bedce2ae772&q="+choice+"&requirePictures=true",
		dataType: "jsonp",
		type: "GET",
		})
	.done(function(result){
		
		$('.formArea p').text(result.totalMatchCount + " " + 'results');
		$('.resultShow p').text("Hover above picture for food Name");
		getImage(result);
		getLabel(result);
		
		
	})
	.fail(function(jqXHR, textStatus, errorThrown){
		console.log(textStatus);
		console.log(errorThrown);
	});
	
};
