// alert('INI PENULISAN DARI FILE JS KE FILE LAIN')

// // {} variable & type data {}
// // Variabel dalam JavaScript adalah suatu wadah yang digunakan untuk menyimpan nilai. Nilai dalam variabel bisa berupa data apapun, seperti angka, string, objek, atau fungsi. Saat Anda mendefinisikan sebuah variabel, Anda memberikan nama pada wadah tersebut dan menetapkan nilai ke dalamnya. Di JavaScript, Anda dapat mendefinisikan variabel dengan menggunakan kata kunci var, let, atau const.
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



// tipe data dalam JavaScript:
// 1. String:
// String adalah tipe data yang digunakan untuk merepresentasikan teks.
// Dideklarasikan dengan menggunakan tanda kutip tunggal (' ') atau ganda (" ").
// Contoh: "Halo, dunia!", 'Ini adalah string'.
// Beberapa operasi yang dapat dilakukan pada string termasuk penggabungan (concatenation), pencarian substring, pemotongan (substring), dan penggantian.
// 2. Number:
// Number adalah tipe data yang digunakan untuk merepresentasikan angka, baik bilangan bulat (integer) maupun bilangan pecahan (float).
// Tidak ada perbedaan antara integer dan float dalam JavaScript; keduanya direpresentasikan sebagai Number.
// Contoh: 10, 3.14, -5.
// Berbagai operasi aritmatika dapat dilakukan pada number, seperti penambahan, pengurangan, perkalian, dan pembagian.
// 3. Boolean:
// Boolean adalah tipe data yang hanya memiliki dua nilai: true atau false.
// Digunakan untuk mengevaluasi kondisi dan membuat keputusan dalam aliran program.
// Contoh: true, false.
// Operasi logika seperti AND (&&), OR (||), dan NOT (!) sering digunakan dengan boolean.
// 4. Array:
// Array adalah struktur data yang digunakan untuk menyimpan kumpulan nilai (elemen) dalam satu variabel.
// Elemen-elemen dalam array dapat memiliki tipe data yang berbeda, dan mereka diakses menggunakan indeks.
// Array dideklarasikan dengan tanda kurung siku ([]).
// Contoh: [1, 2, 3], ['apel', 'pisang', 'jeruk'].
// Operasi umum pada array meliputi penambahan elemen (push), penghapusan elemen (pop), pencarian elemen, dan iterasi melalui elemen.
// 5. Object:
// Object adalah struktur data kompleks yang digunakan untuk merepresentasikan entitas dengan properti (key) dan nilai (value) terkait.
// Properti dalam object dapat memiliki tipe data apa pun, termasuk string, number, boolean, array, atau bahkan object lain.
// Object dideklarasikan dengan menggunakan tanda kurung kurawal ({}).
// Contoh: { nama: 'John', umur: 30, pekerjaan: 'pengembang' }.
// Operasi pada object meliputi penambahan properti, penghapusan properti, dan akses ke nilai properti.



// // {} backtick string concat {}
// // simbol [ ` ] utk mengambungkan dua data tipe berbeda
// let namaVariable = 885

// alert('ini variable bernilai '+namaVariable)
// alert(`ini variable bernilai ${namaVariable}`)



// Local Variable:
// Local variable adalah variabel yang dideklarasikan di dalam sebuah function. Variabel ini hanya dapat diakses di dalam function di mana mereka dideklarasikan.

// Contoh Local Variable:
function greet() {
    var message = "Hello, world!"; // Local variable
    console.log(message);
}

greet(); // Output: Hello, world!
console.log(message); // Error: message is not defined
// Pada contoh di atas, variabel message adalah local variable karena dideklarasikan di dalam function greet(). Variabel ini tidak dapat diakses di luar function greet().

// Global Variable:
// Global variable adalah variabel yang dideklarasikan di luar semua function. Variabel ini dapat diakses dari mana pun di dalam script JavaScript.

// Contoh Global Variable:
var username = "John"; // Global variable

function greet() {
    console.log("Hello, " + username + "!");
}

greet(); // Output: Hello, John!
console.log(username); // Output: John
// Pada contoh di atas, variabel username adalah global variable karena dideklarasikan di luar semua function. Variabel ini dapat diakses di dalam function greet() maupun di luarnya.



// // {} type conversion {}
// //  Mengubah tipe data yg dimiliki contoh string->number

// let variable = "9"
// let variable2 = "3"
// let convertVar = String(variable)  // // ubh tipe data ke string
// let convertVar = Number(variable)  // // ubh tipe data ke number

// // let hasil = variable * variable2 // js bisa otomatis dari string ke number dgn math opetaror [ *, -, :, ] tetapi kalau [ + ] tdk berkerja (otomatis mengambungkan kedua variable)

// alert(hasil)
// alert(typeof(convertVar))