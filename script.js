//spin dice button on click
const diceButton = document.getElementById("dice-btn");

diceButton.onclick = () => {
      diceButton.style.boxShadow = "0px 0px 20px hsl(150, 100%, 66%)"
      diceButton.style.transition = "2s";
      diceButton.style.transform = "rotate(1turn)";
      getAdvice();
}


//fetch random advice
const adviceNum = document.getElementById("advice-number");
const randomAdvice = document.getElementById("quote")

const getAdvice = async () => {
      const endpoint = 'https://api.adviceslip.com/advice'
      try {
            const response = await fetch(endpoint);
            if (response.ok) {
                  const JSresponse = await response.json()
                  randomAdvice.innerHTML = JSresponse.slip.advice;
                  adviceNum.innerHTML = JSresponse.slip.id;
                  diceButton.style.boxShadow = "none"
                  diceButton.style.transform = "initial";
                  diceButton.style.transition = "none";
            }
      } catch (error) {
             console.log(error)
       }
}

getAdvice();

