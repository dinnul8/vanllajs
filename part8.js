//  {} Object {}
// Penjelasan
// JavaScript Object adalah struktur data yang digunakan untuk menyimpan kumpulan pasangan nilai-nilai properti. Properti dalam sebuah object terdiri dari pasangan key (kunci) dan value (nilai). Object dalam JavaScript sangat fleksibel dan mampu merepresentasikan berbagai entitas dan data.

let tesObj = new Object(); // bisa juga let tesObj = {}; //karena object() = {}

console.log(typeof(tesObj))

// Cara Membuat Object:
// Ada beberapa cara untuk membuat object dalam JavaScript:

// Literal Object:
const bio = {
    name: "John",
    age: 30,
    city: "New York"
};

// Constructor Function:
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

const person = new Person("John", 30, "New York");

// Object.create():
const customer = Object.create(null);
customer.name = "John";
customer.age = 30;
customer.city = "New York";


// Properti dan Metode dalam Object:
// Object dapat memiliki properti dan metode. Properti adalah variabel yang menyimpan nilai (" key: value "), sedangkan metode adalah function yang terasosiasi dengan object (" greet: function() {...} ").

const male = {
    name: "Dinnul",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(male.name); // Output: Dinnul
male.greet(); // Output: Hello, my name is Dinnul


// Akses Properti Object:
// Properti dalam object dapat diakses menggunakan dua notasi:

// Dot Notation:
console.log(person.name); // Output: John
// Bracket Notation:
console.log(person["name"]); // Output: John


// Peran Object dalam JavaScript:
// - Model Data: Object digunakan untuk merepresentasikan entitas atau model data dalam aplikasi JavaScript.
// - Manipulasi DOM: Banyak operasi pada DOM (Document Object Model) menggunakan object untuk merepresentasikan elemen HTML.
// - Interaksi dengan API: Ketika berinteraksi dengan API (Application Programming Interface), object sering digunakan untuk mengirim atau menerima data


// menambah & menghapus & menduplikT property object
let name = "Onana"
let age = 25
let nasabah = {
    name, // jika nama key sama dgn value (" key: value "), maka bisa langsung menulis nama keynya saja
    age,
    function() {
        alert("Hello, my name is " + this.name);
    }
}

console.log(nasabah);
nasabah.gender = "Male"  // ini caranya menambahkan gender pada property object
console.log(nasabah.gender);
delete nasabah.age  // ini caranya menghapus age pada property object
console.log(nasabah.age);

let nasabah2 = Object.assign({}, nasabah) //utk duplicatenya bikin object kosong {} & tambahkan fuction assign("", "")
nasabah2.name = "Bruno"
console.log(nasabah2); //hasilnya sama seperti object nasabah
