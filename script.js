// Link from html
/* Komentar */
document.writeln("<h3>Welcome sir !</h3>"); // '' dan "" sama
document.writeln("</br>"); //Spasi
document.writeln(100.01);
document.writeln("</br>");
document.writeln(0b11011010); //Binary 0b+binary
//Tipe data Boolean
document.writeln("</br>");
document.writeln(true);
document.writeln("</br>");
document.writeln(false);
//Tipe data string
document.writeln("</br>", "</br>");
document.writeln("Hi " + 'DAVIS');
document.writeln("</br>", "</br>");
//Escape Sequence
document.writeln("<textarea cols= '100' rows='10'>");
document.writeln("Hi \n ini \n enter \n");
document.writeln("\\Hi \\ ini slash\n"); 
document.writeln("\"Hi ini petik 2 \"");
document.writeln("\'Hi ini petik 1 \'");
document.writeln("</textarea>");


////////////////////////////////////////////////////////////////////////////////
//Jenis Variabel pada JavaScript terdapat 3 yaitu var, let dan const
//Variabel var tidak direkomendasikan digantikan dengan let
//document.writeln ("</br>");
//var fullname = "Muhammad Daffa' Fisabilillah";
//var firstname;
//var middlename;
//var lastname;

//firstname = "Muhamamd";
//middlename = "Daffa\'";
//lastname = "Fisabilillah";

//document.writeln (fullname);
//document.writeln ("</br>");
//document.writeln (firstname);
//document.writeln (middlename);
//document.writeln (lastname);

//let yang direkomendasikan
document.writeln ("</br>");
let fullname = "Muhammad Daffa' Fisabilillah";
let firstname;
let middlename;
let lastname;

firstname = "Muhamamd";
middlename = "Daffa\'";
lastname = "Fisabilillah";
lastname = "Jawir"; //akan terbaca pada variabel terakhir

document.writeln (fullname);
document.writeln ("</br>");
document.writeln (firstname);
document.writeln (middlename);
document.writeln (lastname);

//const jika variabel telah diisi maka value nya tidak dapat diubah lagi
//document.writeln ("</br>");
//const konstan = "Semangat Pagi";
//konstan = "error";
//document.writeln (konstan);


/////////////////////////////////////////////////////////////////////////
//Operator aritmatika
//let result = 1+2;
//document.writeln("<p> 1 + 2 = " + result + "</p>")
//let originalResult = result; 

//result = result - 1;
//document.writeln ("<p>" + originalResult + " - 1 = " + result + "</p>")
//originalResult = result;

//result = result * 3;
//document.writeln ("<p>" + originalResult + " * 3 = " + result + "</p>")
//originalResult = result;


//Operator Augmanted Asignment
let result = 1+2;
document.writeln("<p> 1 + 2 = " + result + "</p>")
let originalResult = result; 

result -= 1;
document.writeln ("<p>" + originalResult + " - 1 = " + result + "</p>")
originalResult = result;

result *= 3;
document.writeln ("<p>" + originalResult + " * 3 = " + result + "</p>")
originalResult = result;

//Operator Unary
let hasil = +1;
document.writeln("<p>" + hasil + "</p>")

hasil--;
document.writeln("<p>" + hasil + "</p>")

hasil ++;
document.writeln("<p>" + hasil + "</p>")

hasil =- hasil // Dirubah menjadi negatif bukan dikurang 1
document.writeln("<p>" + hasil + "</p>")

//Operasi Perbandingan, akan menghasilkan boolean 
let a = 5 == "5"; // hasil sama dan tipe data berbeda
document.writeln("<p>" + a + "</p>")

a = 5 === "5"; //hasil sama dan tipe data sama
document.writeln("<p>" + a + "</p>")

//Operator Logika
const nilaiUjian = 69;
const nilaiAbsensi = 69;

const lulusUjian = nilaiUjian > 80;
const lulusAbsensi = nilaiAbsensi >60;

