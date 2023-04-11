const name = ["Guadalupe", "Ollie", "Aki"];

function writeCards(name, surprise) {
  let thankYous = [];
  for (let i = 0; i < name.length; i++) {
    thankYous.push(`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`);
  }
  return thankYous;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}