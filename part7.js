// {} Function {}
// Pengenalan JavaScript Function:
// Di JavaScript, function adalah sebuah blok kode yang dirancang untuk menjalankan tugas tertentu. Mereka adalah bagian integral dari bahasa pemrograman JavaScript dan digunakan untuk mengorganisir kode, menghindari pengulangan kode, dan membuat kode lebih mudah dipahami dan dikelola.

// Cara Pemanggilan Function:
// Untuk memanggil sebuah function, Anda cukup menuliskan nama function diikuti dengan tanda kurung (). Jika function memiliki parameter, Anda harus menyediakan nilai untuk setiap parameter saat memanggil function tersebut.

// Contoh Pemanggilan Function Tanpa Parameter:
// Function yang telah didefinisikan sebelumnya
function greet() {
    console.log("Hello, welcome to JavaScript functions!");
}
// Memanggil function greet
greet();

// Contoh Pemanggilan Function dengan Parameter:
// Function yang telah didefinisikan sebelumnya dengan parameter
function greetWithName(parameter) {
    console.log("Hello, " + parameter + "! Welcome to JavaScript functions!");
}
// Memanggil function greetWithName dengan parameter
greetWithName("John");

// Contoh Penggunaan Parameter Lebih dari Satu:
// Function dengan dua parameter
function multiply(num1, num2) {
    return num1 * num2;
}

// Memanggil function multiply dengan dua parameter
var result = multiply(5, 3);
console.log(result); // Output: 15

// Dalam kedua contoh di atas, saat Anda memanggil function greet() atau greetWithName("John"), JavaScript akan mengeksekusi kode di dalam function tersebut dan menghasilkan output yang sesuai.


// function declaration & function expression & function hero.
// Function Declaration:
// Function declaration adalah cara paling umum untuk mendefinisikan function dalam JavaScript. Ini melibatkan kata kunci function diikuti oleh nama function, daftar parameter (jika ada), dan blok kode yang harus dijalankan.

// Contoh Function Declaration:
// Function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}
// Memanggil function greet
greet("John");


// Function Expression:
// Function expression melibatkan mendefinisikan function sebagai bagian dari ekspresi. Ini dapat disimpan dalam variabel dan digunakan seperti nilai lainnya.

// Contoh Function Expression:
// Function expression
var greet = function(name) {
    console.log("Hello, " + name + "!");
};
// Memanggil function greet
greet("John");

// Function Hero:
// Function hero adalah konsep yang dikemukakan oleh Douglas Crockford, seorang pakar JavaScript. Ini adalah function yang dibuat untuk menjadi fleksibel dan dapat digunakan dalam berbagai situasi dengan cara yang berguna.

// Contoh Function Hero:
// Function hero untuk menyapa dengan opsi menyertakan pesan tambahan
function greetHero(name, message = "Welcome") {
    console.log(message + ", " + name + "!");
}
// Memanggil function greetHero dengan dan tanpa pesan tambahan
greetHero("John"); // Output: Welcome, John!
greetHero("Jane", "Good morning"); // Output: Good morning, Jane!


// Syntax Arrow Function:
// Syntax dasar arrow function tanpa parameter
const greetHello = () => {
    return "Hello, world!";
};
// Memanggil function greet
console.log(greetHello());
// Dalam syntax di atas:
// const greet adalah nama variabel yang menyimpan function.
// () => {...} adalah syntax arrow function.
// () menandakan bahwa function tidak memiliki parameter.
// {...} adalah blok kode function yang akan dijalankan.
// Arrow Function dengan Parameter:

// Arrow function dengan parameter
const greetName = (name) => {
    return "Hello, " + name + "!";
};
// Memanggil function greetName
console.log(greetName("John"));
// Dalam syntax di atas:
// (name) adalah parameter dari function.
// Jika function memiliki satu parameter saja, tanda kurung bisa dihilangkan: name => {...}.

// Arrow Function Multi-Line:
// Arrow function multi-line, adalah arrow function memiliki lebih dari satu pernyataan atau perlu melakukan lebih banyak pekerjaan, Anda harus menggunakan blok {} seperti yang ditunjukkan dalam contoh multi-line di atas.
const greetMultiLine = () => {
    const greeting = "Hello,";
    const target = "world!";
    return greeting + " " + target;
};
console.log(greetMultiLine());
// Dalam syntax di atas:
// Blok kode function di dalam {...} terdiri dari beberapa baris.
// return digunakan untuk mengembalikan nilai dari function

// Kesimpulan:
// - Function declaration dan expression adalah dua cara yang umum digunakan untuk mendefinisikan function dalam JavaScript.
// - Function hero adalah konsep fleksibilitas function yang dapat digunakan dalam berbagai situasi.
// - Parameter dan arguments digunakan untuk memungkinkan function menerima dan bekerja dengan nilai yang diteruskan ke dalamnya.
// - JavaScript memungkinkan penggunaan nilai default untuk parameter function, yang berguna saat parameter tidak diberikan nilai saat memanggil function.
// Kelebihan Arrow Function adalah Penulisan yang Ringkas: Arrow function memungkinkan penulisan function yang lebih singkat, terutama untuk function yang sederhana.


// Parameter/Arguments:
// Parameter adalah nilai yang diterima oleh function saat dipanggil. Argument adalah nilai yang diteruskan ke function saat dipanggil.

// Contoh dengan Parameter/Arguments:
// Function dengan dua parameter
function add(a, b) {
    return a + b;
}
// Memanggil function add dengan arguments 3 dan 4
var result = add(3, 4); // result akan menjadi 7

// Parameter dengan Nilai Default:
// JavaScript memungkinkan Anda untuk menentukan nilai default untuk parameter function. Nilai ini akan digunakan jika tidak ada argument yang diteruskan ke parameter saat memanggil function.

// Contoh dengan Parameter Nilai Default:
// Function untuk menampilkan pesan dengan nama dan pesan default
function greetWithDefault(name, message = "Welcome") {
    console.log(message + ", " + name + "!");
}
// Memanggil function greetWithDefault tanpa menyertakan pesan
greetWithDefault("John"); // Output: Welcome, John!


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