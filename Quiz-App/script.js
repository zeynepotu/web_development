// OOP Nesne Tabanlı Programlama (Object-Oriented Programming)
// Object

function Soru (soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    //console.log(this);
}
// Her soru nesnesi için ayrı ayrı yazmamak için prototype kullanıyoruz.
//Mesela 200 kez aynı fonksiyonu yazmak yerine prototype kullanarak 1 kez yazıyoruz.
Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap;
}

let soru1= new Soru("En iyi programlama dili hangisidir?", {a:"C#",b: "Java", c:"Python", d:"Javascript"}, "d");
let soru2 = new Soru("En popüler programlama dili hangisidir?", {a:"C#", b:"Java", c:"Python", d: "Javascript"}, "a");

let sorular = [
    new Soru("1-En iyi programlama dili hangisidir?", {a:"C#",b: "Java", c:"Python", d:"Javascript"}, "d"),
    new Soru("2-En popüler programlama dili hangisidir?", {a:"C#",b: "Java", c:"Python", d:"Javascript"}, "a"),
    new Soru ("3-En çok kazandıran programlama dili hangisidir?", {a:"C#",b: "Java", c:"Python", d:"Javascript"}, "c"),
    new Soru ("4-En çok kazandıran programlama dili hangisidir?", {a:"C#",b: "Java", c:"Python", d:"Javascript"}, "c"),

];
//Quiz nesnesi oluşturuyoruz.
//Quiz nesnesi soruları ve soru indexini tutacak.

function Quiz(sorular){
    this.sorular = sorular;
    this.soruIndex = 0;
    this.puan = 0;
}
// Her quiz nesnesi için ayrı ayrı yazmamak için prototype kullanıyoruz.
Quiz.prototype.soruGetir = function(){
    return  this.sorular[this.soruIndex];
}
const quiz = new Quiz(sorular);

console.log(quiz.soruGetir());

//addeventlistener ile butona tıklandığında bir fonksiyon çalıştırıyoruz.
document.querySelector(".btn").addEventListener("click", function(){
    if(quiz.sorular.length-1 < quiz.soruIndex){
        alert("Quiz bitti");
    }
    console.log(quiz.soruGetir())
    quiz.soruIndex++;
})
