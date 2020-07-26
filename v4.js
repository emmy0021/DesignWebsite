var selector = document.getElementById("selector");
var home = document.getElementById('houseIcon');
var portfolio = document.getElementById('portfolioIcon');
var profile = document.getElementById('profileIcon');
var mail = document.getElementById('mailIcon');
var profileDiv = document.getElementById("profile");
var contactDiv = document.getElementById("contact");
var items = document.getElementById("items");

var arrItems = document.getElementsByClassName("item");

var images = ['./public/DelPaso.jpg', './public/GoldenRamen.jpg'];

for (var i = 0; i < images.length; i++) { //add images to home porfolio
    let div = document.createElement('div');
    div.className = 'item';
    div.id = i;
    div.style.backgroundImage = 'url(' + images[i] + ')';

    items.appendChild(div);
}


buttons = [home, portfolio, profile, mail];

function homeF(e) {
    console.log("home");
    selector.className = "selectCircle";
    pick('house');
    home.className = 'houseIcon homeSelected';
    tabs[1].className = 'tab1 homeLabel';
    profileDiv.style.visibility = "hidden";
    contactDiv.style.visibility = "hidden";
}


function pfolio(e) {
    console.log("portfolio");
    selector.className = "selectCircle Setpfolio";
    pick('portfolio');
    portfolio.className = 'portfolioIcon portfolioSelected';
    tabs[2].className = 'tab2 portfolioLabel';
    profileDiv.style.visibility = "hidden";
    contactDiv.style.visibility = "hidden";



}

function aboutMe(e) {
    console.log("aboutMe");
    selector.className = "selectCircle Setpfile";
    pick('profile');
    profile.className = 'profileIcon profileSelected';
    tabs[3].className = 'tab3 profileLabel';
    profileDiv.style.visibility = "visible";
    contactDiv.style.visibility = "hidden";


}

function contactMe(e) {
    console.log("contactMe");
    selector.className = "selectCircle Setemail";
    pick('mail');
    mail.className = 'mailIcon mailSelected';
    tabs[4].className = 'tab4 mailLabel';
    profileDiv.style.visibility = "hidden";
    contactDiv.style.visibility = "visible";



}



function pick(name, color = "#FFFFFF") { //for buttons
    changeColorAll();
    let fName = '--' + name + '-border-color';
    document.documentElement.style.setProperty(fName, color);
    moveButtonsDown();
    removeLabels();

}

function changeColorAll() {
    names = ['house', 'portfolio', 'profile', 'mail'];

    names.forEach(element => {
        let fName = '--' + element + '-border-color';
        document.documentElement.style.setProperty(fName, '#142634');

    });

    fName = '--' + name + '-border-color';

}


function moveButtonsDown() {
    home.className = 'houseIcon';
    portfolio.className = 'portfolioIcon';
    profile.className = 'profileIcon';
    mail.className = 'mailIcon';

}

tabs = document.getElementsByClassName('nav')[0].children;

function removeLabels() {

    for (var i = 1; i < tabs.length; i++) {
        tabs[i].className = 'tab' + i;
    }
}

document.getElementById("view").addEventListener('click', function () {
    pfolio();
});



document.getElementById("portfolioLabel").addEventListener('click', function () {
    pfolio();
});





window.onclick = e => {
    if(e.target.className === 'item'){
        let id = e.target.id;
        console.log(id);
    } 
}