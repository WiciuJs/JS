 function actions (liczba, liczba1) {
   
   let dodawanie = liczba + liczba1;
   let odejmowanie = liczba - liczba1;
   let mnozenie = liczba * liczba1 ;
   if (odejmowanie < 0 ){
      console.log("Wynik jest nieprawidłowy"); 
   }else if (dodawanie < 0 ){
      console.log("Wynik jest nieprawidłowy"); 
   }else if (mnozenie < 0 ){
      console.log("Wynik jest nieprawidłowy"); 
   }else {
      console.log("Wynik dodawania wynosi = " + dodawanie);
      console.log("Wynik odejmowania wynosi =  " + odejmowanie);
      console.log("Wynik mnożenia wynosi = " + mnozenie);
   }
  
  } 
  
  actions(50, 51);


