
let input = document.querySelector("#input-box");
let message = document.querySelector("#message");
let button = document.querySelector("#check-btn");

button.addEventListener('click', (e) => {

  let number = Number(input.value);
  
   message.classList.remove("isPrime");
   message.classList.remove("notPrime");
  
  function isPrime(number) {
    
    if(number == 1){
        message.innerHTML = `${number} is a prime number`;
        message.classList.add("isPrime");
        return ;
    }
     
    for (let i = 2; i < number; i++) {
      if ((number % i) == 0) {
          message.innerHTML = `${number} is not a prime number`;
          message.classList.add("notPrime");
          return;
      } 
    }
    message.innerHTML = `${number} is a prime number`;
    message.classList.add("isPrime");
  }

  isPrime(number);
});
