// // {} if else conditional (pengkondisian) {}
// let nilai = 7

// if 
// bisa tanpa else dan juga kurung krawal
if (nilai > 8 ) {
    alert('dapat predikat A')
}
else {
    alert('dapat predikat B')
}

// else if 
// jika pengkondisian dibuthkan banyak
if (nilai > 8 ) 
    alert('dapat predikat A')
else if (nilai > 6 && nilai < 8)
    alert('dapat predikat B')
else 
    alert('dapat predikat c')



// // {} ternary operator & multiple ternary operator {}
let nilai = 3

let hasil = nilai > 8 ? 'Predikat A' : 'Predikat B' 

// multiple
let hasi1l = (nilai > 8) 
    ? 'Predikat A' 
    : (nilai > 7 && nilai <= 8)
        ? 'Predikat B'
        : (nilai > 5 && nilai <= 7)
             ? 'Predikat C'
             : 'Predikat D'


alert(hasil);
alert(hasi1l);