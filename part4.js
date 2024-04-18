// {} ARRAY {}
// Array dalam JavaScript adalah tipe data yang digunakan untuk menyimpan kumpulan nilai atau elemen dalam satu variabel. Elemen-elemen ini dapat berupa tipe data apa pun, termasuk angka, string, objek, atau bahkan array lainnya. Array memungkinkan kita untuk menyimpan dan mengakses data dengan mudah menggunakan indeks.
// Mari kita lihat contoh sederhana pembuatan dan penggunaan array dalam JavaScript:
// Membuat sebuah array 
var myArray = ["apel","pisang","jeruk"];

// Mengakses elemen array menggunakan indeks
console.log(myArray[0]); // Output: apel
console.log(myArray[1]); // Output: pisang
console.log(myArray[2]); // Output: jeruk

// Mengubah nilai elemen array
myArray[1] = "mangga";
console.log(myArray); // Output: ["apel", "mangga", "jeruk"]

// Menghapus elemen dari array menggunakan metode pop()
myArray.pop(); // Menghapus elemen terakhir ("jeruk")
console.log(myArray); // Output: ["apel", "mangga"]

// // Menghitung jumlah elemen dalam array menggunakan properti length
// console.log(myArray.length); // Output: 2

// Selain itu, JavaScript juga mendukung array bersarang (nested array), yang merupakan array yang berisi array lainnya. Ini memungkinkan kita untuk membuat struktur data yang lebih kompleks. Misalnya:

let nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(nestedArray[0][1]); // Output: 2
console.log(nestedArray[1][2]); // Output: 6

// ada banyak method array, berikut CONTOH methods array :
var foodArray = ["sate","cilung","batagor","bakso","seblak"];
console.log(foodArray);

// 1. javascript array length (cara mengetahui panjang dari array)
var countArray = foodArray.length; //javascript array length
console.log(countArray);

// 2. javascript array toString dan javascript array join(mengubah array menjadi string)
var kumpulanArray = foodArray.toString(); //javascript array toString
var kumpulanArray2 = foodArray.join(" - "); //javascript array Join
console.log(kumpulanArray);
console.log(kumpulanArray2);

// 3. javascript array pop dan javascript array shift (cara menghapus item di dalam array)
foodArray.pop(); // menghapus data dari belakang
console.log(foodArray);
foodArray.shift(); // menghapus data dari depan
console.log(foodArray);

// 4. javascript array push dan javascript array unshift (cara menambah sekaligus menghapus item di array)
foodArray.push('martel'); // menambah data dari belakang
console.log(foodArray);
foodArray.unshift('bakwan'); // menambah data dari depan
console.log(foodArray);


// 5. javascript array splice (cara mengganti string menjadi huruf kapital atau huruf kecil)
foodArray.splice(1, 3, 'cilor', 'pecel'); // menambah dan menghapus dengan cara megatur parameter array,
// penjelasan array(1) utk menambah dimulai dari posisi 1 data dan array(4) akan menghapus dimulai dari posisi 4
console.log(foodArray);

// 6. javascript array concat (cara menggabungkan 2 atau lebih array)
var foodArray = ["batagor","bakso","seblak"];
var drinkArray = ["cola","fanta","spirt"];
var dessertArray = ["cake","pie","klepon"]
var hasil = foodArray.concat(drinkArray, dessertArray)
console.log(hasil);

// 7. javascript array slice (membuat array baru dari array lain)
var carArray = ["pagani","lexus","bugatti","ferrari","bmw","genesis","mercy"]
var addArray = carArray.slice(2, 5) // dimulai dari array ke 2-4
console.log(carArray);
console.log(addArray);



