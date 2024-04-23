// Callback functions adalah fungsi yang dipassing sebagai argumen ke fungsi lainnya. Callback functions sangat umum digunakan dalam JavaScript karena JavaScript memungkinkan penggunaan fungsi sebagai tipe data, yang memungkinkan kita untuk mengirimkan fungsi sebagai argumen ke fungsi lainnya.

// Sebagai contoh, mari kita lihat sebuah fungsi yang melakukan operasi penambahan pada dua angka:
function tambah(a, b) {
  return a + b;
}

// Sekarang, mari kita buat sebuah fungsi baru yang disebut kalkulasi yang menerima tiga argumen: dua angka dan sebuah callback function. Callback function ini akan dipanggil di dalam kalkulasi dan hasil operasi aritmatika akan dikembalikan.
function kalkulasi(a, b, callback) {
  return callback(a, b);
}
// Sekarang, kita bisa menggunakan kalkulasi dengan tambah sebagai callback function:
console.log(kalkulasi(5, 3, tambah)); // Output: 8
// Di sini, kita meneruskan tambah sebagai callback function ke kalkulasi, dan kalkulasi memanggil tambah(5, 3) dan mengembalikan hasilnya.

// Callback functions sering digunakan dalam JavaScript untuk menangani asynchronous operations, seperti membaca file, membuat permintaan HTTP, atau menunggu respon dari pengguna. Ini memungkinkan untuk menjalankan kode setelah operasi tersebut selesai tanpa harus menunggu secara aktif, sehingga memungkinkan kode untuk menjadi non-blocking.