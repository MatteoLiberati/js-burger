/*
***********************
*ACQUISTO BURGER
***********************
*NOME BURGER PERSONALIZZATO OBBLIGATORIO
*CALCOLO DEL PREZZO BURGER CON LE AGGIUNTE DEGLI INGREDIENTI
*SPUNTA DEGLI INGREDIENTI MODIFICABILE
*INTERAZIONE CON LE SPUNTE ANCHE DALLO SPAN ADD
*/

// REFERENCES
var nameBurger = document.getElementById("name");
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var add = document.getElementsByClassName("ingredient-add");
var discount = document.getElementById("coupon");
var button = document.getElementById("button");
var priceDisplay = document.getElementById("price");



// INTERAZIONE CON CLICK BUTTON
button.addEventListener("click", function() {

    // NOME BURGER PERSONALIZZATO OBBLIGATORIO
    if(nameBurger.value.trim() === ""){
        alert("Attenzione, non hai inserito il nome del tuo Burger!");
    } else{
        var price = 50;

        //CONTROLLO CHECK INGREDIENTI
        for(var i=0; i<ingredients.length; i++){
            var ingredient = ingredients[i];
        
            if(ingredient.checked){
                console.log("Selezionato " +ingredient.id + " di valore " + ingredient.value);
                price += parseInt(ingredient.value);
            }
            // STAMPA A VIDEO DEL PREZZO AGGIORNATO
            priceDisplay.innerHTML = price.toFixed(2);
        }

    }

})