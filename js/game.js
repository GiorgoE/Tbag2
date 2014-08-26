		
/////////////NAME AND STATS/////////////

		var name = prompt("What is your name?");
		//var name = "George";

////////////ITEMS////////////////////////

		var gold = 25;
		
		var small_dagger = false;
		
		var items = [
					"small dagger",
					"rusty sword",
					"apple",
					"gold ring",
					"heavy pistol",
					"bullet",
					];
		
////////////STYLE////////////////////////

		var buttoncolor = "#303030";

////////////ATTRIBUTESS////////////////////////
		
		var str = 6;
		var int = 5;
		var cha = 5;
		var luck = 4;
		
		
//////////////GAME VARS////////////////

		var clear = "";//clears field
		var dead = "You died.";
		var restart = "Tap here to try again.";//restarts game
		var restart2 = "Tap here to continue from the last checkpoint."
		var win = "Congratulations you have beaten this preview of the game!"
		
/////////////////STORY//////////////////////////////////
		
		var intro = "You awaken in a large bed, the sun pouring softly through the curtains. You can't remember how you got here but it certainly isn't your bed. Suddenly there's a raptuous knock on the door there's shouting to open up.";
			var introA1 = "Tap here to begin the game.";
			
		var S1 ="'Are you in there " + name + "!? If I catch you with my daughter I'll kill you!!' Only then do you notice the beautiful brunette in the bed who has now roused from her slumber.";
			var S1A1 = "'Bring it on!'"; //leads to S2
			var S1A2 = "Time to go. Kiss the girl and leave through the window."; //leads to S3
			var S1A3 = "Time to go. Pick up the dagger and jump through the window";//leads to S3
		
		var S2 = "The brunette girls father bursts in the door and kills you. You are dead."; //die
		
		
		var S3 = "You jump out of the window on to some crates and make your way down an alley and dissapear into a marketplace. You can hear the shouting in the bedroom you came from.";
			var S3A1 = "Keep running to try and get as far away as possible.";//leads to s4
			var S3A2 = "Try to find the nearest inn";//leads to S10
			
		var S4 = "In your haste you run into a large man who mistakes you for a thief based on your scruffy looks and mischievous smile. He accuses you of being a pickpocket.";
			var S4A1 = "Try to run!";//leads to S6
			var S4A2 = "Explain that you are not a thief, and empty your pockets.";//leads to S5
			
		var S5 = "He's not convinced, he still thinks you're up to something. He threatens to call the guards to search you and since he looks like a wealthy fat merchant and you look like a thief, who are they going to believe?"
			var S5A1 = "Offer to pay him 5 gold to get lost and leave you alone";//leads to s8. lose 5g
			var S5A2 = "Threaten him to keep his fat mouth shut and give you whatever he's got or you'll show how much painful a quick knife to the stomach can be..";//leads to s7. gives you money
		
		
		//harbor	
		var S6 = "He takes your running as an indication of guilt and calls the guards to chase after you. They are quick but years of running away have taught you the ins and outs of the city and you make your way to the harbor where there are lots of places to hide and blend in.";
			var S6A1 = "Run into the backdoor of the nearest building there."; // leads to back door of the Shady hound
			var S6A2 = "Hide by the dodgy looking sailor men"; // leads to talking to men.
	 
		var plusgold1 = Math.floor((Math.random() * 100) + 1);
		var S7 = "The man looks fearful now and hastily hands over what he has before leaving quickly. You are now " + plusgold1 + " richer and that should be useful in the future. You leave and think about where to spend your newfound gold.";
			var S7A1 = "The inn of course!"; // Leads to S10 with the inn
			var S7A2 = "Take a walk around the harbor and see what opportunities arise because you're feeling lucky today.";//S9 //leads to harbor
			
		var S8 = "The fat man muscles you into giving him 10 gold and you concede because you're not looking for anymore trouble today. You go your seperate ways he heads back to the market and you head..";
			 var S8A1 = "To the inn, to drown away your sorrows.";//leads to S10
			 var S8A2 = "To the harbor to see if you can make some of that lost money back."; //leads to S9
		
		//harbor
		var S9	="You wander through the shipments by the bulky sailors hardened by the sea then a voice whispers to you and out of the corner of your eye you see a man in the shadows of an entry. You warily walk over to see what he has to say.";
			var S9A1 ="What do you want?";//leads to S9.1
			var S9A2 ="...";// leads to S9.1
			
		var S9S1 ="creepy man talking"; //creepy man talking
			var S9S1A1 ="you ";
		
		var S10 = "You arrive at the Shady Hound, a notoriously treacherous place filled with sailors and thieves but the ale is good and the food is edible (most of the time). *******";
		
		
		
     ////////// CSS FUNCS //////////////
	 function highlightbutton(){
	 document.getElementsByClassName("buttons").style.backgroundcolor = "green";
	 }
		
		
	 ///////// CORE FUNCTIONS ///////////
	 
	 
		function clearButtons(){
			document.getElementById("Button1").innerHTML = clear.toString();
			document.getElementById("Button2").innerHTML = clear.toString();
			document.getElementById("Button3").innerHTML = clear.toString();
			
			document.getElementById("Button1").style.backgroundColor="transparent";
			document.getElementById("Button2").style.backgroundColor="transparent";
			document.getElementById("Button3").style.backgroundColor="transparent";
			//$('#Button1').fadeOut(0);
			//$('#Button2').fadeOut(0);
			//$('#Button3').fadeOut(0);
			
		}
		
		
		function restart1(){
			document.getElementById("Button1").innerHTML = restart.toString();
			document.getElementById("Button1").onclick = function () { funcIntro() };		
		}
		
		// Possible checkpoint function
		
		//function restart2(){
		//	document.getElementById("Button1").innerHTML = restart2.toString();
		//	document.getElementById("Button1").onclick = function () { funcS5() };		
		//} 
		

		function funcSWIN() {
			clearButtons();
			document.getElementById("Statement").innerHTML = win.toString();
			document.getElementById("Button1").innerHTML = restart.toString();
			document.getElementById("Button1").onclick = function () { funcS1() };
		}
        
		
		function dropdown(){ 
		    var disp = document.getElementsByClassName('item');
			for(i=0; i<disp.length; i++) 
			{
				if (disp[i].style.display != 'none')
				{
						disp[i].style.display = 'none';
				} else {
						disp[i].style.display = 'block';
				}
			}
		}
		
		
			
		function fadeitoutandin(){ 
		  		$('#statementdiv').fadeOut(0);
				$("#statementdiv").fadeIn(800);
				document.getElementById("gold").innerHTML = "gold : " + gold;
				document.getElementById("str").innerHTML = "Strength : " + str;
				document.getElementById("int").innerHTML = "Intel : " + int;
				document.getElementById("cha").innerHTML = "Charisma : " + cha;
				document.getElementById("luck").innerHTML = "Luck : " + luck;
				
		  }
		  
		function dissapear(){ 
		  		$('#statementdiv').fadeOut(0);
		  }
		  
		function fadeitin(){ 
				$("#statementdiv").fadeIn(800);
		  }
				
		
		
		
