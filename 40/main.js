
let przycisk = document.querySelector('button')
let text1 = document.getElementById("imie");
let text2 = document.getElementById("nazwisko");
let text3 = document.getElementById("telefon");
let dane_imie = document.getElementById("name");
let dane_nazwisko = document.getElementById("surname");
let dane_telefon = document.getElementById("phone");
let wyczysc = document.getElementById("clear")

przycisk.addEventListener('click', () => {
    dane_imie.innerText = text1.value;
    dane_nazwisko.innerText = text2.value;
    dane_telefon.innerText = text3.value;
})

wyczysc.addEventListener('click', () => {
    let usun_imie = dane_imie;
    let usun_nazwisko = dane_nazwisko;
    let usun_telefon = dane_telefon;
    usun_imie.innerText = "";
    usun_nazwisko.innerText = "";
    usun_telefon.innerText = "";
})