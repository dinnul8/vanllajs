// JavaScript Promise adalah sebuah objek yang merepresentasikan hasil dari operasi asynchronous. Promise dapat berada dalam satu dari tiga keadaan: pending (tunggu), fulfilled (terpenuhi), atau rejected (ditolak). Ketika sebuah promise sedang dalam keadaan pending, itu berarti operasi asynchronousnya sedang berjalan. Ketika operasi selesai, promise akan berpindah ke keadaan fulfilled jika berhasil atau ke keadaan rejected jika gagal.

// Contoh penggunaan promise dalam JavaScript:
// Membuat sebuah promise
const myPromise = new Promise((resolve, reject) => {
  // Lakukan operasi asynchronous di dalam sini
  setTimeout(() => {
    // Simulasikan suatu operasi asynchronous yang berhasil
    const success = true;
    if (success) {
      resolve("Berhasil!"); // Panggil resolve jika operasi berhasil
    } else {
      reject("Gagal!"); // Panggil reject jika operasi gagal
    }
  }, 2000); // Simulasi waktu tunggu 2 detik
});

// Menggunakan promise
myPromise.then((result) => {
  console.log(result); // Output: Berhasil!
}).catch((error) => {
  console.error(error); // Output: Gagal!
});

// Dalam contoh di atas, kita membuat sebuah promise yang melakukan operasi asynchronous dengan menggunakan setTimeout untuk mensimulasikan waktu tunggu selama 2 detik. Jika operasi tersebut berhasil, kita memanggil resolve dengan sebuah pesan "Berhasil!". Jika gagal, kita memanggil reject dengan pesan "Gagal!".

// Kemudian, kita menggunakan method then untuk menangani hasil yang dikembalikan oleh promise jika operasi berhasil dan menggunakan method catch untuk menangani error jika operasi gagal. Dalam contoh di atas, karena operasi berhasil, maka output yang akan ditampilkan adalah "Berhasil!".