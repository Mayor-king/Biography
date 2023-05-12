const button = document.querySelector(".btn");
const chgtext = document.getElementById('update')
button.addEventListener('click', ()=> {
    chgtext.innerText = "I am currently learning JavaScript."
})