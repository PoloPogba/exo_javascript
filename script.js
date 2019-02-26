var footer = document.querySelector("footer");
var nb = 0;

var onFooterClick = function() {
    
    console.log("clique")
    nb += 1
    console.log("Vous avez cliquez :"+nb+" fois !")

};

footer.addEventListener("click", onFooterClick);





var onHamburgerClick = function() {
    var collapse = document.getElementById("navbarHeader")
    collapse.classList.toggle("collapse")
};

var button = document.getElementsByClassName("navbar-toggler");
button[0].addEventListener("click", onHamburgerClick);



var RedText = function() {
    var CardTest = document.getElementsByClassName("card-body")
    CardTest[0].style.color = "red"

};
var ButtonEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
ButtonEdit[0].addEventListener("click", RedText);


var Greentext = function() {
    var secondCard = document.getElementsByClassName("card-body")[1];
    if (secondCard.style.color === 'green'){
        secondCard.style.color = '' ;
    }
    else {

        secondCard.style.color = 'green'

    }

};

var ButtonEditTwo = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
ButtonEditTwo.addEventListener("click", Greentext);




var RemoveCSS = function() {

    var lol = document.getElementsByTagName("link")[0];
    var TestHref = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"


    if (lol.href == TestHref){
        lol.href ="nothing"
    }

    else  {
    lol.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    }
};


var NavHead = document.getElementsByTagName("header")[0];
NavHead.addEventListener("dblclick", RemoveCSS);





var ButtonView = document.getElementsByClassName("btn btn-sm btn-success");
for (let n=0; n<6; n++) {
ButtonView[n].addEventListener("mouseover", function() {
    var Disapear = document.getElementsByClassName("card-text");
    Disapear[n].classList.toggle("collapse")

});

};

//var lol = document.getElementsByClassName("card-img-top")
//lol[0].classList.toggle("collapse").width = "20%";
//lol[0].classListe.toggle("collapse").style.width
