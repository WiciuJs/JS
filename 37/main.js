document.getElementById('dodaj').onclick = function clik() {
    let paragraf = document.getElementById("tekst").innerHTML;
    let napis = paragraf.replace("", "Dowolny opis");
    document.getElementById("tekst").innerHTML = napis;
}

document.getElementById('usun').onclick = function usun() {
    let tekst = document.getElementById('tekst');
    tekst.remove(elem);
   }