//spin dice button on click
const diceButton = document.getElementById("dice-btn");

diceButton.onclick = () => {
      diceButton.style.transition = "box-shadow 1s, transform 1.5s linear";
      diceButton.style.boxShadow = "0px 0px 20px hsl(150, 100%, 66%)"
      diceButton.style.transform = "rotate(1turn)";
      getAdvice();
}


//fetch random advice
const adviceNum = document.getElementById("advice-number");
const randomAdvice = document.getElementById("quote")


const getAdvice = async () => {
      const endpoint = 'https://api.adviceslip.com/advice';
      try {
            const response = await fetch(endpoint);
            if (response.ok) {
                  const JSresponse = await response.json()
                  randomAdvice.innerHTML = JSresponse.slip.advice;
                  adviceNum.innerHTML = JSresponse.slip.id;
                  
                  setTimeout(() => {
                        diceButton.style.transition = "box-shadow 0.5s, transform 0s";
                        diceButton.style.boxShadow = "none";
                        diceButton.style.transform = "none";
                  }, 1000)
            }
      } catch (error) {
             console.log(error)
      }
}

getAdvice();

