// alert('INI PENULISAN DARI FILE JS KE FILE LAIN')

// // {} variable {}
// // variable di js ada 
// // 1. const
// // deklarasi variabel yang konstan, maksudnya di sini variabel ini tidak dapat di redeklarisasi (tdk bisa menimpa value dari variable dengan nama yang sama ) dan di update(ada trik utk mengupdatenya)
// const NamaVariable = 'coNst'
// alert(NamaVariable)

// // 2. var
// // dapat di redeklarisasi (bisa menimpa value dari variable dengan nama yang sama dan update sesuka hati
// // *unrecommended semenjak ES6 karena scope var adalah global scope atau function scope maka ketika menggunakan if dan membuat redeklarasi variabel akan tetap menimpa variabel tersebut

// var name = "adit"
// var umur = 25

// function getUmur(){
// if(umur===25){
//    var name="putra"
// }
// }
// getUmur()

// console.log(name) // "adit"

// // 3. let
// // merupakan deklarasi variabel yang dapat digunakan untuk alternativ var, di banding dengan const, let dapat mengupdate variable nya, tetapi let tidak dapat di redeklarisasi

// let namaVariable = 'let' 

// namaVariable = 'let variable'  //mencoba update data
// alert(namaVariable)


// {} function typeof {}
// digunakan utk mengetahui tipe data dari sebuah variable

// let numVariable = 88
// let strVariable = 'ini string'
// let numVariableType = typeof(numVariable)
// let strVariableType = typeof(strVariable)

// // alert(strVariableType)
// if (numVariableType == 'number') {
//     alert('ini tipe datanya adalah number')
// }
// else {
//     alert('ini bukan number')
// }



// // {} backtick string concat {}
// // simbol [ ` ] utk mengambungkan dua data tipe berbeda
// let namaVariable = 885

// alert('ini variable bernilai '+namaVariable)
// alert(`ini variable bernilai ${namaVariable}`)



// // {} type conversion {}
// //  Mengubah tipe data yg dimiliki contoh string->number

// let variable = "9"
// let variable2 = "3"
// let convertVar = String(variable)  // // ubh tipe data ke string
// let convertVar = Number(variable)  // // ubh tipe data ke number

// // let hasil = variable * variable2 // js bisa otomatis dari string ke number dgn math opetaror [ *, -, :, ] tetapi kalau [ + ] tdk berkerja (otomatis mengambungkan kedua variable)

// alert(hasil)
// alert(typeof(convertVar))