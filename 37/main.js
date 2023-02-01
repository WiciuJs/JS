document.getElementById('dodaj').onclick = function clik() {
    let paragraf = document.getElementById("tekst").innerText;
    let napis = paragraf.replace("", "Dowolny opis");
    document.getElementById("tekst").innerText = napis;
}

document.getElementById('usun').onclick = function usun() {
    let tekst = document.getElementById('tekst');
    tekst.innerText = "";
}