'use strict';

const emailCheck = () => {
  const emailAddress = document.getElementById('email').value;
  const emailInput = document.getElementById('email');
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
  if (emailAddress.match(mailFormat)) {
    emailInput.classList.remove('signup__form__input__holder--red');
    document.getElementById('emailWarning').classList.add('hidden');
  } else if (!emailAddress.match(mailFormat)) {
    emailInput.classList.add('signup__form__input__holder--red');
    document.getElementById('emailWarning').classList.remove('hidden');
  }
}

const fieldCheck = (valueToCheck) => {
  const valueToValidate = document.getElementById(valueToCheck).value;
  const valueToValidateInput = document.getElementById(valueToCheck);
  const warningElement = `${valueToCheck}Warning`;
 
  if (valueToValidate.length >= 1) {
    valueToValidateInput.classList.remove('signup__form__input__holder--red');
    document.getElementById(warningElement).classList.add('hidden');
  } else if (valueToValidate < 1) {
    valueToValidateInput.classList.add('signup__form__input__holder--red');
    document.getElementById(warningElement).classList.remove('hidden');
  }
}

const checkTrial = (event) => {
  event.preventDefault();
  emailCheck();
  fieldCheck('firstname');
  fieldCheck('lastname');
  fieldCheck('password');
}

const trialClick = document.getElementById('claimTrial');

trialClick.addEventListener("click", checkTrial);