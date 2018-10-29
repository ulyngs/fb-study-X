interventionStart = new Date('2018-10-29T09:00:00');
interventionEnd = new Date('2018-11-12T09:00:00');
studyEnd = new Date('2018-11-25T17:00:00');

// console.log("start is " + interventionStart + " and end is " + interventionEnd + ". Current time is " + new Date() + ". study end is " + studyEnd);
// console.log(new Date() > interventionStart);
// console.log(new Date() < interventionEnd);

if (new Date() > interventionStart && new Date() < interventionEnd) {
  
  	store = window.localStorage; //access HTML5 local storage
	if (store.getItem('hasSeenPopup') != 1) { //used 1 because true/false was behaving strangely
		//alert("Dear participant,\n\nCongratulations on finishing the first two weeks of the study!\n\nWe have changed your Facebook experience a little. Please get in touch if this causes any problems.\n\nHuman Centered Computing, University of Oxford");
		alert("Dear participant,\nCongratulations on finishing the first two weeks of the study!\n\nWe have changed Facebook a little: The background color of the site is now white.\n\nPlease get in touch if this causes any problems,\nHuman Centered Computing, University of Oxford");
		store.setItem('hasSeenPopup', 1); //similar syntax to the safari api we tried to use before
	}

  var node = document.createElement('style');
  node.innerHTML = " #globalContainer, #contentCol, ._5vb_, ._5vb_ #contentCol, #u_0_1s, ._4oes, ._51x_, #u_0_j, ._li, body { background-color: white !important; }"
  document.head.appendChild(node); 
  // document.body.appendChild(node); 

}

if (new Date() > studyEnd) {

	store = window.localStorage; //access HTML5 local storage
	if (store.getItem('hasSeenEndPopup') != 1) { //used 1 because true/false was behaving strangely
		alert("Dear participant,\n\nThank you so much for taking part!\n\nWe’ve emailed you about scheduling a time to finish the study and collect your compensation.\n\nHuman Centered Computing, University of Oxford");
		store.setItem('hasSeenEndPopup', 1); //similar syntax to the safari api we tried to use before
	}

}