////////// Intro //////////
		
		function funcIntro(){ 
			document.getElementById("Statement").innerHTML = intro.toString();
			funcIntroA1();
			
		}
			function funcIntroA1(){
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = introA1.toString();
					document.getElementById("Button1").onclick = function () { funcS1() };
					//document.onClick.$("p").fadeOut("5000"); - attempt at fade
					
				}
		
		
	////////// S1 = "'Are you in there " + name + "!? If I catch you with my daughter I'll kill you!!' You notice the beautiful brunette in the bed." //////////
		
		function funcS1(){ 
			
			document.getElementById("Statement").innerHTML = S1.toString();
			funcS1A1();
			funcS1A2();
			funcS1A3();
			
			
		}
		
			function funcS1A1(){ // stay + die
				document.getElementById("Button1").style.backgroundColor = buttoncolor;
				document.getElementById("Button1").innerHTML = S1A1.toString();
				document.getElementById("Button1").onclick = function () { funcS2() };
				
			}
			
			function funcS1A2(){ //leave through window
				document.getElementById("Button2").style.backgroundColor = buttoncolor;
				document.getElementById("Button2").innerHTML = S1A2.toString();
				document.getElementById("Button2").onclick = function () { funcS3() };
			}
			
			function funcS1A3(){ //leave through window with dagger
				document.getElementById("Button3").style.backgroundColor = buttoncolor;
				document.getElementById("Button3").innerHTML = S1A3.toString();
				document.getElementById("Button3").onclick = function () { funcS3();
				small_dagger = true;
				document.getElementById("small_dagger").innerHTML = "Small Dagger";
				};
				
			}
			
			
	////////// S2. You are dead.//////////		
		
		function funcS2(){
			document.getElementById("Statement").innerHTML = S2.toString();
			clearButtons();
			restart1();
		}
		
		
////////// S3 = "You jump out of the window on to some crates and make your way down an alley and dissapear into a marketplace. You can hear the shouting in the bedroom you came from.//////////
		
		function funcS3(){
			document.getElementById("Statement").innerHTML = S3.toString();
			clearButtons();
			funcS3A1();
			funcS3A2();
			}
			
				function funcS3A1(){ // to s4
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = S3A1.toString();
					document.getElementById("Button1").onclick = function () { funcS4() };
				}
				
				function funcS3A2(){ //to inn
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = S3A2.toString();
					document.getElementById("Button2").onclick = function () { funcS10() };
				}
				
				
			
