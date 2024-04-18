// loop for, while, dan do-while dalam JavaScript:

// 1. Loop for:
// Loop for digunakan ketika Anda tahu berapa kali Anda ingin menjalankan blok kode tertentu.

// Sintaks:
for (inisialisasi; kondisi; iterasi) {
  // blok kode yang akan dijalankan
}

// inisialisasi: Ekspresi yang dievaluasi satu kali sebelum iterasi dimulai. Biasanya digunakan untuk mendeklarasikan dan menginisialisasi variabel loop.
// kondisi: Ekspresi boolean yang dievaluasi sebelum setiap iterasi. Jika bernilai true, blok kode akan dijalankan; jika false, loop akan berhenti.
// iterasi: Ekspresi yang dievaluasi setelah setiap iterasi. Biasanya digunakan untuk mengubah nilai variabel loop.

// Contoh:
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}


// 2. Loop while:
// Loop while digunakan ketika Anda tidak tahu berapa kali Anda ingin menjalankan blok kode tertentu, tetapi kondisi harus dievaluasi sebagai true agar loop berlanjut.

// Sintaks:
while (kondisi) {
  // blok kode yang akan dijalankan
  // iterasi harus dilakukan di dalam blok kode
}
// kondisi: Ekspresi boolean yang dievaluasi sebelum setiap iterasi. Jika bernilai true, blok kode akan dijalankan; jika false, loop akan berhenti.

// Contoh:
let i = 0;
while (i < 5) {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
}


// 3. Loop do-while:
// Loop do-while hampir sama dengan loop while, tetapi blok kode dijalankan sekali sebelum kondisi dievaluasi.

// Sintaks:
do {
  // blok kode yang akan dijalankan
  // iterasi harus dilakukan di dalam blok kode
} while (kondisi);

// kondisi: Ekspresi boolean yang dievaluasi setelah setiap iterasi. Jika bernilai true, blok kode akan dijalankan kembali; jika false, loop akan berhenti.

// Contoh:
let l = 0;
do {
  console.log(l); // Output: 0, 1, 2, 3, 4
  l++;
} while (l < 5);

// Perbedaan dan Kapan Menggunakan:
// Gunakan loop for ketika Anda tahu jumlah iterasi sebelumnya.
// Gunakan loop while ketika Anda tidak tahu berapa kali iterasi akan dilakukan, tetapi kondisinya harus dievaluasi sebelum iterasi pertama.
// Gunakan loop do-while ketika Anda ingin blok kode dijalankan minimal satu kali, bahkan jika kondisinya salah sejak awal.