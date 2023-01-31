
function przedzial(n) {
    if (n > 100 && n <= 200) {
       return(n + " należy do przedziału")
    } else {
        return(n + " nie należy do przedziału ")

    }
}
let wynik = przedzial(210);
console.log(wynik);