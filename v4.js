var selector = document.getElementById("selector");

function home(e){
    console.log("home");
    selector.className = "selectCircle";
}


function pfolio(event){
    console.log("portfolio");
    selector.className = "selectCircle Setpfolio";

}

function aboutMe(e){
    console.log("aboutMe");
    selector.className = "selectCircle Setpfile";

}

function contactMe(e){
    console.log("contactMe");
    selector.className = "selectCircle Setemail";

}