// Pewarisan (inheritance) dalam pemrograman JavaScript adalah konsep di mana sebuah objek dapat mewarisi properti dan metode dari objek lainnya. Objek yang mewarisi disebut sebagai turunan atau sub-kelas, sementara objek yang memberikan warisan disebut sebagai kelas dasar atau induk.

// Di JavaScript, pewarisan dapat diimplementasikan menggunakan prototipe atau melalui sintaksis class yang diperkenalkan dalam ECMAScript 6.

// Mari kita lihat contoh penggunaan pewarisan menggunakan prototipe:
// Kelas dasar (induk)
function Animal(name) {
  this.name = name;
}

// Metode pada kelas dasar
Animal.prototype.sayName = function() {
  console.log("My name is " + this.name);
};

// Kelas turunan (sub-kelas)
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Mewarisi metode dari kelas dasar
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Menambahkan metode khusus untuk kelas Dog
Dog.prototype.bark = function() {
  console.log("Woof!");
};

// Membuat objek dari kelas turunan
var myDog = new Dog("Buddy", "Labrador");

// Memanggil metode dari kelas dasar
myDog.sayName(); // Output: My name is Buddy

// Memanggil metode dari kelas turunan
myDog.bark(); // Output: Woof!
// Dalam contoh di atas, Animal adalah kelas dasar yang memiliki properti name dan metode sayName(). Kemudian, Dog adalah kelas turunan yang mewarisi properti name dan metode sayName() dari kelas Animal, dan menambahkan metode khusus bark().

// Ini adalah contoh implementasi pewarisan di JavaScript menggunakan prototipe. Perlu diingat bahwa dengan diperkenalkannya sintaksis class dalam ECMAScript 6, Anda juga dapat mengimplementasikan pewarisan menggunakan pendekatan tersebut.






