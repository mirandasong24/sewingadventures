let submitButton = document.querySelector('#submit-button');
//console.log(submitButton);

function clickListener(event) {
	event.preventDefault();
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;

	console.log('email: ', emailText, 'message: ', messageText);
	
	function emailValidate(email) {
		return email.includes('@');
	}

	if (emailValidate(emailText) !== true) {
		console.log('The email address must contain @');
		return false;
	}
	console.log('Thanks for your message!');

	function validateNSFW(message) {
		return message.includes('crap');
	}

	if (validateNSFW(messageText) !== true) {
		console.log('The message is safe for work.');
	}
	else
		console.log('This message is not safe for work.');

	alert("We received your message!");
}

submitButton.addEventListener('click', clickListener);