// Check page title
if (document.title.indexOf("Google") != -1) {
    
		// change google logo to CP logo    
    var logo = document.getElementById('hplogo');
    var imgURL = chrome.extension.getURL("res/cp.jpg");
		logo.src = imgURL; logo.width = 336; logo.height = 95; 

		// hide "I'm feeling lucky" button
		document.getElementById('gbqfbb').style.display = 'none';
		
		// change text & style of search button
		var sbut= document.getElementById('gbqfba');
		var stext= document.getElementById('gbqfsa');

		sbut.style.background = "#0074D9";
		stext.style.color = "#FFF";
		stext.style.fontweight = "300";
		stext.style.fontsize = "1.25em";
		stext.textContent = "search the interwebs";
		
		// clone search button & change id to create secondary button
		var node = document.getElementById("gbqfbwa").firstChild.cloneNode(true);
		node.id = "cloned_button";
		document.getElementById("gbqfbwa").appendChild(node);
		
		// restyle cloned button, text, and click action
		var abut = document.getElementById("cloned_button")
		var atext = abut.firstChild;

		abut.style.background = "#FF4136";
		atext.id = "cloned_button_text";
		atext.textContent = "cats";
		
		abut.onclick = function(){
			//alert("derp");
			// everyone loves cats. or something like that.
			window.location = "http://thecatapi.com/api/images/get?format=src&type=gif";
		};

}