const lulus = lulusUjian && lulusAbsensi; // operator AND (&&), OR (||), kebalikan (!)
document.writeln("<p>" + lulus + "</p>")


//////////////////////////////////////////////////////////////////////////////////////
//Console ada di inspect elemen 
console.debug("Debug") // dikeluarkan saat levels verbose
console.info("Hola everyone") // sama dengan console.log()
console.warn("Peringatan !!")
console.error("Error")
console.table()


/////////////////////////////////////////////////////////////////////////////////////
//String Template `` bukan petik tapi backtick
//Biasanya pake string + variabel + string
const firstName = "Diah";
const middleName = "Prasetyo";
const template = `Name : ${firstName} ${middleName}`; // jadi gapake + " "
console.log(template)

const namaku = "Davis";
const nilaiku = 99;
const t = `Name : ${namaku}, Lulus : ${nilaiku>90}`;
const lama = "Name : " + namaku + " " + nilaiku;
console.info(t);

//Multiline String
const multilineString = `
    Namaku Davis 
    Asal Lampung </br>
Serah lu dah 
`;

document.writeln("<pre>");
document.writeln(multilineString);
document.writeln("</pre>");


/////////////////////////////////////////////////////////////
//Konversi String dan Number
const nilai1 = "1";
const nilia2 = 1;
const sum = nilai1 + nilia2;
document.writeln(`<p>${sum}<\p>`)
//parselnt() => s ke n bilangan bulat
//parsefloat() => s ke n bilangan pecahan
//Number() => s ke n bulat/pecahan 
//number.toString() => n ke s
const n1 = parseInt("1");
const n2 = 1;
const tambah = n1 + n2;
document.writeln(`<p>${tambah}<\p>`);

document.writeln(`${parseInt("1.9")}<\p>`);
document.writeln(`${parseFloat("1.1")}<\p>`);
document.writeln(`${Number("1.3")}<\p>`);

const c = 2;
const l = 1;
const kureng = c + l;
const tot = c.toString() +  l.toString();
const to = c.toString() -  l.toString();
// document.writeln(`${number.toString(kureng)}<\p>`); salah
document.writeln(`${kureng}<\p>`);
document.writeln(`${tot}<\p>`);
document.writeln(`${to}<\p>`);

//NaN (Not a Number)
const va = Number("salah"); //jadi NaN 
document.writeln(`${parseInt("salah")}<\p>`);
document.writeln(`${parseFloat("1.9pler")}<\p>`); //rada pinter cek depan bisa tapi jika angka dibelakang tidak bisa
document.writeln(`${Number("1.9puki")}<\p>`); //tidak ada toleransi salah 
const ai = va + c;
document.writeln(`${ai}<\p>`); //operasi salah jadi NaN

//isNaN() cek NaN nilai akan menjadi boolean
document.writeln(`${isNaN(va)}<\p>`);
document.writeln(`${isNaN(c)}<\p>`);


//////////////////////////////////////////////////////////////
// Tipe Data Array
let arrayKosong = [];
let arrayNama = ["adudu", "Ying", "yaya"];

arrayKosong.push("palelu");
arrayKosong.push(1,"bapaklu", 3, 6, 8.6);

console.table(arrayKosong); //masuk ke console

// Tipe data array dan tipe data objek bisa melakukan semua hal dibawah
// array.push(value) menambah data ke array
// array.length mendapatkan panjang array
// array[index] mendapatkan data di posisi index
// array[index] = value mengubah data di posisi index
// delet array[index] menghapus data di posisi index, namun index tidak bergeser

document.writeln(`banyak index array kosong adalah ${arrayKosong.length}`);

console.log(arrayKosong[0]);
console.info(arrayKosong[1]);

arrayKosong[0] = "ireng";
console.table(arrayKosong);

delete arrayKosong [0]; //length array tetap 3 dan index 0 masih bisa diakses
console.table(arrayKosong)