//////////S4 = "In your haste you run into a large man who mistakes you for a thief based on your scruffy looks and mischievous smile. He accuses you of being a pickpocket.//////////
		
		function funcS4(){
			document.getElementById("Statement").innerHTML = S4.toString();
			clearButtons();
			funcS4A1();
			funcS4A2();
			}
			
				function funcS4A1(){ //to s6 // harbor guilt
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = S4A1.toString();
					document.getElementById("Button1").onclick = function () { funcS6() };
				}
				
				function funcS4A2(){ // to s5
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = S4A2.toString();
					document.getElementById("Button2").onclick = function () { funcS5() };
				}		
		
////////// S5 = "He's not convinced, he still thinks you're up to something. He threatens to call the guards to search you and since he looks like a wealthy fat merchant and you look like a thief, who are they going to believe?""//////////
		
		function funcS5(){
			document.getElementById("Statement").innerHTML = S5.toString();
			clearButtons();
			funcS5A1();
			funcS5A2();
			}
			
				function funcS5A1(){ //leads to S8. lose 10g
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = S5A1.toString();
					document.getElementById("Button1").onclick = function () { funcS8() };
				}
				
				function funcS5A2(){ //get money // s7
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = S5A2.toString();
					document.getElementById("Button2").onclick = function () { funcS7() };
				}		
		
////////// S6 = "He takes your running as an indication of guilt and calls the guards to chase after you. They are quick but years of running away have taught you the ins and outs of the city and you make your way to the harbor where there are lots of places to hide and blend in.";//////////
		
		function funcS6(){
			document.getElementById("Statement").innerHTML = S6.toString();
			clearButtons();
			funcS6A1();
			funcS6A2();
			}
			
				function funcS6A1(){ //back door of shady hound
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = S6A1.toString();
					document.getElementById("Button1").onclick = function () { funcS10() };
					
				}
				
				function funcS6A2(){ // go near sailors
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = S6A2.toString();
					document.getElementById("Button2").onclick = function () { funcS9() };
					
				}
	
////////// S7 = "The man looks fearful now and hastily hands over what he has before leaving quickly. You are now " + plusgold1 + " richer and that should be useful in the future. You leave and think about where to spend your newfound gold."//////////
		
		function funcS7(){
			gold = gold + plusgold1;
			document.getElementById("Statement").innerHTML = S7.toString();
			clearButtons();
			funcS7A1();
			funcS7A2();
			}
			
				function funcS7A1(){ //to inn
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = S7A1.toString();
					document.getElementById("Button1").onclick = function () { funcS10() };
					
				}	
				
				function funcS7A2(){ //to harbor
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = S7A2.toString();
					document.getElementById("Button2").onclick = function () { funcS9() };
				}				
				
				
////////// S8 = "The fat man muscles you into giving him 10 gold and you concede because you're not looking for anymore trouble today. You go your seperate ways he heads back to the market and you head.."//////////
		
		function funcS8(){
			gold = gold -10;
			document.getElementById("Statement").innerHTML = S8.toString();
			clearButtons();
			funcS8A1();
			funcS8A2();
			}
			
				function funcS8A1(){ //to inn
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = S8A1.toString();
					document.getElementById("Button1").onclick = function () { funcS10() };
				}			
				
				function funcS8A2(){ //to harbor
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = S8A2.toString();
					document.getElementById("Button2").onclick = function () { funcS9() };
				}		
				
					
////////// S9	="You wander through the markets by the bulky sailors hardened by the sea then a voice whispers to you and out of the corner of your eye you see a man in the shadows of an entry. You warily walk over to see what he has to say.//////////
		
		function funcS9(){
			document.getElementById("Statement").innerHTML = S9.toString();
			clearButtons();
			funcS9A1();
			funcS9A2();
			}
			
				function funcS9A1(){ //to inn
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = S9A1.toString();
					document.getElementById("Button1").onclick = function () { funcS9S1() };
				}			
				
				function funcS9A2(){ //to harbor
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = S9A2.toString();
					document.getElementById("Button2").onclick = function () { funcS9S1() };
				}		
				
////////// S9S1 creepy//////////
		
		function funcS9S1(){
			document.getElementById("Statement").innerHTML = S9S1.toString();
			clearButtons();
			funcS9S1A1();
			funcS9S1A2();
			}
			
				function funcS9S1A1(){ //to inn
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = S9S1A1.toString();
					document.getElementById("Button1").onclick = function () { funcS9S1() };
				}			
				
				function funcS9S1A2(){ //to harbor
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = S9S1A2.toString();
					document.getElementById("Button2").onclick = function () { funcS9S1() };
				}		
				
////////// S10 = "You arrive at the Shady Hound, a notoriously treacherous place filled with sailors and thieves but the ale is good and the food is edible (most of the time). *******"//////////
		
		function funcS10(){
			document.getElementById("Statement").innerHTML = S10.toString();
			clearButtons();
			funcS10A1();
			funcS10A2();
			}
			
				function funcS10A1(){ //to inn
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = S10A1.toString();
					document.getElementById("Button1").onclick = function () { funcS10S1() };
				}			
				
				function funcS10A2(){ //to harbor
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = S10A2.toString();
					document.getElementById("Button2").onclick = function () { funcS10S1() };
				}	