console.log([1,2,3,4,5])

/* console dakiler;

Array(5)0: 11: 22: 33: 44: 5length: 5[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}[[Prototype]]: Object
*/

// Constructor Function;

const Person = function(firstName, birthYear){
    this.firstName= firstName;
    this.birthYear= birthYear;
    // this.calcAge= function(){
    //     return 2021 - this.birthYearbirthYear
    // } Bu buraya yazilmamali.asagidaki actigimiz function daki gibi yazilmali. yoksa hata verebilir. performansi etkiler.

    /*
    const Person = (firstName, birthYear, lastName) =>{
        this.firstName=firstName;
        this.birthYear= birthYear;
        this.lastName= lastName;
    } //bu yazdigimiz error function oluyor. icinde this barindirmaz. yani olmuyor. bu nedenle bu yapi this ile kullanilamaz. ES6 ile iliskili bir yapi dedi hoca. */

} 

const hasan = new Person('hasan', 1996)// new kelimesi ile olanlar,object olusturuyor this kelimesini bu objeye atiyor, function u cagiriyor, sonra prototype a baglaniyor, daha sonrada bu objeyi döndurur yani return ediyor. 
console.log(hasan); 
const ahmet= new Person('Ahmet', 1980)
console.log(hasan, ahmet);

Person.prototype.calcAge= function (){
    console.log(2021 - this.birthYear)//bunun burada yazilmasi idealdir. yukarida tanimlanmasi performansi etkileyecektir. cagirma isleminde bize kolaylik saglar asagida yazmamiz. 
}

Person.prototype.species='Homo sapiens'//burada normalde böyle bir özellik olmamasina ragmen, prototype ile sprecies eklemesi yaptik ve yazdirdik. ekledik.

hasan.calcAge() //cevap 25 yasi verdi. 
//console.log(Person.prototype) // bize constructor u yazdiriyor. 
console.log(hasan.species)

//______________________ES6 METODU:_____________
class student{
    constructor(firstName, lastName){
        this.firstName= firstName;
        this.lastName= lastName;
    }
    getFullName(){
        console.log('${this.firstName + ',' + this.lastName}'); //bu kullanim class icindeki constructorun in object i olmus oluyor. 
    
    }
}

const ali= new student('Ali', 'Aktas');
console.log(ali); //bu sekilde kullanim tamamiyla yukaridaki ilk olusturdugumuz tanimlama ile ayni sonucu veriyor. bu class ile yazilan yapi ES6 yapisidir. daha anlasilir durumda.
ali.getFullName()



//________________METHOD ÖZELLIGI:_________________________________________

// yukarida son yazdigimiz getFullName() constructor yapisinin icinde degil ama prototype in icinde yer almaktadir. yazdirdigimizda constructor un icinde bulunmaz. 







//___GET VE SET ÖZELLIGI:_________________________


const account = {
    owner : 'Hasan',
    movements: [10,20,30,40],
    get latest(){ //get ile en son sayiyi cagirdik getirdi sonuc 40. veri getiriyor yani olani. 
        return this.movements.splice(-1).pop()
    },
    set latest(mov){ // set ile de en son sayiyi tekrar kendimiz belirledik kurduk yani 50. yeniden bir sayi ekledik kurduk yani.
        this.movements.push(mov)
    }
}

console.log(account.latest)
account.latest=50
console.log(account);
