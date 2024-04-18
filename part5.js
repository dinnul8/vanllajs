// // {} Javascript Operator {}
// // ada 4 jenis operator, yaitu:

// // 1. javascript arithmetic operator (untuk operasi matematika)
// // Operator aritmatika digunakan untuk melakukan operasi matematika pada nilai-nilai numerik. Berikut adalah beberapa operator aritmatika yang umum digunakan:
// // Penambahan (+): Menambahkan dua nilai atau lebih.
// // Pengurangan (-): Mengurangkan nilai kedua dari nilai pertama.
// // Perkalian (*): Mengalikan dua nilai atau lebih.
// // Pembagian (/): Membagi nilai pertama dengan nilai kedua.
// // Modulus (%): Mengembalikan sisa pembagian dari dua nilai.
// // Pemangkatan ()**: Meningkatkan nilai pertama ke pangkat nilai kedua.

// // Contoh penggunaan operator aritmatika:
let d = 10;
let e = 5;
let penambahan = d + e; // 15
let pengurangan = d - e; // 5
let perkalian = d * e; // 50
let pembagian = d / e; // 2
let modulus = d % e; // 0
let pemangkatan = d ** e; // 100000

console.log("Hasil penambahan:", penambahan); // Output: 15
console.log("Hasil pengurangan:", pengurangan); // Output: 5
console.log("Hasil perkalian:", perkalian); // Output: 50
console.log("Hasil pembagian:", pembagian); // Output: 2
console.log("Hasil modulus:", modulus); // Output: 0
console.log("Hasil pemangkatan:", pemangkatan); // Output: 100000

// ada juga
// Operator increment digunakan untuk menambahkan nilai variabel dengan 1. Dua jenis operator increment yang umum digunakan adalah pre-increment (++x) dan post-increment (x++). contohnya:
// Pre-increment: Nilai variabel d ditingkatkan sebelum digunakan
let preIncrementResult = ++d; // Nilai d sekarang adalah 11
console.log("Pre-increment result:", preIncrementResult); // Output: 11
// Post-increment: Nilai variabel e ditingkatkan setelah digunakan
let postIncrementResult = e++; // Nilai e sekarang adalah 6
console.log("Post-increment result:", postIncrementResult); // Output: 5
console.log("New value of e after post-increment:", e); // Output: 6

// Operator decrement digunakan untuk mengurangi nilai variabel dengan 1. Seperti halnya dengan operator increment, ada pre-decrement (--x) dan post-decrement (x--). contohnya
// Pre-decrement: Nilai variabel d dikurangi sebelum digunakan
let preDecrementResult = --d; // Nilai d sekarang adalah 9
console.log("Pre-decrement result:", preDecrementResult); // Output: 9
// Post-decrement: Nilai variabel e dikurangi setelah digunakan
let postDecrementResult = e--; // Nilai e sekarang adalah 4
console.log("Post-decrement result:", postDecrementResult); // Output: 5
console.log("New value of e after post-decrement:", e); // Output: 4


// // 2. javascript assignment operator (untuk memberikan nilai ke variable)
// Operator assignment digunakan untuk memberikan nilai ke variabel. Operator assignment yang paling umum adalah =.

// Contoh penggunaan operator assignment:
let x = 10; // memberikan nilai 10 ke variabel x
let y = 5; // memberikan nilai 5 ke variabel y
x += y; // setara dengan x = x + y; // hasilnya 15
console.log("Nilai x setelah operator assignment:", x); // Output: 15


// // 3. javascript comparison operator (untuk melakukan perbandingan nilai dari beberapa variable)
// // Operator perbandingan digunakan untuk membandingkan dua nilai atau lebih. Hasil dari operasi perbandingan adalah nilai boolean (true atau false). Berikut adalah beberapa operator perbandingan yang umum digunakan:
// // 1. Equal (==): Memeriksa apakah dua nilai sama.
// // 2. Not equal (!=): Memeriksa apakah dua nilai tidak sama.
// // 3. Strict equal (===): Memeriksa apakah dua nilai sama dengan tipe data yang sama.
// // 4. Strict not equal (!==): Memeriksa apakah dua nilai tidak sama dengan tipe data yang sama.
// // 5. Greater than (>): Memeriksa apakah nilai pertama lebih besar dari nilai kedua.
// // 6. Less than (<): Memeriksa apakah nilai pertama lebih kecil dari nilai kedua.
// // 7. Greater than or equal to (>=): Memeriksa apakah nilai pertama lebih besar dari atau sama dengan nilai kedua.
// // 8. Less than or equal to (<=): Memeriksa apakah nilai pertama lebih kecil dari atau sama dengan nilai kedua.

// // Contoh penggunaan operator perbandingan:
let a = 10;
let b = 5;
console.log(a == b); // false
console.log(a != b); // true
console.log(a === b); // false
console.log(a >= b); // true
console.log(a < b); // false


// // 4. javascript logical operator (untuk melakukan lebih dari satu perbandingan dengan syarat-syarat tertentu)
// // JavaScript Logical Operator:
// // Operator logika digunakan untuk melakukan operasi logika pada nilai-nilai boolean. Berikut adalah beberapa operator logika yang umum digunakan:
// // 1. AND (&&): Mengembalikan true jika kedua operandnya true.
// // 2. OR (||): Mengembalikan true jika salah satu dari operandnya true.
// // 3. NOT (!): Mengembalikan kebalikan dari nilai operand.

// // Contoh penggunaan operator logika:
let k = 10;
let q = 5;

console.log(k > 5 && q < 10); // true
console.log(k > 10 || q < 5); // false
console.log(!(k == q)); // true

// // adapu juga
// // null coalescing operator
// // simbolnya ?? 
// // nilai default jika suatu ekspresi bernilai null atau undefined dari satu variable ke variable lain. jika tdk ada juga, Ini memungkinkan Anda untuk menetapkan nilai default jika ekspresi di sebelah kiri

let j 
let i 
let l 

// // let hjsil = a ?? b ?? c
let hasil = j ?? i ?? l ?? '8'
alert(hasil)
