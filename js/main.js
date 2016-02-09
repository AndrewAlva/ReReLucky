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
		// LABEL BUTTON RESET FULL PAGE
			$('#luckyLabel').click(function() {
				// HIDE WHO ARE YOU ELEMENTS
				masterHideElement($('#whoRUOption3'),0);
				masterHideElement($('#whoRUOption2'),200);
				masterHideElement($('#whoRUOption1'),400);
				masterHideElement($('#whoRUQuestion'),550);
				
				

				// SHOW INTRO
				$('#welcomePage').removeClass('notHere');
				// RESET WHO ARE YOU OPTIONS
				$('#whoRUOptions').removeClass('notHere');
				

				// RESET MASKING CURRENT PAGE OBJECTS
				setTimeout(function(){
					$('.welcomeLogoToPush').removeClass('pushWelcomeLogo');
					$('.innerStartWeb').removeClass('pushStartWeb');
				},700);

				// RESET CLIENT FLOW

					// RESET CLIENT FIRST QUESTION FLOW: CONNECT?
					masterHideElement($('#clientFirstOption2'),0);
					masterHideElement($('#clientFirstOption1'),200);
					masterHideElement($('#clientFirstQuestion'),350);

					// RESET CLIENT FIRST ADVICE AGENCIES
					masterHideElement($('#clientFirstAgency3'),0);
					masterHideElement($('#clientFirstAgency2'),100);
					masterHideElement($('#clientFirstAgency1'),200);
					masterHideElement($('#clientFirstNext'),300);
					masterHideElement($('#clientFirstAdvice'),450);


					// RESET CLIENT SECOND QUESTION: FEAR?
					masterHideElement($('#clientSecondOption2'),0);
					masterHideElement($('#clientSecondOption1'),200);
					masterHideElement($('#clientSecondQuestion'),350);

					// RESET CLIENT SECOND ADVICE AGENCIES
					masterHideElement($('#clientSecondAgency3'),0);
					masterHideElement($('#clientSecondAgency2'),100);
					masterHideElement($('#clientSecondAgency1'),200);
					masterHideElement($('#clientSecondNext'),300);
					masterHideElement($('#clientSecondAdvice'),450);


					// RESET CLIENT THIRD QUESTION: PERSONAL NAMES?
					masterHideElement($('#clientThirdOption2'),0);
					masterHideElement($('#clientThirdOption1'),200);
					masterHideElement($('#clientThirdQuestion'),350);

					// RESET CLIENT THIRD ADVICE AGENCIES
					masterHideElement($('#clientThirdAgency3'),0);
					masterHideElement($('#clientThirdAgency2'),100);
					masterHideElement($('#clientThirdAgency1'),200);
					masterHideElement($('#clientThirdNext'),300);
					masterHideElement($('#clientThirdAdvice'),450);


					// RESET CLIENT SUCCESS QUESTION: WANNA FLY?
					masterHideElement($('#clientSuccessOption1'),0);
					masterHideElement($('#clientSuccessQuestion'),200);


					// RESET CLIENT SUCCESS VIDEO
					masterHideElement($('#clientGetInfoBox'),0);
					masterHideElement($('#clientIframe'),100);

					setTimeout(function(){
						$('#clientVideo').addClass('notHere');
						$('#videoMasterWrapper').addClass('notHere');
					},800);


					// RESET CLIENT SUCCESS CONTACT INFO
					$('#finalClientBackInfo').find('.finalArrow').addClass('hiddenArrow');
					
					masterHideElement($('#infoRSTitle3'),100);
					masterHideElement($('#infoRSTitle2'),250);
					masterHideElement($('#infoRSTitle1'),400);

					masterHideElement($('#finalInfoClient'),450);
				// END RESET CLIENT

				// RESET COMPETITION FLOW
					// RESET COMPETITION FIRST QUESTION
					masterHideElement($('#competitionFirstOption2'), 0);
					masterHideElement($('#competitionFirstOption1'), 100);
					masterHideElement($('#competitionFirstQuestion'), 200);


					// RESET COMPETITION FIRST ADVICE
					masterHideElement($('#competitionAnywayOption1'),0);
					masterHideElement($('#competitionFirstAdvice'),150);
				// END RESET COMPETITION

				// RESET TALENT FLOW
				// END RESET TALENT

			});

		// END LABEL RESET FULL PAGE



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

		// WHO ARE YOU: CLIENT FLOW
			// I'M CLIENT
				$('#whoRUOption1').click(function() {
					masterHideElement($('#whoRUOption3'),0);
					masterHideElement($('#whoRUOption2'),200);
					masterHideElement($('#whoRUOption1'),400);
					masterHideElement($('#whoRUQuestion'),600);

					setTimeout(function(){
						$('#whoRUOptions').addClass('notHere');

						masterShowElement($('#clientFirstQuestion'),200);
						masterShowElement($('#clientFirstOption1'),600);
						masterShowElement($('#clientFirstOption2'),800);
					},1200);
				});
			// END I'M CLIENT

				// FIRST QUESTION FLOW
					// A) I'M LOOKING TO CONNECT WITH MY TARGET
						$('#clientFirstYes').click(function() {
							masterHideElement($('#clientFirstOption2'),0);
							masterHideElement($('#clientFirstOption1'),200);
							masterHideElement($('#clientFirstQuestion'),450);

							setTimeout(function(){
								masterShowElement($('#clientFirstAdvice'),600);
								masterShowElement($('#clientFirstNext'),700);
								masterShowElement($('#clientFirstAgency1'),750);
								masterShowElement($('#clientFirstAgency2'),950);
								masterShowElement($('#clientFirstAgency3'),1150);
							},100);
						});
					// END A) CONNECT WITH MY TARGET

						// A)1) NEXT SLIDE
							$('#clientFirstNext').click(function() {
								masterHideElement($('#clientFirstNext'),0);
								masterHideElement($('#clientFirstAgency3'),100);
								masterHideElement($('#clientFirstAgency2'),300);
								masterHideElement($('#clientFirstAgency1'),500);
								masterHideElement($('#clientFirstAdvice'),650);

								setTimeout(function(){
									masterShowElement($('#clientSecondQuestion'),0);
									masterShowElement($('#clientSecondOption1'),400);
									masterShowElement($('#clientSecondOption2'),600);
								},1100);
							});
						// END A)1) END NEXT SLIDE

					// B) NOT TO CONNECT WITH MY TARGET
						$('#clientFirstNo').click(function() {
							masterHideElement($('#clientFirstOption2'),0);
							masterHideElement($('#clientFirstOption1'),200);
							masterHideElement($('#clientFirstQuestion'),450);

							setTimeout(function(){
								masterShowElement($('#clientSecondQuestion'),0);
								masterShowElement($('#clientSecondOption1'),400);
								masterShowElement($('#clientSecondOption2'),600);
							},850);
						});
					// END B) NOT TO CONNECT WITH MY TARGET
				// END FIRST QUESTION FLOW


				// SECOND QUESTION FLOW
					// A) I'M AFRAID OF TAKING RISKS
						$('#clientSecondYes').click(function() {
							masterHideElement($('#clientSecondOption2'),0);
							masterHideElement($('#clientSecondOption1'),200);
							masterHideElement($('#clientSecondQuestion'),450);

							setTimeout(function(){
								masterShowElement($('#clientSecondAdvice'),600);
								masterShowElement($('#clientSecondNext'),700);
								masterShowElement($('#clientSecondAgency1'),750);
								masterShowElement($('#clientSecondAgency2'),950);
								masterShowElement($('#clientSecondAgency3'),1150);
							},100);
						});
					// END A) I'M AFRAID

						// A)1) NEXT SLIDE
							$('#clientSecondNext').click(function() {
								masterHideElement($('#clientSecondNext'),0);
								masterHideElement($('#clientSecondAgency3'),100);
								masterHideElement($('#clientSecondAgency2'),300);
								masterHideElement($('#clientSecondAgency1'),500);
								masterHideElement($('#clientSecondAdvice'),650);

								setTimeout(function(){
									masterShowElement($('#clientThirdQuestion'),0);
									masterShowElement($('#clientThirdOption1'),400);
									masterShowElement($('#clientThirdOption2'),600);
								},1100);
							});
						// END A)1) NEXT

					// B) I'M NOT AFRAID
						$('#clientSecondNo').click(function() {
							masterHideElement($('#clientSecondOption2'),0);
							masterHideElement($('#clientSecondOption1'),200);
							masterHideElement($('#clientSecondQuestion'),450);

							setTimeout(function(){
								masterShowElement($('#clientThirdQuestion'),0);
								masterShowElement($('#clientThirdOption1'),400);
								masterShowElement($('#clientThirdOption2'),600);
							},850);
						});
					// END B) NOT AFRAID
				// END SECOND QUESTION FLOW


				// THIRD QUESTION FLOW
					// A) I'D RATHER PERSONAL NAMES AGENCIES
						$('#clientThirdYes').click(function() {
							masterHideElement($('#clientThirdOption2'),0);
							masterHideElement($('#clientThirdOption1'),200);
							masterHideElement($('#clientThirdQuestion'),450);

							setTimeout(function(){
								masterShowElement($('#clientThirdAdvice'),600);
								masterShowElement($('#clientThirdNext'),700);
								masterShowElement($('#clientThirdAgency1'),750);
								masterShowElement($('#clientThirdAgency2'),950);
								masterShowElement($('#clientThirdAgency3'),1150);
							},100);
						});
					// END A) I'D RATHER PERSONAL NAMES AGENCIES

						// A)1) NEXT SLIDE
							$('#clientThirdNext').click(function() {
								masterHideElement($('#clientThirdNext'),0);
								masterHideElement($('#clientThirdAgency3'),100);
								masterHideElement($('#clientThirdAgency2'),300);
								masterHideElement($('#clientThirdAgency1'),500);
								masterHideElement($('#clientThirdAdvice'),650);

								setTimeout(function(){
									masterShowElement($('#clientSuccessQuestion'),0);
									masterShowElement($('#clientSuccessOption1'),200);
								},1100);
							});
						// END A)1) NEXT

					// B) I DON'T CARE THE NAME OF THE AGENCIES
						$('#clientThirdNo').click(function() {
							masterHideElement($('#clientThirdOption2'),0);
							masterHideElement($('#clientThirdOption1'),200);
							masterHideElement($('#clientThirdQuestion'),450);

							setTimeout(function(){
								masterShowElement($('#clientSuccessQuestion'),0);
								masterShowElement($('#clientSuccessOption1'),200);
							},850);
						});
					// END B) I DON'T CARE THE NAME OF THE AGENCIES
				// END THIRD QUESTION FLOW


				// SUCCESS QUESTION FLOW
					// YES, I WANT TO FLY
						$('#clientSuccessYes').click(function() {
							masterHideElement($('#clientSuccessOption1'),0);
							masterHideElement($('#clientSuccessQuestion'),100);

							setTimeout(function(){
								$('#videoMasterWrapper').removeClass('notHere');
								$('#clientVideo').removeClass('notHere');

								masterShowElement($('#clientIframe'),100);
								masterShowElement($('#clientGetInfoBox'),300);
							},600);
						});
					// END YES, I WANT TO FLY


						// CLICK HERE TO GET INFO
							$('#clientInfoHere').click(function() {
								masterHideElement($('#clientGetInfoBox'),0);
								masterHideElement($('#clientIframe'),100);

								setTimeout(function(){
									$('#clientVideo').addClass('notHere');
									$('#videoMasterWrapper').addClass('notHere');

									masterShowElement($('#finalInfoClient'),100);
									$('#finalClientBackInfo').find('.finalArrow').removeClass('hiddenArrow');

									masterShowElement($('#infoRSTitle1'),200);
									masterShowElement($('#infoRSTitle2'),350);
									masterShowElement($('#infoRSTitle3'),500);
								},800);
							});
						// END CLICK TO GET INFO

						// CLICK HERE TO GO BACK TO VIDEO
							$('#finalClientBackInfo').click(function() {
								$('#finalClientBackInfo').find('.finalArrow').addClass('hiddenArrow');

								$('#videoMasterWrapper').removeClass('notHere');
								$('#clientVideo').removeClass('notHere');

								masterHideElement($('#infoRSTitle3'),50);
								masterHideElement($('#infoRSTitle2'),200);
								masterHideElement($('#infoRSTitle1'),350);

								masterHideElement($('#finalInfoClient'),450);

								masterShowElement($('#clientIframe'),850);
								masterShowElement($('#clientGetInfoBox'),950);
							});
						// END CLICK BACK TO VIDEO
				// END SUCCESS FLOW			
		// END CLIENT FLOW

		// WHO ARE YOU: COMPETITION FLOW
			// I'M COMPETITION
				$('#whoRUOption2').click(function() {
					masterHideElement($('#whoRUOption3'),0);
					masterHideElement($('#whoRUOption2'),200);
					masterHideElement($('#whoRUOption1'),400);
					masterHideElement($('#whoRUQuestion'),600);

					setTimeout(function(){
						$('#whoRUOptions').addClass('notHere');

						masterShowElement($('#competitionFirstQuestion'),0);
						masterShowElement($('#competitionFirstOption1'),400);
						masterShowElement($('#competitionFirstOption2'),600);
					},1200);
				});
			// END I'M COMPETITION

			// FIRST QUESTION FLOW
					// A) NO, IT'S NOT ENOUGH
						$('#competitionFirstYes').click(function() {
							masterHideElement($('#competitionFirstOption2'),0);
							masterHideElement($('#competitionFirstOption1'),200);
							masterHideElement($('#competitionFirstQuestion'),450);

							setTimeout(function(){
								masterShowElement($('#competitionFirstAdvice'),0);
								masterShowElement($('#competitionAnywayOption1'),100);
							},700);
						});
					// END A) NOT ENOUGH

					// B) IT'S ENOUGH
						$('#competitionFirstNo').click(function() {
							masterHideElement($('#competitionFirstOption2'),0);
							masterHideElement($('#competitionFirstOption1'),200);
							masterHideElement($('#competitionFirstQuestion'),450);

							setTimeout(function(){
								masterShowElement($('#competitionFirstAdvice'),0);
								masterShowElement($('#competitionAnywayOption1'),100);
							},700);
						});
					// END B) ENOUGH
				// END FIRST QUESTION FLOW
		// END COMPETITION FLOW

		// WHO ARE YOU: TALENT FLOW
		// END TALENT FLOW




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



		$('.twoOptionsSingle').mouseenter(function() {
			$(this).find('img').addClass('masterOptionOp50');
		});
		$('.twoOptionsSingle').mouseleave(function() {
			$(this).find('img').removeClass('masterOptionOp50');
		});


		$('.oneOptionSingle').mouseenter(function() {
			$(this).find('img').addClass('masterOptionOp50');
		});
		$('.oneOptionSingle').mouseleave(function() {
			$(this).find('img').removeClass('masterOptionOp50');
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