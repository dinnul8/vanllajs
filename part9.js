// {} asynchronous {}
// JavaScript asynchronous adalah konsep yang memungkinkan eksekusi kode tanpa harus menunggu operasi tertentu selesai. Dalam pemrograman JavaScript, banyak operasi yang bersifat asinkron, seperti pengambilan data dari server, proses file, dan operasi jaringan lainnya. Istilah "asynchronous" berarti bahwa operasi tersebut dapat berjalan secara independen dari kode lainnya, dan kode selanjutnya tidak perlu menunggu operasi tersebut selesai untuk melanjutkan eksekusi.

// contoh dara cara kerja asynchronous
console.log('progress 1')
console.log('progress 2') 
setTimeout(() => {
    console.log('progress 3') // progress data 3 membutuhkan waktu selama 4 menit
}, 4000);
console.log('progress 4')
console.log('progress 5')
// penjelasan contohnya adalah js akan menjalankan 5 progress di atas, ketika berada di progress 3 membutuhkan waktu yg lama utk di import datanya, maka progress tiga akan berjalan di backgroud dan otomatis melanjutkan ke progress 4 dan 5. jadi urutan progressnya [1,2,4,5,3] krn progress tiga diskip tapi masih berlajan di belakang


// Konsep Pemahaman Asynchronous dalam JavaScript:
// 1. Event Loop:
// JavaScript menggunakan event loop untuk mengatur eksekusi kode asinkron. Event loop memantau stack call dan task queue, menjalankan fungsi dari task queue ketika stack call kosong.

// 2. Callback Functions:
// Salah satu cara utama untuk menangani kode asinkron dalam JavaScript adalah dengan menggunakan callback functions.Callback functions adalah functions yang diberikan sebagai argumen kepada functions lainnya dan dipanggil setelah operasi asinkron selesai.
// Contoh penggunaan callback functions adalah dalam operasi seperti fetching data dari server atau membaca file.

// 3. Promises:
// Promises adalah cara lain untuk menangani kode asinkron, yang menyediakan cara yang lebih terstruktur dan mudah dibaca.
// Promise mewakili nilai yang akan tersedia di masa depan, seperti hasil dari operasi asinkron.
// Dengan promise, kita dapat menetapkan tindakan yang akan diambil ketika nilai tersebut tersedia atau ketika terjadi kesalahan.

// 4. Async/Await:
// Async/Await adalah fitur terbaru dalam JavaScript yang memungkinkan penulisan kode asinkron dengan cara yang bersih dan terstruktur.
// Async/Await menggunakan kata kunci async untuk menandai sebuah function sebagai asinkron dan kata kunci await untuk menunggu hasil dari operasi asinkron.
// Async/Await Konsep:
// - Async Function: Function yang menggunakan kata kunci async sebelum deklarasinya. Async function selalu mengembalikan Promise.
// - Await Expression: Ekspresi yang digunakan dalam async function untuk menunggu hasil dari Promise. Await membuat JavaScript menunggu sampai Promise diselesaikan dan mengembalikan hasilnya.


// Keuntungan Asynchronous dalam JavaScript:
// 1. Kinerja Lebih Baik: Kode asinkron dapat meningkatkan kinerja aplikasi dengan mengizinkan operasi yang memakan waktu untuk berjalan secara paralel.
// 2. Pengalaman Pengguna Lebih Responsif: Dengan menggunakan kode asinkron, aplikasi dapat merespons input pengguna dan menjalankan tugas-tugas lainnya tanpa harus menghentikan eksekusi.
// 3. Pemrograman Lebih Efisien: Asynchronous programming memungkinkan pengembang untuk menulis kode yang lebih efisien dan mudah dipelihara.
// 4. Pemahaman konsep asynchronous dalam JavaScript sangat penting untuk mengembangkan aplikasi modern yang responsif dan efisien. Dengan menggunakan callback functions, promises, atau async/await, kita dapat mengelola operasi asinkron dengan lebih baik dan meningkatkan kualitas aplikasi kita.