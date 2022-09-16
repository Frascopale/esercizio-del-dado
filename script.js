const br= "<br></br>"
let numfacce = 8

document.write("Hai scelto di usare il dado con " + numfacce + " facce" + br);


let num = Math.round ( Math.random() * numfacce);
document.write("Il numero uscito è: " + num + br);

for (i=0; i<100; i++) {
    let num = Math.round ( Math.random() * numfacce);
    document.write("Il numero uscito è: " + num + br);

    while (num ==0 ){
        let num = Math.round ( Math.random() * numfacce);
        document.write("Il numero uscito è: " + num);
    }
}
