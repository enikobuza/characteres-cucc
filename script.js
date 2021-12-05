window.addEventListener("DOMContentLoaded", function() {
    
        const selectGender = document.getElementById("chooseGender");
        console.log(selectGender);

        selectGender.addEventListener('change', (event) => {
            console.log(event.target.value)
            content = document.getElementById("displayGender").innerHTML = "";
            if ( event.target.value === "female") {
                document.getElementById("displayGender").insertAdjacentHTML("beforeend", `<img src="https://cdn-icons-png.flaticon.com/512/866/866954.png", 
                " alt=female>`);
            } else if (event.target.value === "male") {
                document.getElementById("displayGender").insertAdjacentHTML("beforeend", `<img src="https://cdn-icons-png.flaticon.com/512/1340/1340619.png"}
                " alt=male>`);
            } else {
            }; 
        });

        const selectRace = document.getElementById("chooseRace");
        console.log(selectRace);

        selectRace.addEventListener('change', (event) => {
            console.log(event.target.value)
            content = document.getElementById("displayRace").innerHTML = "";
            if ( event.target.value === "elf") {
                document.getElementById("displayRace").insertAdjacentHTML("beforeend", `<img class="pic" src="https://5e.tools/img/races/PHB/Elf.png", 
                " alt=elf>`);
            } else if (event.target.value === "fairy") {
                document.getElementById("displayRace").insertAdjacentHTML("beforeend", `<img class="pic" src="https://www.pngall.com/wp-content/uploads/2016/06/Fairy-PNG-Clipart.png"}
                " alt=fairy>`);
            } else if (event.target.value === "gnome") {
                document.getElementById("displayRace").insertAdjacentHTML("beforeend", `<img class="pic" src="https://5e.tools/img/races/PHB/Gnome.png"}
                " alt=gnome>`);
            } else {
            }; 
        });

        const selectClass = document.getElementById("chooseClass");
        console.log(selectClass);
        
        selectClass.addEventListener('change', (event) => {
            console.log(event.target.value)
            content = document.getElementById("displayClass").innerHTML = "";
            if ( event.target.value === "barbarian") {
                document.getElementById("displayClass").insertAdjacentHTML("beforeend", `<img src="https://i.dlpng.com/static/png/5318626-axe-battle-axe-battleaxe-medieval-viking-axe-war-axe-weapon-icon-viking-axe-png-512_512_preview.png", 
                " alt=barbarian>`);
            } else if (event.target.value === "monk") {
                document.getElementById("displayClass").insertAdjacentHTML("beforeend", `<img src="https://cdn-icons-png.flaticon.com/512/2858/2858837.png"}
                " alt=monk>`);
            } else if (event.target.value === "wizard") {
                document.getElementById("displayClass").insertAdjacentHTML("beforeend", `<img src="https://cdn4.iconfinder.com/data/icons/rpg-game-outline-1/64/wizard-512.png"}
                " alt=wizard>`);
            } else {
            }; 
        });

});
function loadEvent () {

}
window.addEventListener("load", loadEvent)