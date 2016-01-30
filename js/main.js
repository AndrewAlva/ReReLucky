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
		// RESET FULL PAGE LABEL BUTTON
			$('#luckyLabel').click(function() {
				// HIDE WHO ARE YOU ELEMENTS
				masterHideElement($('#whoRUQuestion'),550);
				masterHideElement($('#whoRUOption1'),400);
				masterHideElement($('#whoRUOption2'),200);
				masterHideElement($('#whoRUOption3'),0);

				// SHOW INTRO
				$('#welcomePage').removeClass('notHere');			
				

				// RESET MASKING CURRENT PAGE OBJECTS
				setTimeout(function(){
					$('.welcomeLogoToPush').removeClass('pushWelcomeLogo');
					$('.innerStartWeb').removeClass('pushStartWeb');
				},700);
				

			});

		// RESET FULL PAGE LABEL



		// INTRO
			$('#startWeb').click(function() {
				$('.welcomeLogoToPush').addClass('pushWelcomeLogo');
				$('.innerStartWeb').addClass('pushStartWeb');

				setTimeout(function(){
					// HIDE INTRO				
					$('#welcomePage').addClass('notHere');

					// SHOW WHO ARE YOU ELEMENTS
					masterShowElement($('#whoRUQuestion'),0);
					masterShowElement($('#whoRUOption1'),150);
					masterShowElement($('#whoRUOption2'),350);
					masterShowElement($('#whoRUOption3'),550);

				},600);
			});
		// END INTRO



		// MASTER SHOW/HIDE ELEMENTS
			function masterShowElement(thisElement,setDelay){
				setTimeout(function(){
					$(thisElement).addClass('masterInsertElement');
				},setDelay);
			}

			function masterHideElement(thisElement,setDelay){
				setTimeout(function(){
					$(thisElement).removeClass('masterInsertElement');
				},setDelay);
			}
		// END MASTER SHOW/HIDE
	// END NAVIGATION FLOW


	// OPTIONS HOVER ANIMATIONS
		$('.placeAnimated').mouseenter(function() {
			$(this).find('.innerAnimateComment').addClass('revealComment');
		});

		$('.placeAnimated').mouseleave(function() {
			$(this).find('.innerAnimateComment').removeClass('revealComment');
		});
	// END OPTIONS HOVER



	// MENU TRIGGER INTERACTION
		
		$('#threeLinesWrap').mouseenter(function() {
			$('.menuLines').addClass('fullThreeLine');
		});

		$('#threeLinesWrap').mouseleave(function() {
			$('.menuLines').removeClass('fullThreeLine');
		});

		$('#threeLinesWrap').click(function() {
			if (curtEnd){
				// TURN OFF TRIGGER
				curtEnd = false;


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

					setTimeout(function(){
						showMenuTitles();
						showRsTitles();
					},500);
				// END CURTAINS


				// WINDOW MENU ANIMATION
					$('#menuWindow').removeClass('notHere');
				// END WINDOW MENU

				// ACTIVE MENU TRIGGER AGAIN
				setTimeout(function(){
					curtEnd = true;
				},2900);
			}

		});


		$('#crossWrap').click(function() {
			if (curtEnd){

				// TURN OFF TRIGGER
				curtEnd = false;


				
				// CURTAINS ANIMATION
					hideMenuTitles();
					hideRsTitles();
					
					setTimeout(function(){
						curtainClose();
					},1200);

					setTimeout(function(){
						$('#curtainDivision').removeClass('op10');
						$('#curtainDivision').removeClass('bringToFront');

						// TRIGGER BUTTON ANIMATION
							$('#crossCloseMenu').addClass('hiddenCross');
							$('#threeLinesWrap').removeClass('notHere');

							setTimeout(function(){
								$('.menuLines').removeClass('hideThreeLine');
							},350)
						// END TRIGGER BUTTON ANIMATION
					},1500);

					setTimeout(function(){
						$('#curtainWrapper').addClass('notHere');

						// WINDOW MENU ANIMATION
							$('#menuWindow').addClass('notHere');
						// END WINDOW MENU

						// LABEL LOGO ANIMATION
							$('#luckyLabel').removeClass('hideLabel');
						// END LABEL
					},2200);
				// END CURTAINS

				// ACTIVE MENU TRIGGER AGAIN
				setTimeout(function(){
					curtEnd = true;
				},2900);
			}




		});

		// CURTAIN TRANSITIONS TRIGGER
			var curtEnd = true;

		// END CURTAIN TRIGGER

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
			var menuTitle1 = $('#menuTitle1');
			var menuTitle2 = $('#menuTitle2');
			var menuTitle3 = $('#menuTitle3');
			var menuTitle4 = $('#menuTitle4');

			var menuTitleLoopCount = 1;

			var currentMenuTitle1;
			var currentMenuTitle2;

			function showMenuTitles(){
				setTimeout(function(){
					if(menuTitleLoopCount == 1){
						currentMenuTitle1 = menuTitle1;

					} else if(menuTitleLoopCount == 2){
						currentMenuTitle1 = menuTitle2;

					} else if(menuTitleLoopCount == 3){
						currentMenuTitle1 = menuTitle3;

					} else if(menuTitleLoopCount == 4){
						currentMenuTitle1 = menuTitle4;

					}

					currentMenuTitle1.addClass('menuTitlesInserted');

					menuTitleLoopCount++;
					if(menuTitleLoopCount < 5){
						showMenuTitles();
					}
				},250);

			}

			function hideMenuTitles(){
				if(menuTitleLoopCount == 5){
					currentMenuTitle2 = menuTitle4;

				} else if(menuTitleLoopCount == 4){
					currentMenuTitle2 = menuTitle3;

				} else if(menuTitleLoopCount == 3){
					currentMenuTitle2 = menuTitle2;

				} else if(menuTitleLoopCount == 2){
					currentMenuTitle2 = menuTitle1;

				}

				currentMenuTitle2.removeClass('menuTitlesInserted');

				menuTitleLoopCount = menuTitleLoopCount -1;
				if(menuTitleLoopCount > 1){
					setTimeout(function(){
						hideMenuTitles();
					},250);
				}
			}
		// END MENU TITLES FUNCTIONS

		// RRSS TITLES FUNCTIONS
			var rsTitle1 = $('#rsTitle1');
			var rsTitle2 = $('#rsTitle2');
			var rsTitle3 = $('#rsTitle3');

			var rsTitleLoopCount = 1;

			var rsCurrentTitle1;
			var rsCurrentTitle2;

			function showRsTitles(){
				setTimeout(function(){
					if(rsTitleLoopCount == 1){
						rsCurrentTitle1 = rsTitle1;

					} else if(rsTitleLoopCount == 2){
						rsCurrentTitle1 = rsTitle2;

					} else if(rsTitleLoopCount == 3){
						rsCurrentTitle1 = rsTitle3;

					} 

					rsCurrentTitle1.addClass('menuTitlesInserted');

					rsTitleLoopCount++;
					if(rsTitleLoopCount < 4){
						showRsTitles();
					}
				},250);
			}

			function hideRsTitles(){
				if(rsTitleLoopCount == 4){
					rsCurrentTitle2 = rsTitle3;

				} else if(rsTitleLoopCount == 3){
					rsCurrentTitle2 = rsTitle2;

				} else if(rsTitleLoopCount == 2){
					rsCurrentTitle2 = rsTitle1;

				} 

				rsCurrentTitle2.removeClass('menuTitlesInserted');

				rsTitleLoopCount = rsTitleLoopCount - 1;
				if(rsTitleLoopCount > 0){
					setTimeout(function(){
						hideRsTitles();
					},250);
					
				} else {
					rsTitleLoopCount = 1;
				}
			}
		// END RSS FUNCTIONS
	// END MENU TRIGGER INTERACTION












});