arrayKosong[0]= "akudisini";
console.table(arrayKosong);

// tidak ada batasan data dynamic language
// bisa memasukkan array dalam array
arrayKosong.push(["tumpak", 1,2], [5,"hahaha",[6,[2,"bijikau"]]]);
console.table(arrayKosong);


///////////////////////////////////////////////////////////////////////////////////////
// Tipe data objek
// di tipe data objek sama halnya dengan array terdapat index tetapi disebut attributes
// yang membedakan adalah index pada tipe data object bisa menggunakan string
// jika memaksa memasukkan data bukan number di index Array, maka JavaScript akan 
// merubah tipe data Array tersebut menjadi object dan ini bisa berbahaya
// karena beberapa operasi di array mungkin bisa berubah hasilnya

let orang = {};

orang["nama"] = "eko kurniawan";
orang["nama"] = "mulyadi";
orang ["alamat"] = "Indonesia";
orang["umur"] = 30;
console.table(orang);
delete orang["alamat"];
console.table(orang);

const olaling = {
    "Nama lengkap" : "Kuru kuri", //lebih dari satu kata
    Alamatmu : "luar negeri",
    Umurmu : 32
};
console.info(`Nama : ${olaling["Nama lengkap"]}`); //lebih dari satu kata
console.log(`Alamat : ${olaling.Alamatmu}`);
console.info(`Umur : ${olaling.Umurmu}`);
console.table(olaling); 


//////////////////////////////////////////////////////////////////////////////////////////
// If Expression
const conto = 70

if (conto >80){
    document.writeln("<p> Good Job</p>");
}else if (40<conto<79){
    document.writeln("<p>Nice !!!</p>");
}else{
    document.writeln("<p>salah tot</p>");
}


//////////////////////////////////////////////////////////////////////////////////////////
// Alert (peringatan pop up pada browser), Prompt (meminta inputstring dalam bentuk pop up input text) 
//dan Confirm (meminta input boolean dari pengguna browser dalam bentuk popup input pilihan)

alert("Selamat datang silahkan tempel kartu atau tekan tombol masuk");

const aaa = confirm("yakin mau masuk? ");
if (aaa){
    const kill = prompt ("kamu sapaa! rumahmu dimana!");
    alert(`anyyoaseo ${kill}`);
}else{
    alert("Bye Ler");
}


/////////////////////////////////////////////////////////////////////////////////////////
// Undefined adalah tipe data, dimana sebuah variabel yang belum memiliki nilai
// data yang belum didefinisikan isinya
let name;
if (name === undefined){
    alert("piw piw");
} else {
    alert("DEFINED");
}

const hoo = ["kuad","rungkad"]
if (hoo[2] === undefined){
    console.log("benar kali lah kau");
} else {
    console.log("DEFINED");
}

let kuyang = {
    "asu lo " : 20,
    biji : 2,
};
if (kuyang.kudanil === undefined){
    console.log("hooh tenan");
}else {
    console.log("nani");
};
// tipe data object

////////////////////////////////////////////////////////////////////////////////////////////
// null  berarti variabel sudah ditambahkan value nya, hanya saja value nya null

let ngige = null;
if (ngige === undefined){
    console.log("Undefined");
}else if (ngige === null){
    console.log("NULL cokk");
}else{
    console.log(ngige);
}
// tipe data object

/////////////////////////////////////////////////////////////////////////////////////////////
// Switch Statement kondisinya hanya untuk perbandingan ===

const pukil = "maklimah biadab";
switch(pukil){
    case "A":
        document.writeln("<p> Gede juga Nilai lu <\p>");
        break;
    case 89:
        document.writeln("<p> lumayan aja kata gua mah <\p>");
        break;    
    default:
        document.writeln("<p> salah kelas pak <\p>");
}


