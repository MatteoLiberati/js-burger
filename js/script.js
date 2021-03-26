/*
***********************
*ACQUISTO BURGER
***********************
*NOME BURGER PERSONALIZZATO OBBLIGATORIO
*CALCOLO DEL PREZZO BURGER CON LE AGGIUNTE DEGLI INGREDIENTI
*CALCOLO CON SCONTO
*INTERAZIONE CON LE SPUNTE ANCHE DALLO SPAN ADD
*/

// REFERENCES
var nameBurger = document.getElementById("name");
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var titles = document.getElementsByTagName("label");
var imgs = document.getElementsByTagName("img");
var add = document.getElementsByClassName("ingredient-add");
var discount = document.getElementById("coupon");
var button = document.getElementById("button");
var priceDisplay = document.getElementById("price");

// CONSTANT VARIABLES
var codeDiscount = ["burgerspecial42","robertaèbella","burgerobicbuono"];

//ADD CLASS LABEL
for(var i=0; i<titles.length; i++){
    title = titles[i];
    title.classList.add("cursor-pointer");
}

//ADD CLASS IMGS
for(var i=0; i<imgs.length; i++){
    img = imgs[i];
    img.classList.add("cursor-pointer");
}

//INTERAZIONE CON LE SPUNTE ANCHE DALLO SPAN ADD
for(var i=0; i<add.length; i++){
    singleAdd = add[i];
    singleAdd.classList.add("cursor-pointer");
    singleAdd.addEventListener("click", function(){
        this.previousElementSibling.checked = !this.previousElementSibling.checked ;
    })
}

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
        }
        
        // CONTROLLO SCONTO DA APPLICARE
        if(codeDiscount.includes(discount.value)){
            console.log("Sconto applicato del 20%");
            price -= price * .2;
            }
        
        // STAMPA A VIDEO DEL PREZZO AGGIORNATO
        priceDisplay.innerHTML = price.toFixed(2);
    }
})