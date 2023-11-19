function btnSubmit() {
  let sum = 0;
  let num = document.querySelector("input").value;
  if (num) {
    if (num <= 0)
      document.querySelector(
        "p"
      ).innerHTML = `Favor informar um número maior que zero`;
    else {
      for (let i = 1; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) sum += i;
      }
      document.querySelector("p").innerHTML = `A somatória é ${sum}`;
    }
  } else {
    document.querySelector("p").innerHTML = `Informe um número`;
  }
}
