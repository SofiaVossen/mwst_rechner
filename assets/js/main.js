// Anzeigen oder Ausblenden von Eingabefeld und Endergebnisfeld abh. von checked radiobutton und von neuladen der seite
// let nettoZuBrutto = document.getElementById("nettoZuBrutto");
// let bruttoZuNetto = document.getElementById("bruttoZuNetto");
// let showEingabeNetto = document.getElementById("eingabe_nettoBetrag");
// let showEingabeBrutto =document.getElementById("eingabe_bruttoBetrag");
// let showErgebnisBrutto =document.getElementById("ergebnis_bruttoBetrag");
// let showErgebnisNetto =document.getElementById("ergebnis_nettoBetrag");

// function radioClick() {
//     if (nettoZuBrutto.checked) {
//         showEingabeBrutto.style.display = "none";
//         showEingabeNetto.style.display="block";
//         showErgebnisNetto.style.display="none";
//         showErgebnisBrutto.style.display="block";
//     } else if (bruttoZuNetto.checked) {
//         showEingabeNetto.style.display= "none";
//         showEingabeBrutto.style.display="block";
//         showErgebnisBrutto.style.display="none";
//         showErgebnisNetto.style.display="block";
//     } 
// }


// // Anzeigen oder Ausblenden von Eingabefeld Bruttobetrag beim reload der Seite
// function hideEingabeBrutto(){
//     showEingabeBrutto.style.display = "none";
//     showErgebnisNetto.style.display="none";
// }

let nettoZuBruttoChecked = document.getElementById("nettoZuBrutto").checked=true;
let bruttoZuNettoChecked = document.getElementById("bruttoZuNetto").checked=true;
let nettoZuBruttoUnchecked = document.getElementById("nettoZuBrutto").checked=false;
let bruttoZuNettoUnchecked = document.getElementById("bruttoZuNetto").checked=false;

let showEingabeNetto = document.getElementById("eingabe_nettoBetrag");
let showEingabeBrutto =document.getElementById("eingabe_bruttoBetrag");
let showErgebnisBrutto =document.getElementById("ergebnis_bruttoBetrag");
let showErgebnisNetto =document.getElementById("ergebnis_nettoBetrag");

function radioClick(){
    if (nettoZuBruttoChecked ){
        showEingabeBrutto.style.display = "none";
        showEingabeNetto.style.display="block";
        showErgebnisNetto.style.display="none";
        showErgebnisBrutto.style.display="block";
    } else if (nettoZuBruttoUnchecked){


    }else if ()

}



// // berechnung mwst satz 7/19%
// let neunzehn=document.getElementById("neunzehn");
// let sieben=document.getElementById("sieben");
// function calcMwst(){
//     let typedNetto=document.getElementById("nettoBetrag").value;
//     let nineteenMwst=typedNetto*0.19;
//     let sevenMwst=typedNetto*0.07;
//     if(neunzehn.checked){
//         document.getElementById("bruttoErgebnis").innerHTML=nineteenMwst;
//     }else if (sieben.checked){
//         document.getElementById("bruttoErgebnis").innerHTML=sevenMwst;
//     }
    
// }







function calcMwst(){
    let neunzehn=document.getElementById("neunzehn");
    let sieben=document.getElementById("sieben");
    let typedNetto=document.getElementById("nettoBetrag").value;
    let typedBrutto=document.getElementById("bruttoBetrag").value;
    let endprice_N_to_B_nineteen=nineteenMwstNetto+typedNetto;
    let endprice_B_to_N_nineteen=typedBrutto-nineteenMwstBrutto;
    let nineteenMwstNetto=typedNetto*0.19;
    let nineteenMwstBrutto=typedBrutto*0.19;
    let sevenMwstNetto=typedNetto*0.07;
    let sevenMwstBrutto=typedBrutto*0.07;
    let endprice_N_to_B_seven=sevenMwstNetto+typedNetto;
    let endprice_B_to_N_seven=typedBrutto-sevenMwstBrutto;
    if(neunzehn.checked && nettoZuBrutto.checked ){
        document.getElementById("mwstErgebnis").innerHTML=nineteenMwstNetto;
        document.getElementById("bruttoErgebnis").innerHTML=endprice_N_to_B_nineteen;
    }else if (sieben.checked && nettoZuBrutto.checked){
        document.getElementById("mwstErgebnis").innerHTML=sevenMwstNetto;
        document.getElementById("bruttoErgebnis").innerHTML=endprice_N_to_B_seven;
    } else if(neunzehn.checked && bruttoZuNetto.checked){
        document.getElementById("mwstErgebnis").innerHTML=nineteenMwstBrutto;
        document.getElementById("nettoErgebnis").innerHTML=endprice_B_to_N_nineteen;
    }else if (sieben.checked && bruttoZuNetto.checked){
        document.getElementById("mwstErgebnis").innerHTML=sevenMwstBrutto;
        document.getElementById("nettoErgebnis").innerHTML=endprice_B_to_N_seven;
    }
}
