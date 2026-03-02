let mobil_nav_icon = document.getElementById("mobil-nav-icon");
let aside = document.getElementById("aside");

mobil_nav_icon.addEventListener('click', function() {

    if (aside.style.right == "0px") {
        aside.style.right = "-250px";
    } else {
        aside.style.right = "0px";
    }

});

document.addEventListener('click', function(event) {

    if (!aside.contains(event.target) && event.target !== mobil_nav_icon) {
        aside.style.right = "-250px";
    }

});