
function clik() {
   let paragraf = document.getElementById("opis").innerHTML;
   let napis = paragraf.replace("", "Dowolny opis");
   document.getElementById("opis").innerHTML = napis;
}