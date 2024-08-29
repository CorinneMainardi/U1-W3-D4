const nrTabellone = [];

const createTabellone = () => {
  const tabellone = document.getElementById("tabellone");
  for (i = 0; i <= 90; i++) {
    nrTabellone.push(i + 1);
    const cellNumbers = document.createElement("div");
    cellNumbers.className = "cellNumbers";

    const numbersH3 = document.createElement("h3");
    numbersH3.innerText = i + 1;
  }
  cellNumbers.appendChild(numbersH3);
  tabellone.appendChild(cellNumbers);
};

createTabellone();
