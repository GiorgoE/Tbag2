		
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
			var introa = "Tap here to begin the game.";
			
		var s1 ="'Are you in there " + name + "!? If I catch you with my daughter I'll kill you!!' Only then do you notice the beautiful brunette in the bed who has now roused from her slumber.";
			var s1a = "'Bring it on!'"; //leads to s2
			var s1b = "Time to go. Kiss the girl and leave through the window."; //leads to s2i
			var s1c = "Time to go. Pick up the dagger and jump through the window";//leads to s2i
		
		var s2 = "The brunette girls father bursts in the door and kills you. You are dead."; //die
		
		
		var s2i = "You jump out of the window on to some crates and make your way down an alley and dissapear into a marketplace. You can hear the shouting in the bedroom you came from.";
			var s2ia = "Keep running to try and get as far away as possible.";//leads to s3
			var s2ib = "Try to find the nearest inn";//leads to s3i
			
		var s3 = "In your haste you run into a large man who mistakes you for a thief based on your scruffy looks and mischievous smile. He accuses you of being a pickpocket.";
			var s3a = "Try to run!";//leads to s4
			var s3b = "Explain that you are not a thief, and empty your pockets.";//leads to s4i
			
		var s3i = "You arrive at the Shady Hound, a notoriously treacherous place filled with sailors and thieves but the ale is good and the food is edible (most of the time). You grab a meal and a drink and leave feeling better. (+1 Strength)";
			var s3ia = "Time to head down to the harbour now to see what mischief I can get up to I think."; // to s6
			
			
			
		var s4i = "He's not convinced, he still thinks you're up to something. He threatens to call the guards to search you and since he looks like a wealthy fat merchant and you look like a thief, who are they going to believe?"
			var s4ia = "Offer to pay him 5 gold to get lost and leave you alone";//leads to s5. lose 5g
			var s4ib = "Threaten him to keep his fat mouth shut and give you whatever he's got or you'll show how much painful a quick knife to the stomach can be..";//leads to s5i. gives you money
		
		
		//harbor	
		var s4 = "He takes your running as an indication of guilt and calls the guards to chase after you. They are quick but years of running away have taught you the ins and outs of the city and you make your way to the harbor where there are lots of places to hide and blend in.";
			var s4a = "Run into the backdoor of the nearest building there."; // leads to back door of the Shady hound
			var s4b = "Hide by the dodgy looking sailor men"; // leads to talking to men.
	 
		var plusgold1 = Math.floor((Math.random() * 100) + 1);
		
		var s5i = "The man looks fearful now and hastily hands over what he has before leaving quickly. You are now " + plusgold1 + " richer and that should be useful in the future. You leave and think about where to spend your newfound gold.";
			var s5ia = "The inn of course!"; // Leads to s3i with the inn
			var s5ib = "Take a walk around the harbor and see what opportunities arise because you're feeling lucky today.";//s6 //leads to harbor
			
		var s5 = "The fat man muscles you into giving him 10 gold and you concede because you're not looking for anymore trouble today. You go your seperate ways he heads back to the market and you head..";
			 var s5a = "To the inn, to drown away your sorrows.";//leads to s3i
			 var s5b = "To the harbor to see if you can make some of that lost money back."; //leads to s6
		
		//harbor
		var s6	="You wander through the shipments by the bulky sailors hardened by the sea then a voice whispers to you and out of the corner of your eye you see a man in the shadows of an entry. You warily walk over to see what he has to say.";
			var s6a ="What do you want?";//leads to s6.1
			var s6b ="...";// leads to s6.1
			
		var s7 ="I've seen you round the town today, you look like someone who knows his way around the shadows. How'd you feel like making some money?"; //creepy man talking
			var s7a ="I'm listening.";
			var s7b ="No thanks, not interested.";
		
		var s8 = "Hear me out kid, I can make it worth your while...";
			var s8a ="What is it old man?";
			var s8b ="No.";
			
		
		var s9 = "The name's Falanar and I have a proposition for ya. You help me get something back that belongs to me and if you succeed I'll pay you handsomly for your efforts";
			var s9a ="How handsomly are we talking here?";
			var s9b ="You want me to steal something?";
			var s9c ="What's the catch?";
			
		var chance1 = (cha * 10);
		var chance1b = Math.floor((Math.random() * 100) + 1);
			
		var s10 = "Aye, I can pay ya 30 gold for yer time.";
			var s10a ="Alright then now we're talking.";
			var s10b ="(" + chance1 + " % chance of success) Not enough, I'm thinking more like 50.";
	
		
		var s10i = "Not much, it's kept in a box above the mantlepiece in the living room. Shouldn't be a problem for someone such as yourself";
			var s10ia ="";
			
		var s11 = "(SUCCESS) Okay, 50 then. But you best be quiet about it.";
		
		var s11i = "(FAIL) I don't think so kid, it's 30 or nothing.";
		
		
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
		//	document.getElementById("Button1").onclick = function () { funcs4i() };		
		//} 
		

		function funcSWIN() {
			clearButtons();
			document.getElementById("Statement").innerHTML = win.toString();
			document.getElementById("Button1").innerHTML = restart.toString();
			document.getElementById("Button1").onclick = function () { funcs1() };
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
		
		
		function dropdown2(){ 
		    var disp2 = document.getElementsByClassName('attr');
			for(i=0; i<disp2.length; i++) 
			{
				if (disp2[i].style.display != 'none')
				{
						disp2[i].style.display = 'none';
				} else {
						disp2[i].style.display = 'block';
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
			funcIntroa();
			
		}
			function funcIntroa(){
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = introa.toString();
					document.getElementById("Button1").onclick = function () { funcs1() };
					//document.onClick.$("p").fadeOut("5000"); - attempt at fade
					
				}
		
		
	////////// s1 = "'Are you in there " + name + "!? If I catch you with my daughter I'll kill you!!' You notice the beautiful brunette in the bed." //////////
		
		function funcs1(){ 
			
			document.getElementById("Statement").innerHTML = s1.toString();
			funcs1a();
			funcs1b();
			funcs1c();
			
			
		}
		
			function funcs1a(){ // stay + die
				document.getElementById("Button1").style.backgroundColor = buttoncolor;
				document.getElementById("Button1").innerHTML = s1a.toString();
				document.getElementById("Button1").onclick = function () { funcs2() };
				
			}
			
			function funcs1b(){ //leave through window
				document.getElementById("Button2").style.backgroundColor = buttoncolor;
				document.getElementById("Button2").innerHTML = s1b.toString();
				document.getElementById("Button2").onclick = function () { funcs2i() };
			}
			
			function funcs1c(){ //leave through window with dagger
				document.getElementById("Button3").style.backgroundColor = buttoncolor;
				document.getElementById("Button3").innerHTML = s1c.toString();
				document.getElementById("Button3").onclick = function () { funcs2i();
				small_dagger = true;
				document.getElementById("small_dagger").innerHTML = "Small Dagger";
				};
				
			}
			
			
	////////// s2. You are dead.//////////		
		
		function funcs2(){
			document.getElementById("Statement").innerHTML = s2.toString();
			clearButtons();
			restart1();
		}
		
		
////////// s2i = "You jump out of the window on to some crates and make your way down an alley and dissapear into a marketplace. You can hear the shouting in the bedroom you came from.//////////
		
		function funcs2i(){
			document.getElementById("Statement").innerHTML = s2i.toString();
			clearButtons();
			funcs2ia();
			funcs2ib();
			}
			
				function funcs2ia(){ // to s3
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s2ia.toString();
					document.getElementById("Button1").onclick = function () { funcs3() };
				}
				
				function funcs2ib(){ //to inn
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = s2ib.toString();
					document.getElementById("Button2").onclick = function () { funcs3i() };
				}
				
				
			
//////////s3 = "In your haste you run into a large man who mistakes you for a thief based on your scruffy looks and mischievous smile. He accuses you of being a pickpocket.//////////
		
		function funcs3(){
			document.getElementById("Statement").innerHTML = s3.toString();
			clearButtons();
			funcs3a();
			funcs3b();
			}
			
				function funcs3a(){ //to s4 // harbor guilt
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s3a.toString();
					document.getElementById("Button1").onclick = function () { funcs4() };
				}
				
				function funcs3b(){ // to s4i
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = s3b.toString();
					document.getElementById("Button2").onclick = function () { funcs4i() };
				}		
		
		
		////////// s3i = "You arrive at the Shady Hound, a notoriously treacherous place filled with sailors and thieves but the ale is good and the food is edible (most of the time). *******"//////////
		
		function funcs3i(){
			document.getElementById("Statement").innerHTML = s3i.toString();
			clearButtons();
			funcs3ia();
			str = str + 1;
			}
			
				function funcs3ia(){ //to harbor
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s3ia.toString();
					document.getElementById("Button1").onclick = function () { funcs6() };
					
				}			
				
				
		
		
////////// s4i = "He's not convinced, he still thinks you're up to something. He threatens to call the guards to search you and since he looks like a wealthy fat merchant and you look like a thief, who are they going to believe?""//////////
		
		function funcs4i(){
			document.getElementById("Statement").innerHTML = s4i.toString();
			clearButtons();
			funcs4ia();
			funcs4ib();
			}
			
				function funcs4ia(){ //leads to s5. lose 10g
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s4ia.toString();
					document.getElementById("Button1").onclick = function () { funcs5() };
				}
				
				function funcs4ib(){ //get money // s5i
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = s4ib.toString();
					document.getElementById("Button2").onclick = function () { funcs5i() };
				}		
		
////////// s4 = "He takes your running as an indication of guilt and calls the guards to chase after you. They are quick but years of running away have taught you the ins and outs of the city and you make your way to the harbor where there are lots of places to hide and blend in.";//////////
		
		function funcs4(){
			document.getElementById("Statement").innerHTML = s4.toString();
			clearButtons();
			funcs4a();
			funcs4b();
			}
			
				function funcs4a(){ //back door of shady hound
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s4a.toString();
					document.getElementById("Button1").onclick = function () { funcs3i() };
					
				}
				
				function funcs4b(){ // go near sailors
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = s4b.toString();
					document.getElementById("Button2").onclick = function () { funcs6() };
					
				}
	
////////// s5i = "The man looks fearful now and hastily hands over what he has before leaving quickly. You are now " + plusgold1 + " richer and that should be useful in the future. You leave and think about where to spend your newfound gold."//////////
		
		function funcs5i(){
			gold = gold + plusgold1;
			document.getElementById("Statement").innerHTML = s5i.toString();
			clearButtons();
			funcs5ia();
			funcs5ib();
			}
			
				function funcs5ia(){ //to inn
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s5ia.toString();
					document.getElementById("Button1").onclick = function () { funcs3i() };
					
				}	
				
				function funcs5ib(){ //to harbor
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = s5ib.toString();
					document.getElementById("Button2").onclick = function () { funcs6() };
				}				
				
				
////////// s5 = "The fat man muscles you into giving him 10 gold and you concede because you're not looking for anymore trouble today. You go your seperate ways he heads back to the market and you head.."//////////
		
		function funcs5(){
			gold = gold -10;
			document.getElementById("Statement").innerHTML = s5.toString();
			clearButtons();
			funcs5a();
			funcs5b();
			}
			
				function funcs5a(){ //to inn
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s5a.toString();
					document.getElementById("Button1").onclick = function () { funcs3i() };
				}			
				
				function funcs5b(){ //to harbor
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = s5b.toString();
					document.getElementById("Button2").onclick = function () { funcs6() };
				}		
				
					
////////// s6	="You wander through the markets by the bulky sailors hardened by the sea then a voice whispers to you and out of the corner of your eye you see a man in the shadows of an entry. You warily walk over to see what he has to say.//////////
		
		function funcs6(){
			document.getElementById("Statement").innerHTML = s6.toString();
			clearButtons();
			funcs6a();
			funcs6b();
			}
			
				function funcs6a(){ //to inn
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s6a.toString();
					document.getElementById("Button1").onclick = function () { funcs7() };
				}			
				
				function funcs6b(){ //to harbor
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = s6b.toString();
					document.getElementById("Button2").onclick = function () { funcs7() };
				}		
				
////////// s7 creepy//////////
		
		function funcs7(){
			document.getElementById("Statement").innerHTML = s7.toString();
			clearButtons();
			funcs7a();
			funcs7b();
			}
			
				function funcs7a(){ //to inn
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s7a.toString();
					document.getElementById("Button1").onclick = function () { funcs9() };
				}			
				
				function funcs7b(){ //to harbor
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = s7b.toString();
					document.getElementById("Button2").onclick = function () { funcs8() };
				}		
				
				
////////// s8 hear me out//////////
		
		function funcs8(){
			document.getElementById("Statement").innerHTML = s8.toString();
			clearButtons();
			funcs8a();
			funcs8b();
			}
			
				function funcs8a(){ //to s9
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s8a.toString();
					document.getElementById("Button1").onclick = function () { funcs9() };
				}			
				
				function funcs8b(){ //need to fix
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = s8b.toString();
					document.getElementById("Button2").onclick = function () { funcs9() };
				}		
				

	////////// s9 = Names Falanar//////////
		
		function funcs9(){ 
			
			document.getElementById("Statement").innerHTML = s9.toString();
			funcs9a();
			funcs9b();
			funcs9c();
			
			
		}
		
			function funcs9a(){ // stay + die
				document.getElementById("Button1").style.backgroundColor = buttoncolor;
				document.getElementById("Button1").innerHTML = s9a.toString();
				document.getElementById("Button1").onclick = function () { funcs10() };
				
			}
			
			function funcs9b(){ //leave through window
				document.getElementById("Button2").style.backgroundColor = buttoncolor;
				document.getElementById("Button2").innerHTML = s9b.toString();
				document.getElementById("Button2").onclick = function () { funcs10() };
			}
			
			function funcs9c(){ //leave through window with dagger
				document.getElementById("Button3").style.backgroundColor = buttoncolor;
				document.getElementById("Button3").innerHTML = s9c.toString();
				document.getElementById("Button3").onclick = function () { funcs10i();
				}
			}
			
////////// s10 hear me out//////////
		
		function funcs10(){
			document.getElementById("Statement").innerHTML = s10.toString();
			clearButtons();
			funcs10a();
			funcs10b();
			}
			
				function funcs10a(){ //to ???
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s10a.toString();
					document.getElementById("Button1").onclick = function () { funcs9() };
				}			
				
				
				
				function funcs10b(){ //to s11 or s11i
					document.getElementById("Button2").style.backgroundColor = buttoncolor;
					document.getElementById("Button2").innerHTML = s10b.toString();
					document.getElementById("Button2").onclick = function ()
					{ 
					if (chance1 >= chance1b) 
					{
						funcs11() 
						
					}else{
						
						funcs11i()
					}
					};
				}
				
			
				
				
////////// s11 success//////////
		
		function funcs11(){
			document.getElementById("Statement").innerHTML = s11.toString();
			clearButtons();
			funcs10a();
			}
			
				function funcs10a(){ //to ??
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s10a.toString();
					document.getElementById("Button1").onclick = function () { funcSWIN() };
				}			
				
////////// s11i failure//////////
		
		function funcs11(){
			document.getElementById("Statement").innerHTML = s11.toString();
			clearButtons();
			funcs10a();
			funcs10ib();

			}
			
				function funcs10a(){ //to ??
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s10a.toString();
					document.getElementById("Button1").onclick = function () { funcSWIN() };
				}	
				
				function funcs10ib(){ //to ??
					document.getElementById("Button1").style.backgroundColor = buttoncolor;
					document.getElementById("Button1").innerHTML = s10a.toString();
					document.getElementById("Button1").onclick = function () { funcSWIN() };
				}	