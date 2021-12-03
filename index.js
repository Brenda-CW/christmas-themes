const body = document.getElementById("body");
const greeting = document.getElementById("greeting");
const christmasBtn = document.getElementById("christmas");
const snowBtn = document.getElementById("snow");
const candyCaneBtn = document.getElementById("candyCane");
const photoCred = document.getElementById("photoCred");

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
    //create event handler for christmas and snow buttons
    //snow styles applied
    //christmas styles turned off

snowBtn.onclick = function() {
    toggleThemeSnow();
}

christmasBtn.onclick = function() {
    toggleThemeChristmas();
}

candyCaneBtn.onclick = function() {
    toggleThemeCandy();
}

//CHANGE THEME TO SNOW
const toggleThemeSnow = function() {
    if(body.classList.contains("snow")){
        console.log("Theme is already snow")
    } else {
        body.classList.remove("christmas");  
        body.classList.remove("candyCane");  
        body.classList.add("snow");
        greeting.innerText = "❄️ Let's play in the snow! ❄️";
        photoCred.innerText = "Photo by Jessica Fadel on Unsplash"
    }
}

//CHANGE THEME TO CHRISTMAS
const toggleThemeChristmas = function() {
    if(body.classList.contains("christmas")){
        console.log("Theme is already Christmas")
    } else {
        body.classList.remove("snow"); 
        photoCred.innerText = "" ;
        body.classList.remove("candyCane");  
        body.classList.add("christmas");
        greeting.innerText = "Merry Christmas! 🎁 "
    }
}

//CHANGE THEME TO CANDY CANE
const toggleThemeCandy = function() {
    if(body.classList.contains("candyCane")){
        console.log("Theme is already Candy Canes")
    } else {
        body.classList.remove("snow");
        photoCred.innerText = "" ;   
        body.classList.remove("christmas")   
        body.classList.add("candyCane");
        greeting.innerText = "Sweet Delights!"
    }
}

    //THIS DOESN'T WORK
// for (let i = 0; i < radioButtons.length; i++) {
//     radioButtons[i].addEventListener('change', ($event)=> {
//         body.classList = $event.target.value;
//     });
// }

    //THIS DOESN'T WORK
// snowBtn.addEventListener("click", (e) => {
//     body.classList.remove("christmas");
//     body.classList.remove("candyCane");
//     body.classList.add("snow");
//     greeting.innerText = "❄️ Let's play in the snow! ❄️"
// })

// christmasBtn.addEventListener("click", (e) => {
//     body.classList.remove("snow");
//     body.classList.remove("candyCane");
//     body.classList.add("christmas");
//     greeting.innerText = "Merry Christmas! 🎁 "
// })

// candyCaneBtn.addEventListener("click", (e) => {
//     body.classList.remove("snow");
//     body.classList.remove("christmas");
//     body.classList.add("candyCane");
//     greeting.innerText = "Sweet Delights! 🎁 "
// })

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.