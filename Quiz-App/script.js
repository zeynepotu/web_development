// OOP Nesne Tabanlı Programlama (Object Oriented Programming)
// Object

let soru = {
    soruMetni : "Hangisi javascript paket yönetim uygulamasıdır?",
    cevapSecenekleri : { a:"npm", b: "git", c: "vscode", d: "nodejs"},

    dogruCevap : "c",
    cevabiKontrolEt : function(cevap){
        return cevap === this.dogruCevap;
    }

}
let soru2 = {
    soruMetni : "Aşağıdakilerden hangisi bir javascript framework değildir?",
    cevapSecenekleri : {a:"react", b: "vue", c: "angular", d: "nodejs"},
    dogruCevap : "d",
    cevabiKontrolEt : function(cevap){
        return cevap === this.dogruCevap;
    }
};

console.log(soru.soruMetni);
console.log(soru.cevapSecenekleri);
console.log(soru.cevabiKontrolEt("c"));
console.log(soru2.soruMetni);
console.log(soru2.cevapSecenekleri);
console.log(soru2.cevabiKontrolEt("d"));