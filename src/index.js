import calculateProduct from "@aso200/calculator-result";

window.calculateProduct = calculateProduct;
const resultElement = document.getElementById("result");

const result = calculateProduct(2, 3, 4);
console.log(result);

resultElement.textContent = `Resultat: ${result}`;
