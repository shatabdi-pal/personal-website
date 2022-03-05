const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const error = document.getElementById('error');
const thanks = document.getElementById('thanks');


username.addEventListener('invalid', handleInvalid);
email.addEventListener('invalid', handleInvalid);
subject.addEventListener('invalid', handleInvalid);
message.addEventListener('invalid', handleInvalid);
form.addEventListener('submit', handleSubmit);

function handleInvalid(event) {
  error.style.color='red';
  error.style.fontWeight='bold';
  error.removeAttribute('hidden');
}

function handleSubmit(event) {
  
  form.setAttribute('hidden', '');
  thanks.removeAttribute('hidden');

  event.preventDefault();
}




