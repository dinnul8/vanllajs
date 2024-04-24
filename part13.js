// Error handling dalam JavaScript adalah proses menangani kesalahan atau kondisi yang tidak diinginkan saat sebuah program JavaScript dijalankan. Hal ini penting untuk memastikan bahwa aplikasi kita dapat mengatasi situasi yang tidak terduga dengan baik, dan memberikan pengalaman pengguna yang lebih baik dengan memberikan pesan kesalahan yang informatif.

// Di bawah ini adalah contoh sederhana error handling dalam JavaScript menggunakan try-catch:
try {
  // Kode yang mungkin menghasilkan kesalahan
  var x = y / 0; // Membagi sebuah angka dengan 0 akan menghasilkan kesalahan
} catch (error) {
  // Tangani kesalahan di sini
  console.log("Terjadi kesalahan: " + error.message);
}
// Penjelasan:

// Blok try: Di dalam blok ini, kita menempatkan kode yang mungkin menimbulkan kesalahan.
// Blok catch: Jika ada kesalahan terjadi di dalam blok try, JavaScript akan menjalankan blok catch untuk menangani kesalahan tersebut. Kita dapat menggunakan objek error untuk mendapatkan informasi tentang kesalahan yang terjadi.
// Contoh di atas mengatasi kesalahan pembagian dengan nol. Jika nilai y adalah nol, akan terjadi kesalahan pembagian oleh nol, dan pesan kesalahan akan ditampilkan di konsol.

// Selain try-catch, ada juga mekanisme error handling lain dalam JavaScript seperti penggunaan throw untuk melemparkan kesalahan secara manual dan penggunaan finally untuk mengeksekusi kode tanpa peduli apakah ada kesalahan atau tidak