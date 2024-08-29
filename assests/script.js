const nrTabellone = [];
const randomTable = document.getElementById("randomTable");

const createTabellone = () => {
  const tabellone = document.getElementById("tabellone");
  for (i = 1; i <= 90; i++) {
    const cellNumber = document.createElement("div");
    cellNumber.className = "cellNumber";

    const numbersH3 = document.createElement("h3");
    numbersH3.innerText = i;
    cellNumber.appendChild(numbersH3);
    tabellone.appendChild(cellNumber);
  }
  const divRandom = document.createElement("div");
  divRandom.className = "divRandom";

  const randomNumP = document.createElement("p");

  const randomButton = document.createElement("button");
  randomButton.innerText = "prossimo numero";

  randomNumP.innerText = "numero estratto: ";

  randomButton.addEventListener("click", () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 90) + 1; //90 +1 altrimenti mi genererebbe anche lo zero
    } while (nrTabellone.includes(randomNumber));

    nrTabellone.push(randomNumber);

    randomNumP.innerText = "numero estratto: " + randomNumber;

    const cellNumbers = document.querySelectorAll(".cellNumber");
    cellNumbers.forEach((cella) => {
      const number = parseInt(cella.textContent, 10);
      if (number === randomNumber) {
        cella.style.backgroundColor = "#726695";
      }
    });
  });
  divRandom.appendChild(randomNumP);
  divRandom.appendChild(randomButton);
  randomTable.appendChild(divRandom);
};

createTabellone();

const createCartelle = () => {
  const cartelle = document.getElementById("cartelle");

  const cartellaArray = [];
  const nrCartellaArray = 24;
  const minNumber = 1;
  const maxNumber = 90;
  let nrCartella;
  while (cartellaArray.length < nrCartellaArray) {
    let nrCartella = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    if (!cartellaArray.includes(nrCartella)) {
      cartellaArray.push(nrCartella);
    }
  }
  const cartella = document.createElement("div");
  cartella.className = "cartella";

  cartellaArray.forEach((number) => {
    const numberDiv = document.createElement("div");
    numberDiv.className = "cartella";
    numberDiv.innerText = number;
    cartella.appendChild(numberDiv);
  });
  cartelle.appendChild(cartella);
};
createCartelle();