//////////////////////////////////////////////////////////////////////////////////////////////
// Operator Typeof digunakan untuk melihat tipe data sebuah value atau variabel
let dat;
const typeData = typeof dat;
document.writeln(`<p> ${typeData} </p>`);

if (typeof dat === "number"){
    console.log("Number");
} else  if (typeof dat === "string") {
    console.log("String");
} else  if (typeof dat === "object") {
    console.log("Object");
} else  if (typeof dat === "undefined") {
    console.log("Undefined");
}


///////////////////////////////////////////////////////////////////////////////////////////////
// In Operator mengecek sebuah attribute terdapat didalam object apa tidak
// hasilnya akan bernilai true dan false atau boolean 
// dapat mengecek juga index array

const perso = {
    "first Name" : "Mulyanto",
    ninggal : 65,
    lasaga : undefined
};

const has = "first name" in perso; // in
document.writeln(`<p>${has}</p>`);

if ("first Name" in perso){
    document.writeln(`halo pak ${perso["first Name"]}`);
}else{
    document.writeln('Biji salah')
};

const lasu = "lasaga" in perso; // lasaga tetap dianggap array
document.writeln(`<p>${lasu}</p>`); // tipe data yang bernilai undefined tetap dianggap bervalue

const jok = [null, "wili", null];
const yui = 0 in jok; // walaupun tipe data bernilai null bukan berarti tidak terdapat value
document.writeln(`<p>${yui}</p>`);


////////////////////////////////////////////////////////////////////////////////////////////////
// Ternary Operator (?)
// sama dengan if tapi lebih simpel hanya ada true/false
const poki = 70;
const kuli = poki >= 60 ? "selamat lulus" : poki <=20 ? "Jelek banget": "dikit lagi hoki"; // kelebihan bisa menggunakan const tetap
document.writeln(`<p>hasil : ${kuli}`);
//sama dengan
//const q = 90;
//let ucapan;
//if (q >= 56){
//    ucapan = "selamat lulus";
//} else {
//    ucapan = "silahkan coba lagi";
//};
//document.writeln(`hasil : ${ucapan}`);


/////////////////////////////////////////////////////////////////////////////////////////////
// Nullish Coalescing Operator (??)
// jika bernilai null atau undefined, barulah value default diambil
const asu = null;
let lerk = asu;
lerk = asu ?? "Nilai default"; // kelebihan bisa menggunakan const tetap
document.writeln(`<p>hasil : ${lerk}`);

// sama dengan menggunakan if 
let pol = asu;
if (asu === undefined || asu === null){
   pol = "Nilai default 2";
} 
document.writeln(`<p>hasil : ${pol}`);

////////////////////////////////////////////////////////////////////////////////////////////////
//Optional Chaining (?)
//Jika kita mencoba mengakses property dari sebuah object data nullish tanpa menggunakan
//optional chaining operator, maka akan terjadi error

//let person  = {};
//const country = person.address.country; //address merupakan attribute, country disebut property, ini akan error
//document.writeln(`<p>hasil : ${country}`); //tidak bisa jalan ketika ia undefined atau null

let person  = {};
let country;

if (person.address !== undefined && person.address !== null){ //cek apakah value addres ada atau tidak
    const country = person.address.country;
};
document.writeln("<p> setelah diinisialisasi bukan null dan undefined maka program selanjutnya dapat terbaca ");
document.writeln(`<p>hasil : ${country}`);


let poi = {
    nama : {
        pilat : "ijat pilat"
    }
};
let pilat = poi?.nama?.pilat; 

document.writeln(`<p>hasil : ${pilat}`);


/////////////////////////////////////////////////////////////////////////////////////////////////////
// Falsy biasa ditulis falsey
// data yang dianggap false (false (boolean), Number(0,-0), string("",'',``), null, undefined, NaN)
// Truthy sebaliknya + ([])

