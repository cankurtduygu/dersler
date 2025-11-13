//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).


const degiskenAdi= "javascript"

const sayi=7
// sayi=8; 

//! sayi=8 //Assignment to constant variable
//! const ile tanımlanan değişkenler değiştirilemez
console.log(sayi);
const veri=true

console.log(typeof degiskenAdi, typeof sayi, typeof veri);

// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil="javascript"
dil="java"
console.log(dil);

let sayi1=23
let sayi2="56"

sayi1=123
console.log(sayi1,sayi2);

console.log(sayi1+sayi2);
console.log(sayi1+Number(sayi2));

console.log(sayi1-sayi2);

//! bir string ile number toplanırsa aslında toplama yapmaz, onları iki kelime gibi yanyana yazar

// ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//! VAR değişkenleri tanımlandığı yere göre global olarak veya fonksiyon içerisinde erişilebilir.
//* - Değişken fonksiyon içerisinde tanımlandı ise ancak o fonksiyonda erişilebilir (Function-scoped).
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).
//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.


var sayi4=67

sayi3=134
console.log(sayi3);
console.log("************************");


var sayi3 = 67;

sayi3 = 134;
console.log(sayi3);

console.log("***************");

var ilk = "global";

console.log(ilk);

{
  console.log(ilk);
  ilk = "GLOBAL";

  console.log(ilk);
  var ikinci = "duygu";
}

console.log(ilk);

console.log(ikinci);

ikinci = "elif";
console.log(ikinci);//var kullandığım için süslünün dışından da erişebildim

console.log("**********************Let********************");
let first="ipek" 
console.log(first);


//block scope
{
    console.log(first);
    first = "ashley"

    let second="ayla"
}

console.log(first);
// console.log(second);//süslünün icindeki let ile tanimlanan veriye disaridan erisemeyiz.

console.log("*************const*****************");

const erste="elif"

console.log(erste);

{
    console.log(erste);
    //erste
    
}








