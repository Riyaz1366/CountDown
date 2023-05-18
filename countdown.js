let countdown = (num, callback) => {
    let countdownElement = document.getElementById("countdown");
  
    if (num > 0) {
      countdownElement.textContent = num;
      setTimeout(() => {
        countdown(num - 1, callback);
      }, 1000);
    } else {
      countdownElement.textContent = "Happy Independence Day!";
      callback();
    }
  };
  
  countdown(10, () => {
   
  });
  