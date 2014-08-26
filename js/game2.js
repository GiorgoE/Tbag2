		
/////////////NAME AND STATS/////////////

		//var name = prompt("What is your name?");
		var name = "George";

////////////ITEMS////////////////////////

		var gold = 101;
		
		
//////////////GAME VARS////////////////

		var clear = "";//clears field
		var dead = "You died.";
		var restart = "Tap here to try again";//restarts game
		var win = "Congratulations you have beaten this preview of the game!"
		
/////////////////STORY//////////////////////////////////
		
		var intro = "You awaken in a large bed, the sun pouring softly through the curtains. You can't remember how you got here but it certainly isn't your bed. Suddenly there's a raptuous knock on the door there's shouting to open up.";
			var introA1 = "Tap here to begin the game.";
			
		var S1 = "What are you doing here " + name + "?" ;
			var S1A1 = "I want to learn to code."; //leads to S2
			var S1A2 = "I want to go on an adventure."; //leads to S3
		
		var S2 = "You are dead."; //die
		
		
		var S3 = "Cool. Come with me! </br> What would you like to do?";
			var S3A1 = "Kill dragons!";//leads to s4
			var S3A2 = "Fuck Bitches. Get Money.";//die
			
		var S4 = "Alright there's a dragon. How do you kill it?";
			var S4A1 = "Attack with sword.";//die. leads to S2
			var S4A2 = "Shoot dragon with conveniently placed canon.";//You win. leads to SWIN
			
		var S5 = "You enter a room with a beautiful girl she tells you that you can choose to either make love to her OR leave with a random amount of gold. Which do you choose?"
			var S5A1 = "Fuck bitches.";//leads to s6. lose all money
			var S5A2 = "Get money.";//leads to s7. gives you money
			
		var S6 = "You made love to the beautiful woman and she made off with whatever gold you have. You are now significantly worse off in the world";
			var S6A1 = "Continue";
	 
		var plusgold1 = Math.floor((Math.random() * 1000) + 1);
		var S7 = "You are now " + plusgold1 + " richer. That should be useful in helping you survive";
			var S7A1 = "Continue";
		
		var S8 = "Next part of story";
		
	 ///////// CORE FUNCTIONS ///////////
	 
	 
		function clearButtons(){
			document.getElementById("Button1").innerHTML = clear.toString();
			document.getElementById("Button2").innerHTML = clear.toString();
		}
		
		
		function restart1(){
			document.getElementById("Button1").innerHTML = restart.toString();
			document.getElementById("Button1").onclick = function () { funcS1() };		
		}
		

		function funcSWIN() {
			clearButtons();
			document.getElementById("Statement").innerHTML = win.toString();
			document.getElementById("Button1").innerHTML = restart.toString();
			document.getElementById("Button1").onclick = function () { funcS1() };
		}
        
			
			
		function fadeitoutandin(){ 
		  		$('#statementdiv').fadeOut(0);
				$("#statementdiv").fadeIn(800);
				document.getElementById("gold").innerHTML = "gold : " + gold;
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
					document.getElementById("Button1").innerHTML = introA1.toString();
					document.getElementById("Button1").onclick = function () { funcS1() };
					//document.onClick.$("p").fadeOut("5000"); - attempt at fade
					
				}
		
		
	////////// S1. What are you doing here? //////////
		
		function funcS1(){ 
			
			document.getElementById("Statement").innerHTML = S1.toString();
			funcS1A1();
			funcS1A2();
			
		}
		
			function funcS1A1(){
				document.getElementById("Button1").innerHTML = S1A1.toString();
				document.getElementById("Button1").onclick = function () { funcS2() };
				
			}
			
			function funcS1A2(){
				document.getElementById("Button2").innerHTML = S1A2.toString();
				document.getElementById("Button2").onclick = function () { funcS3() };
			}
			
			
	////////// S2. You are dead.//////////		
		
		function funcS2(){
			document.getElementById("Statement").innerHTML = S2.toString();
			clearButtons();
			restart1();
		}
		
		
////////// S3. Cool. Come with me! What would you like to do?//////////
		
		function funcS3(){
			document.getElementById("Statement").innerHTML = S3.toString();
			clearButtons();
			funcS3A1();
			funcS3A2();
			}
			
				function funcS3A1(){
					document.getElementById("Button1").innerHTML = S3A1.toString();
					document.getElementById("Button1").onclick = function () { funcS4() };
				}
				
				function funcS3A2(){ //fuck bitches. get money
					document.getElementById("Button2").innerHTML = S3A2.toString();
					document.getElementById("Button2").onclick = function () { funcS5() };
				}
				
				
			
////////// S4. Alright there's a dragon. How do you kill it?//////////
		
		function funcS4(){
			document.getElementById("Statement").innerHTML = S4.toString();
			clearButtons();
			funcS4A1();
			funcS4A2();
			}
			
				function funcS4A1(){
					document.getElementById("Button1").innerHTML = S4A1.toString();
					document.getElementById("Button1").onclick = function () { funcS2() };
				}
				
				function funcS4A2(){
					document.getElementById("Button2").innerHTML = S4A2.toString();
					document.getElementById("Button2").onclick = function () { funcSWIN() };
				}		
		
////////// S5 = "You enter a room with a beautiful girl she tells you that you can choose to either make love to her OR leave with a random amount of gold. Which do you choose?"//////////
		
		function funcS5(){
			document.getElementById("Statement").innerHTML = S5.toString();
			clearButtons();
			funcS5A1();
			funcS5A2();
			}
			
				function funcS5A1(){ //fuck bitches // s6
					document.getElementById("Button1").innerHTML = S5A1.toString();
					document.getElementById("Button1").onclick = function () { funcS6() };
				}
				
				function funcS5A2(){ //get money // s7
					document.getElementById("Button2").innerHTML = S5A2.toString();
					document.getElementById("Button2").onclick = function () { funcS7() };
				}		
		
////////// var S6 = "You made love to the beautiful woman and she made off with whatever gold you have. You are now significantly worse off in the world";//////////
		
		function funcS6(){
			document.getElementById("Statement").innerHTML = S6.toString();
			clearButtons();
			funcS6A1();
			}
			
				function funcS6A1(){ //continue poorer
					gold = gold - 100;
					document.getElementById("Button1").innerHTML = S6A1.toString();
					document.getElementById("Button1").onclick = function () { funcS8() };
					
				}
	
////////// var S7 = "You are now " + plusgold1 + " richer. That should be useful in helping you survive";//////////
		
		function funcS7(){
			gold = gold + plusgold1;
			document.getElementById("Statement").innerHTML = S7.toString();
			clearButtons();
			funcS7A1();
			}
			
				function funcS7A1(){ //continue richer
					document.getElementById("Button1").innerHTML = S7A1.toString();
					document.getElementById("Button1").onclick = function () { funcS8() };
					
				}			
				
				
////////// var S8 Continue;//////////
		
		function funcS8(){
			document.getElementById("Statement").innerHTML = S8.toString();
			clearButtons();
			funcS8A1();
			}
			
				function funcS8A1(){ //continue
					document.getElementById("Button1").innerHTML = S8A1.toString();
					document.getElementById("Button1").onclick = function () { funcS9() };
				}			
				
				
					
		