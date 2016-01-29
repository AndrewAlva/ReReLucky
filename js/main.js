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



	// MENU TRIGGER INTERACTION
		
		$('#threeLinesWrap').mouseenter(function() {
			$('.menuLines').addClass('fullThreeLine');
		});

		$('#threeLinesWrap').mouseleave(function() {
			$('.menuLines').removeClass('fullThreeLine');
		});

		$('#threeLinesWrap').click(function() {
			// LABEL LOGO ANIMATION
				$('#luckyLabel').addClass('hideLabel');
			// END LABEL


			// TRIGGER BUTTON ANIMATION
				$('.menuLines').addClass('hideThreeLine')
				setTimeout(function(){
					$('#threeLinesWrap').addClass('notHere');
					setTimeout(function(){
						$('#crossCloseMenu').removeClass('hiddenCross');
					},200);
				},350);
			// END TRIGGER BUTTON ANIMATION


			// CURTAINS ANIMATION
				$('#curtainWrapper').removeClass('notHere');
				setTimeout(function(){
					curtainLoop();
					$('#curtainDivision').addClass('op10');
					$('#curtainDivision').addClass('bringToFront');
				},100);
			// END CURTAINS


			// WINDOW MENU ANIMATION
				$('#menuWindow').removeClass('notHere');
			// END WINDOW MENU

		});


		$('#crossWrap').click(function() {
			// LABEL LOGO ANIMATION
				$('#luckyLabel').removeClass('hideLabel');
			// END LABEL


			// TRIGGER BUTTON ANIMATION
				$('#crossCloseMenu').addClass('hiddenCross');
				$('#threeLinesWrap').removeClass('notHere');

				setTimeout(function(){
					$('.menuLines').removeClass('hideThreeLine');

				},350)
			// END TRIGGER BUTTON ANIMATION


			// CURTAINS ANIMATION
				curtainClose();
				setTimeout(function(){
					$('#curtainDivision').removeClass('op10');
					$('#curtainDivision').removeClass('bringToFront');
				},500);

				setTimeout(function(){
					$('#curtainWrapper').addClass('notHere');
				},1000);
			// END CURTAINS



			// WINDOW MENU ANIMATION
			// END WINDOW MENU

		});

		// CURTAIN MOVEMENT FUNCTION
			var curtainFront0 = $('#curtainFront-0');
			var curtainFront1 = $('#curtainFront-1');
			var curtainFront2 = $('#curtainFront-2');
			var curtainFront3 = $('#curtainFront-3');
			var curtainFront4 = $('#curtainFront-4');
			var curtainFront5 = $('#curtainFront-5');
			var curtainFront6 = $('#curtainFront-6');
			var curtainFront7 = $('#curtainFront-7');
			var curtainFront8 = $('#curtainFront-8');

			var curtainLoopCount = 0;                     //  set your counter to 1
			var currentCurtain1;
			var currentCurtain2;

			// OPENING CURTAINS
			function curtainLoop() {           //  create a loop function
			    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
			        if(curtainLoopCount == 0){
						currentCurtain1 = curtainFront0;

					} else if(curtainLoopCount == 1){
						currentCurtain1 = curtainFront1;

					} else if(curtainLoopCount == 2){
						currentCurtain1 = curtainFront2;

					} else if(curtainLoopCount == 3){
						currentCurtain1 = curtainFront3;

					} else if(curtainLoopCount == 4){
						currentCurtain1 = curtainFront4;

					} else if(curtainLoopCount == 5){
						currentCurtain1 = curtainFront5;

					} else if(curtainLoopCount == 6){
						currentCurtain1 = curtainFront6;

					} else if(curtainLoopCount == 7){
						currentCurtain1 = curtainFront7;

					} else if(curtainLoopCount == 8){
						currentCurtain1 = curtainFront8;

					}

					currentCurtain1.addClass('openedCurtains');

			        curtainLoopCount++;                     //  increment the counter
			        if (curtainLoopCount < 9) {            //  if the counter < 10, call the loop function
			        	curtainLoop();             //  ..  again which will trigger another 
			        }                        //  ..  setTimeout()
			    }, 30)
			}

			// CLOSING CURTAIN
			function curtainClose() {           //  create a loop function
			    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
			        if(curtainLoopCount == 9){
						currentCurtain2 = curtainFront8;

					} else if(curtainLoopCount == 8){
						currentCurtain2 = curtainFront7;

					} else if(curtainLoopCount == 7){
						currentCurtain2 = curtainFront6;

					} else if(curtainLoopCount == 6){
						currentCurtain2 = curtainFront5;

					} else if(curtainLoopCount == 5){
						currentCurtain2 = curtainFront4;

					} else if(curtainLoopCount == 4){
						currentCurtain2 = curtainFront3;

					} else if(curtainLoopCount == 3){
						currentCurtain2 = curtainFront2;

					} else if(curtainLoopCount == 2){
						currentCurtain2 = curtainFront1;

					} else if(curtainLoopCount == 1){
						currentCurtain2 = curtainFront0;

					}

					currentCurtain2.removeClass('openedCurtains');

			        curtainLoopCount = curtainLoopCount - 1;                     //  increment the counter
			        if (curtainLoopCount > 0) {            //  if the counter < 10, call the loop function
			        	curtainClose();             //  ..  again which will trigger another 
			        }                        //  ..  setTimeout()
			    }, 30)
			}
		// END CURTAIN MOVEMENT FUNCTION

		// MENU TITLES FUNCTIONS
			function showMenuTitles(){
				var menuTitle1 = $('#menuTitle1');
				var menuTitle2 = $('#menuTitle2');
				var menuTitle3 = $('#menuTitle3');
				var menuTitle4 = $('#menuTitle4');

				
			}
		// END MENU TITLES FUNCTIONS
	// END MENU TRIGGER INTERACTION












});