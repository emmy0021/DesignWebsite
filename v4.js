var selector = document.getElementById("selector");
var home = document.getElementById('houseIcon');
var portfolio = document.getElementById('portfolioIcon');
var profile = document.getElementById('profileIcon');
var mail = document.getElementById('mailIcon');


buttons = [home, portfolio, profile, mail];

function homeF(e) {
    console.log("home");
    selector.className = "selectCircle";
    pick('house');
    home.className = 'houseIcon homeSelected';
}


function pfolio(e) {
    console.log("portfolio");
    selector.className = "selectCircle Setpfolio";
    pick('portfolio');
    portfolio.className = 'portfolioIcon portfolioSelected';

}

function aboutMe(e) {
    console.log("aboutMe");
    selector.className = "selectCircle Setpfile";
    pick('profile');
    profile.className = 'profileIcon profileSelected';
}

function contactMe(e) {
    console.log("contactMe");
    selector.className = "selectCircle Setemail";
    pick('mail');
    mail.className = 'mailIcon mailSelected';
}



function pick(name, color = "#FFFFFF") { //for buttons
    changeColorAll();
    let fName = '--' + name + '-border-color';
    document.documentElement.style.setProperty(fName, color);
    moveButtonsDown();

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