/*
*ACQUISTO BURGER
*NOME BURGER PERSONALIZZATO OBBLIGATORIO
*CALCOLO DEL PREZZO BURGER CON LE AGGIUNTE DEGLI INGREDIENTI
*SPUNTA DEGLI INGREDIENTI MODIFICABILE
*INTERAZIONE CON LE SPUNTE ANCHE DALLO SPAN ADD
*/

// REFERENCES
var nameBurger = document.getElementById("name");
var Ingredients = document.getElementsByClassName("ingredient-checkbox");
var add = document.getElementsByClassName("ingredient-add");
var discount = document.getElementById("coupon");
var button = document.getElementById("button");


// INTERAZIONE CON CLICK BUTTON
button.addEventListener("click", function() {

    // NOME BURGER PERSONALIZZATO OBBLIGATORIO
    if(nameBurger.value === ""){
        alert("Attenzione, non hai inserito il nome del tuo Burger!");
    }else{
        console.log("nomepieno");
    }
})