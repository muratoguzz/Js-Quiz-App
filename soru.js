function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi Türkiye'nin başkentidir?", { a: "Ankara", b: "Atina", c: "Sofya", d: "Paris" }, "a"),
    new Soru("2-Hangisi Yunanistan'ın başkentidir?", { a: "Berlin", b: "Atina", c: "Varşova", d: "Madrid" }, "b"),
    new Soru("3-Hangisi Almanya'nın başkentidir?", { a: "Paris", b: "Atina", c: "Berlin", d: "Madrid" }, "c"),
    new Soru("4-Hangisi İtalya'nın başkentidir?", { a: "Roma", b: "Paris", c: "Berlin", d: "Atina" }, "a"),
    new Soru("5-Hangisi Fransa'nın başkentidir?", { a: "Roma", b: "Paris", c: "Berlin", d: "Atina" }, "b")
];
