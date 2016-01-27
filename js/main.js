jQuery(document).ready(function($) {

	// SET UI COLOURS ON TIME
		// var today = new Date();
		// var todayHour = today.getHours();
		// var todayMinutes = today.getMinutes();
		
		// // var todayHour = 19;
		// // var todayMinutes = 31;

		// var luckyBody = document.getElementById("luckyBody");
		// console.log("What time is it in here? " + todayHour + ":" + todayMinutes);

		// // NITE STYLE // LUCKY IS CLOSED
		// if(todayHour >= 0 && todayHour < 9 || todayHour >= 19 && todayHour < 24){
		// 	luckyBody.classList.add("niteTimeFontColor");
		// 	luckyBody.style.backgroundColor = "#0c1f28";
		// }
		
		// // GRAY STYLE // 9AM - 11AM && 4PM - 7PM
		// if(todayHour >= 9 && todayHour < 11 || todayHour >= 16 && todayHour < 19){
		// 	luckyBody.classList.add("dayTimeFontColor");
		// 	luckyBody.style.backgroundColor = "#d7dbe3";
		// }
		
		// // DAY STYLE // LUCKY IS OPEN
		// if(todayHour >= 11 && todayHour < 16){
		// 	luckyBody.classList.add("dayTimeFontColor");
		// 	luckyBody.style.backgroundColor = "#edf1fa";
		// }
	// END COLOURS ON TIME


	// NAVIGATION FLOW
		// INTRO
			$('#startWeb').click(function() {
				$('.welcomeLogoToPush').addClass('pushWelcomeLogo');
				$('.welcomeStartToPush').addClass('pushStartWeb');

				setTimeout(function(){
					// HIDE CURRENT PAGE
					$('#welcomePage').addClass('passedPage');
					$('#welcomePage').removeClass('currentPage');				
					$('#welcomePage').addClass('notHere');

					// RESET MASKING CURRENT PAGE OBJECTS
					$('.welcomeLogoToPush').removeClass('pushWelcomeLogo');
					$('.welcomeStartToPush').removeClass('pushStartWeb');

					// BRING NEXT PAGE
					$('#layoutMaster').addClass('currentPage');
					$('#layoutMaster').removeClass('waitingPage');
				},500);
			});
		// END INTRO


		// Q&A

		// END Q&A
	// END NAVIGATION FLOW


	// TEXT ANIMATIONS TESTS
		$(document).click(function() {
			$("#qFirst").toggleClass('pushQs');
		});
	// END ANIMATIONS TESTS
});