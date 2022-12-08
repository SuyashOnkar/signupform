
let invis = document.getElementById("hidden")
let button = document.getElementById("button");
let container = document.getElementById("white-container");

container.addEventListener('mouseleave',()=>{
    let pass = document.getElementById("password");
    let cpass = document.getElementById("cpassword");
    if(pass.value!=cpass.value){
        invis.classList.remove("invis");
        invis.classList.add('vis');
    }
    if(pass.value==cpass.value){
        invis.classList.remove("vis");
        invis.classList.add('invis');
    }

});