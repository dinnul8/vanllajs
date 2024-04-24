// Sistem modul JavaScript adalah cara untuk mengorganisir kode JavaScript menjadi bagian-bagian yang terpisah dan independen yang disebut modul. Ini membantu dalam memecah kode menjadi unit-unit yang lebih kecil, yang memudahkan pengembangan, pemeliharaan, dan pembacaan kode yang lebih baik.

// Dalam JavaScript, ada beberapa cara untuk menerapkan sistem modul, salah satunya menggunakan modul ECMAScript (ES6) yang memperkenalkan pernyataan import dan export. Berikut adalah penjelasan singkat dan contoh penggunaan sistem modul ini dalam bahasa Indonesia:

// Export: Dengan menggunakan pernyataan export, Anda dapat mengekspor variabel, fungsi, atau kelas dari satu modul agar bisa diakses oleh modul lain.
// Modul math.js
export const tambah = (a, b) => a + b;
export const kurang = (a, b) => a - b;
// Import: Pernyataan import digunakan untuk mengimpor fungsi, variabel, atau kelas dari modul lain ke dalam modul saat ini.
// Modul lain yang menggunakan math.js
import { tambah, kurang } from './math.js';

console.log(tambah(5, 3)); // Output: 8
console.log(kurang(5, 3)); // Output: 2
// Dalam contoh di atas, kita memiliki dua modul: math.js dan modul yang mengimpor fungsinya. Modul math.js mengekspor dua fungsi, tambah dan kurang, dan modul lain mengimpor kedua fungsi tersebut dan menggunakannya sesuai kebutuhan.

// Sistem modul JavaScript membantu dalam mengelola kompleksitas proyek, menghindari konflik nama, dan meningkatkan struktur dan keterbacaan kode.
