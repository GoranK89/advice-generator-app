'use strict';

const adviceID = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const diceBtn = document.querySelector('.dice-container');

const displayAdvice = async function () {
  try {
    const request = await fetch('	https://api.adviceslip.com/advice', {
      cache: 'no-cache',
    });
    const data = await request.json();
    const getAdviceID = data.slip.id;
    const getAdviceText = data.slip.advice;
    adviceID.textContent = `ADVICE #${getAdviceID}`;
    adviceText.textContent = `"${getAdviceText}"`;

    // on click run the function
    diceBtn.addEventListener('click', displayAdvice);
  } catch (error) {
    console.log(console.log(`Something went wrong! 💥 ${error}`));
  }
};

displayAdvice();