let pl; // test aja (false (boolean), Number(0,-0), string("",'',``), null, undefined, NaN)
if(pl){
    document.writeln(`<p> true`);
}else{
    document.writeln(`<p> false`);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
//Operator Logika di Non Boolean
 
//Operator or 
//Baca kiri ke kanan
//Mengambil data yang truthy
//jika tidak ada nilai truthy maka yang terakhir yang diambil
console.info("Hello" || ""); 
console.info("" || []);
console.log("0" || "NOL");
console.log(0 ||"NOL");
console.log(0 || -0); // jika keduanya falsy maka diambil yang terakhir

// biasa dipakai untuk

const lk = {
    firstname : "Uki",
    lastname : "Purwanto"
};

const namelu = lk.firstname || lk.lastname;
document.writeln(`<p> ${namelu}`);

//Operator And (&&)
//baca dari kiri ke kanan
//mengambil nilai falsy
//jika tidak ada nilai falsy maka yang terakhir yang diambil


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Perulangan 
// For Loop 
for(let poc = 1; poc <=5; poc++){ //init statement dan post statment
    document.writeln(`<p> perulangan ke ${poc}`)
};
// While Loop
// satu kondisi perulangan tidak ada init statement dan post statment
// Cek kondisi diawal sebelum perulangan
let kol = 1;
while(kol <=5){
    document.writeln(`<p> run ke ${kol}`);
    kol++
}; 
// Do While Loop
// Cek setelah perulangan dilakukan sehingga minimal sekali perulangan walaupun kondisi tidak bernilai true
let min = 1;
do{
    document.writeln(`<p> ulang ke  ${min}`);
    min++
}
while (min<=5)


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// break dan continue
// break mengentikan seluruh perulangan
// continue akan menghentikan perulangan saat ini, lalu melanjutkan ke perulangan selanjutnya

let jk = 1;
while(true){
    document.writeln(`<p> jk ke  ${jk}`);
    jk++

    if (jk>3){
        break;
    };
};

for (let i = 1; i <=10; i++){
    if(i%2 ===0){
        continue;
    }
    document.writeln(`<p> perulangan ganjil ${i}`)
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Label
//
loopi:
for (let k = 1; k <=10; k++){
    loopj:
        for(let j = 1; j <=10; j++){
            if(j>5){
                continue loopi;
            }
            document.writeln(`<p> ${k} - ${j}`);
        }
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// For In
// digunakan untuk mengiterasi seluruh data property di object atau index di aaray
//pakai tipe data object
let peang = {};

peang["nama"] = "eko kurniawan";
peang["nama"] = "mulyadi";
peang["alamat"] = "Indonesia";
peang["umur"] = 30;

for (let pusi in peang){
    document.writeln(`<p>${pusi} : ${peang[pusi]}</p>`);
};
// pakai array index
// tidak terlalu berguna karena index sudah pasti angka
const papi = ["index nol", 9, "opo"];
for (const kia in papi){
    document.writeln(`<p>${kia} : ${papi[kia]}</p>`);
};

// For of
// Mengiterasi isi value dari iterable object (array, string)
// tidak bisa iterasi data di object attribute
// tidak bisa 
// object bukan itearble
for(const ml of papi){
    document.writeln(`<p>${ml} : ${papi[ml]}</p>`);
}
// ketika for of pada sebuah string dia akan membaca huruf perlahan
const tytyr = "pungli asu";
for(const adit of tytyr){
    document.writeln(`<p>${adit}</p>`);
}

//Nopal
//onst arrayBaru = [
//   {
//       nama: 'Tia',
//       umur: '17'
//   },
//
//   {
//       nama: 'Adit'
//   }
//

//arrayBaru.map((item, i)=>{
//    document.writeln(`<p>Nama : ${item.nama}</p>`);
//    document.writeln(`<p>Umur : ${item.umur}</p>`);
//
//})
//
//const tesObj =  {
//    nama: 'Tia',
//    umur: '17'
//}
//
//const {} = tesObj
//
//document.writeln(`<p> destrukturisasi Nama : ${}</p>`);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////