
let input = document.querySelector("#input-box");
let message = document.querySelector("#message");
let button = document.querySelector("#check-btn");

button.addEventListener('click', (e) => {

  let number = Number(input.value);

  function isPrime(number) {
    
    if(number == 1){
        message.innerHTML = `${number} is a prime number`;
        return ;
    }
     
    for (let i = 2; i < number; i++) {
      if ((number % i) == 0) {
          message.innerHTML = `${number} is not a prime number`;
          return;
      } 
    }
    message.innerHTML = `${number} is a prime number`;
  }

  isPrime(number);
});
