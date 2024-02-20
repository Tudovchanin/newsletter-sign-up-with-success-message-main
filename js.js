

function showConfirmationMessage() {
	const card =  document.querySelector('.card');
  const confirmationMessage = document.querySelector('.confirmation-message--hidden');
card.classList.add('card--hidden')
confirmationMessage.classList.remove('confirmation-message--hidden')

}



function validateEmail(event) {
	event.preventDefault();

	const error = document.querySelector('.text-container__text--hidden')
	const emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
	const emailInput = event.currentTarget.querySelector('.form__input').value;

	if (!emailPattern.test(emailInput)) {
		error.style.display = 'block'
		return
	}
	// event.currentTarget.submit();
	showConfirmationMessage()
}

function dissmisMesage () {
	const confirmationMessage = document.querySelector('.confirmation-message');
	confirmationMessage.classList.add('confirmation-message--hidden')
}