
let somma = 0;

function AggiungiProdotto() {
   let prodotto = document.getElementById("prezzo").value;
   prodotto = parseFloat(prodotto);

    somma = prodotto + somma;
    document.getElementById("tot").innerHTML = somma + " €";
    console.log("TOTALE SPESA: " + somma + " €");
    document.getElementById("prezzo").value = "";
}

function Reset() {
    somma = 0;
    document.getElementById("tot").innerHTML = "0 €";
    document.getElementById("prezzo").value = "";
}