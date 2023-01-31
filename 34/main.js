let napis = "Uwielbiam JavaScript";
let napis2 = "Jestem świetnym programistą";


function compare(text, text1) {
    if (text > text1) {
        return text;
    } else {
        return text1;
    }

}

const wynik = compare(napis, napis2);
console.log(wynik);