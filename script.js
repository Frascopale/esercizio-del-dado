const br= "<br></br>"
let numfacce = prompt("Di quante facce è il dado? (inserisci un numero intero)");

document.write("Hai scelto di usare il dado con " + numfacce + " facce" + br);

let num = Math.round ( Math.random() * numfacce);


if ( numfacce >0 ) {
while (num ==0 ){
    num = Math.round ( Math.random() * numfacce);
}
document.write("Il numero uscito è: " + num);
} else {
    window.alert("Ho detto un numero positivo")
    let numfacce = prompt("Di quante facce è il dado? (inserisci un numero intero)");

document.write("Hai scelto di usare il dado con " + numfacce + " facce" + br);
}

