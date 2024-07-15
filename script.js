//spin dice button on click
const diceButton = document.getElementById("dice-btn");

diceButton.onclick = () => {
       diceButton.style.transform = "rotate(1turn)";
}

const getAdvice = async () => {
      const endpoint = 'https://api.adviceslip.com/advice'
      try {
            const response = await fetch(endpoint);
            if (response.ok) {
                  const JSresponse = await response.json()
                  console.log(JSresponse.slip.advice)
                  console.log(JSresponse.slip.id)
            }
      } catch (error) {
             console.log(error)
       }
}

getAdvice();