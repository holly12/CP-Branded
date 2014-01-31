// Check page title

if (document.title.indexOf("Google") != -1) {
    // change google logo to CP logo    
    
    var logo = document.getElementById('hplogo');
    var imgURL = chrome.extension.getURL("res/cp.jpg");
    
		logo.src = imgURL;
  	logo.width = 336; 
  	logo.height = 95; 

		// hide "I'm feeling lucky" button
		
		//var lucky = document.getElementById('gbqfbb');
		document.getElementById('gbqfbb').style.display = 'none';



}